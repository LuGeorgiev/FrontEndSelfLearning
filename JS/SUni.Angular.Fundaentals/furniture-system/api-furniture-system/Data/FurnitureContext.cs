using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_furniture_system.Data
{
    public class FurnitureContext :DbContext
    {
        public FurnitureContext()
        {
        }

        public FurnitureContext(DbContextOptions<FurnitureContext> opt)
            :base(opt)
        {
        }
    }
}
