using ApiAngularAuth.Data;
using ApiAngularAuth.Models.Data;
using ApiAngularAuth.Repositories.Contracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAngularAuth.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly BookStoreContext db;

        public AuthRepository(BookStoreContext db)
        {
            this.db = db;
        }

        public async Task<User> Login(string email, string password)
        {
            var user = await db.Users.FirstOrDefaultAsync(x => x.Email == email);
            if (user == null)
            {
                return null;
            }
            if (!VerifyPassHash(password, user.Password, user.Salt))
            {
                return null;
            }

            return user;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash;
            byte[] salt;

            CreatePasswordHash(password, out passwordHash, out salt);
            user.Password = passwordHash;
            user.Salt = salt;

            await db.Users.AddAsync(user);
            await db.SaveChangesAsync();

            return user;
        }

        public Task<bool> UserExists(string email)
            => this.db.Users.AnyAsync(x => x.Email == email);

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                salt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPassHash(string password, byte[] passHash, byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(salt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passHash[i])
                    {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}
