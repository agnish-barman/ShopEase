namespace ShopEase.Domain.Entities;

public class User
{
    public Guid Id { get; set; }

    public string FirstName { get; set; } = string.Empty;

    public string LastName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string PasswordHash { get; set; } = string.Empty;

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    // Foreign Key
    public Guid RoleId { get; set; }

    // Navigation Property
    public Role Role { get; set; } = null!;

    // Navigation Property
    public ICollection<Cart> Carts { get; set; } = new List<Cart>();
}