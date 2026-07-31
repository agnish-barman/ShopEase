namespace ShopEase.Domain.Entities;

public class Cart
{
    public Guid Id { get; set; }

    // Foreign Key
    public Guid UserId { get; set; }

    // Navigation Property
    public User User { get; set; } = null!;

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    // Navigation Property
    public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    // Navigation Property
    public ICollection<Checkout> Checkouts { get; set; } = new List<Checkout>();
}