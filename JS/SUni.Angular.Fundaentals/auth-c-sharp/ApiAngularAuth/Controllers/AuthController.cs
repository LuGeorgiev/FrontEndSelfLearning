using ApiAngularAuth.Models.Data;
using ApiAngularAuth.Models.View.User;
using ApiAngularAuth.Repositories.Contracts;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ApiAngularAuth.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository authRepo;
        private readonly IConfiguration config;
        private readonly IMapper mapper;

        public AuthController(IAuthRepository authRepo, IConfiguration config, IMapper mapper)
        {
            this.authRepo = authRepo;
            this.config = config;
            this.mapper = mapper;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto model)
        {
            var user = await this.authRepo.Login(model.Email.ToLower(), model.Password);
            if (user == null)
            {
                return this.Unauthorized();
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Email)
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
                fullName = user.FullName
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto model)
        {
            if (! this.ModelState.IsValid)
            {
                return this.BadRequest("Inavalid data");
            }

            model.Email = model.Email.ToLower();
            if (await this.authRepo.UserExists(model.Email))
            {
                return BadRequest("Email already exists!");
            }

            User userToCreate;
            try
            {
                userToCreate = this.mapper.Map<User>(model);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
            var createedUser = await this.authRepo.Register(userToCreate, model.Password);

            if (createedUser == null)
            {
                return this.UnprocessableEntity();
            }

            return StatusCode(201, new
            {
                email = createedUser.Email,
                fullName = createedUser.FullName
            });
        }
    }
}
