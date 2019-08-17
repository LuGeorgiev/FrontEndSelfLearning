using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using static api_furniture_system.Infrastructure.Constants;

namespace api_furniture_system.Models.Dto.User
{
    public class RegisterModel
    {
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Email must be at least 3 characters")]
        public string NickName { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Email must be at least 3 characters")]
        [RegularExpression(PASSWORD_PATTERN, ErrorMessage = "Mail is not valid")]
        public string Email { get; set; }

        [Required]
        [StringLength(64, MinimumLength = 8, ErrorMessage = "You must provide password between 8 and 20 characters")]
        public string Password { get; set; }
    }
}
