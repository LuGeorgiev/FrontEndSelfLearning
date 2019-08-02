using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAngularAuth.Models.View.Book
{
    public class BookDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Isbn { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Author { get; set; }

        [Required]
        public string Description { get; set; }

        public string Publisher { get; set; }

        public int? PublishedYear { get; set; }

        public decimal? Price { get; set; }
    }
}
