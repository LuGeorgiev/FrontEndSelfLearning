using api_furniture_system.Data;
using api_furniture_system.Models.Data;
using api_furniture_system.Models.Dto.User;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

using System;
using System.Threading.Tasks;

namespace api_furniture_system.Services.Implementations
{
    public class AuthService : IAuthService
    {
        private readonly FurnitureContext db;
        private readonly IMapper mapper;

        public AuthService(FurnitureContext db, IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }

        public async Task<User> LoginAsync(string email, string password)
        {
            var user = await this.db.Users.SingleOrDefaultAsync(x => x.Email == email);

            if (! VerifyPasswordHash(password, user.Password, user.Salt))
            {
                return null;
            }

            return user;
        }


        public async Task<User> RegisterAsync(RegisterModel user)
        {
            byte[] passwordHash;
            byte[] salt;

            CreatePasswordHash(user.Password, out passwordHash, out salt);

            var registerdUser = this.mapper.Map<User>(user);
            registerdUser.Salt = salt;
            registerdUser.Password = passwordHash;

            await this.db.Users.AddAsync(registerdUser);
            await this.db.SaveChangesAsync();

            return registerdUser;
        }



        public async Task<bool> UserExistsAsync(string email)
            => await this.db.Users.AnyAsync(x => x.Email == email);

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                salt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] hashedPassword, byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(salt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != hashedPassword[i])
                    {
                        return false;
                    }
                }
            }

            return true;
        }
    }
}
