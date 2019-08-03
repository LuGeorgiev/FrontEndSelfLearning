using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAngularAuth.Models.Data
{
    public class Book
    {
        public int Id { get; set; }

        public string Isbn { get; set; }

        public int Quantity { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public string Description { get; set; }

        public string Publisher { get; set; }

        public int? PublishedYear { get; set; }

        public decimal? Price { get; set; }

        public virtual Guid UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }
    }
}
