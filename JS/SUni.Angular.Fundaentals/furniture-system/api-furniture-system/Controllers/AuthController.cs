using api_furniture_system.Models.Dto.User;
using api_furniture_system.Services;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace api_furniture_system.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService auth;
        private readonly IConfiguration config;

        public AuthController(IAuthService auth, IConfiguration config)
        {
            this.auth = auth;
            this.config = config;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (! this.ModelState.IsValid)
            {
                return this.Unauthorized();
            }

            var user = await this.auth.LoginAsync(model.Email.ToLower(), model.Password);
            if (user == null)
            {
                return this.Unauthorized();
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.NickName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return this.Ok(new
            {
                token = tokenHandler.WriteToken(token),
                email = user.Email,
                nickName = user.NickName
            });
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (! this.ModelState.IsValid)
            {
                return this.BadRequest("Inavlid data");
            }

            model.Email = model.Email.ToLower();
            if (await this.auth.UserExistsAsync(model.Email))
            {
                return BadRequest("Email already exists!");
            }

            var createdUser = await this.auth.RegisterAsync(model);

            if (createdUser ==null)
            {
                return this.UnprocessableEntity();
            }

            return StatusCode(201, new
            {
                email = createdUser.Email,
                nickName = createdUser.NickName
            });
        }

    }
}
