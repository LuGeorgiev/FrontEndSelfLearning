using api_furniture_system.Models.Data;
using api_furniture_system.Models.Dto.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_furniture_system.Services
{
    public interface IAuthService
    {
        Task<User> RegisterAsync(RegisterModel user);

        Task<User> LoginAsync(string email, string password);

        Task<bool> UserExistsAsync(string email);
    }
}
