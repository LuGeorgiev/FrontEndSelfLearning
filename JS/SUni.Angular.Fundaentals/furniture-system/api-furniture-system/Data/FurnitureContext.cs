using api_furniture_system.Models.Data;
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

        public virtual DbSet<User> Users { get; set; }

        public virtual DbSet<Furniture> Furnitures { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(ent =>
            {
                ent.HasAlternateKey(x => x.Email);
            });
        }
    }
}
