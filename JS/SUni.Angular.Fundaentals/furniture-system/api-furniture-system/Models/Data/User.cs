using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api_furniture_system.Models.Data
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }


        public string NickName { get; set; }

        [Required]
        public string Email { get; set; }

        public byte[] Password { get; set; }

        public byte[] Salt { get; set; }

        public virtual ICollection<Furniture> Furnitures { get; set; } = new HashSet<Furniture>();
    }
}
