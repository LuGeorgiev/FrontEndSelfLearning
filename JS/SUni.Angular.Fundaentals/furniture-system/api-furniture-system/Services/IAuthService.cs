using api_furniture_system.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_furniture_system.Services
{
    public interface IAuthService
    {
        Task<User> Register(User user, string password);

        Task<User> Login(string email, string password);

        Task<bool> UserExists(string email);
    }
}
