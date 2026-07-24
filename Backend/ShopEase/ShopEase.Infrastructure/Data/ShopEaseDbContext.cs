using Microsoft.EntityFrameworkCore;

namespace ShopEase.Infrastructure.Data;

//Inheritance:This tells Entity Framework Core that this class is our database context.
public class ShopEaseDbContext : DbContext
{
    //Constructor: ASP.NET Core will automatically provide the database configuration through Dependency Injection
    public ShopEaseDbContext(DbContextOptions<ShopEaseDbContext> options)
        : base(options)
    {
    }
}