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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>(ent => 
            {
                ent.HasKey(e => e.Id);

                ent.Property(e => e.Id).HasColumnName("Id");

                ent.Property(e => e.Author)
                .HasMaxLength(50)
                .IsUnicode(false);

                ent.Property(x => x.Description)
                .HasMaxLength(200)
                .IsUnicode(false);

                ent.Property(x => x.Isbn)
                .HasColumnName("ISBN")
                .HasMaxLength(50)
                .IsUnicode(false);

                ent.Property(x => x.Price)
                .HasColumnType("decimal(18, 0)");

                ent.Property(x => x.Publisher)
                .HasMaxLength(50)
                .IsUnicode(false);

                ent.Property(x => x.Title)
                .HasMaxLength(100)
                .IsUnicode(false);
            });

            modelBuilder.Entity<User>(ent =>
            {
                ent.HasKey(x => x.Id);

                ent.Property(x => x.Id)
                .HasColumnName("Id");

                ent.Property(x => x.Email)
                .HasMaxLength(50)
                .IsUnicode(false);

                ent.HasAlternateKey(x => x.Email);

                ent.Property(x => x.Password)
                .HasMaxLength(128);

                ent.Property(x => x.Salt)
                .HasMaxLength(128);              
            });

        }
    }
}
