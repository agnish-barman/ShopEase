namespace ShopEase.Domain.Entities;

public class CartItem
{
    public Guid Id { get; set; }

    // Foreign Key
    public Guid CartId { get; set; }

    // Navigation Property
    public Cart Cart { get; set; } = null!;

    // Foreign Key
    public Guid ProductVariantId { get; set; }

    // Navigation Property
    public ProductVariant ProductVariant { get; set; } = null!;

    public int Quantity { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }
}