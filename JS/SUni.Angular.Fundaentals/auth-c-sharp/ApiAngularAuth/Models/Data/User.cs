using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAngularAuth.Models.Data
{
    public class User
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string  FullName { get; set; }

        public string Email { get; set; }

        public byte[] Password { get; set; }

        public byte[] Salt { get; set; }
    }
}
