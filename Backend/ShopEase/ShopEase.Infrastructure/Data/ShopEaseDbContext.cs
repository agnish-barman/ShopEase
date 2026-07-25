using Microsoft.EntityFrameworkCore;
using ShopEase.Domain.Entities;

namespace ShopEase.Infrastructure.Data;

public class ShopEaseDbContext : DbContext
{
    public ShopEaseDbContext(DbContextOptions<ShopEaseDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }

    public DbSet<Role> Roles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasOne(u => u.Role)
            .WithMany(r => r.Users)
            .HasForeignKey(u => u.RoleId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}