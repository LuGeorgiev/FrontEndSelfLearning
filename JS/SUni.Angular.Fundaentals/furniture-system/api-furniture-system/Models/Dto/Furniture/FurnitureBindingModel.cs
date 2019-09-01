using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

using static api_furniture_system.Infrastructure.Constants;

namespace api_furniture_system.Models.Dto.Furniture
{
    public class FurnitureBindingModel
    {

        [Required]
        [MaxLength(50)]
        [MinLengthAttribute(4)]
        public string Make { get; set; }

        [Required]
        [MaxLength(50)]
        [MinLengthAttribute(4)]
        public string Model { get; set; }

        [Required]
        [Range(typeof(Decimal), "0", "79228162514264337593543950335")]
        public decimal Price { get; set; }

        [Required]
        [Range(1950, 2050)]
        public int Year { get; set; }

        [Url]
        [Required]
        public string ImgUrl { get; set; }

        public string Materials { get; set; }

        [NotMapped]
        public string UserEmail { get; set; }

    }
}
