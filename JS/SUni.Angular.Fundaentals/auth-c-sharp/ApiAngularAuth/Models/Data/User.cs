using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAngularAuth.Models.Data
{
    public class User
    {
        
        public Guid Id { get; set; }

        public string  FullName { get; set; }

        public string Email { get; set; }

        public byte[] Password { get; set; }

        public byte[] Salt { get; set; }

        public virtual ICollection<Book> UserBooks { get; set; }
    }
}
