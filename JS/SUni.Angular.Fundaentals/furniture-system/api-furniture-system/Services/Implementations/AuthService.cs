﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_furniture_system.Models.Data;

namespace api_furniture_system.Services.Implementations
{
    public class AuthService : IAuthService
    {
        public Task<User> Login(string email, string password)
        {
            throw new NotImplementedException();
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