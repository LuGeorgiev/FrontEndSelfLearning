using Microsoft.EntityFrameworkCore;

using ApiAngularAuth.Models.Data;

namespace ApiAngularAuth.Data
{
    public class BookStoreContext : DbContext
    {
        public BookStoreContext()
        {   
        }

        public BookStoreContext(DbContextOptions<BookStoreContext> options)
            :base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Book> Books { get; set; }


        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        optionsBuilder
        //            .UseSqlServer(Configuration.ConnectionString);
        //    }
        //}
    }
}
