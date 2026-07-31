namespace ShopEase.Domain.Entities;

public class Checkout
{
    public Guid Id { get; set; }

    // Foreign Key
    public Guid UserId { get; set; }

    // Navigation Property
    public User User { get; set; } = null!;

    // Foreign Key
    public Guid CartId { get; set; }

    // Navigation Property
    public Cart Cart { get; set; } = null!;

    public string ShippingAddress { get; set; } = string.Empty;

    public string BillingAddress { get; set; } = string.Empty;

    public string ContactNumber { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }
}