using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_furniture_system.Data;
using api_furniture_system.Models.Data;
using Microsoft.EntityFrameworkCore;

namespace api_furniture_system.Services.Implementations
{
    public class AuthService : IAuthService
    {
        private readonly FurnitureContext db;

        public AuthService(FurnitureContext db)
        {
            this.db = db;
        }

        public async Task<User> Login(string email, string password)
        {
            var user = await this.db.Users.SingleOrDefaultAsync(x => x.Email == email);

            return user;
        }

        public Task<User> Register(User user, string password)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UserExists(string email)
        {
            throw new NotImplementedException();
        }
    }
}
