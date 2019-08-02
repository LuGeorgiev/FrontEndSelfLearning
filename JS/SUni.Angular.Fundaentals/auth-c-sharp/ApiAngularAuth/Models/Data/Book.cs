using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAngularAuth.Models.Data
{
    public class Book
    {
        public int Id { get; set; }

        public string Isbn { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public string Description { get; set; }

        public string Publisher { get; set; }

        public int? PublishedYear { get; set; }

        public decimal? Price { get; set; }

        public virtual string UserId { get; set; }

        public virtual User User { get; set; }
    }
}
