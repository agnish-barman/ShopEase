namespace ShopEase.Domain.Entities;

public class OrderItem
{
    public Guid Id { get; set; }

    // Foreign Key
    public Guid OrderId { get; set; }

    // Navigation Property
    public Order Order { get; set; } = null!;

    // Foreign Key
    public Guid ProductVariantId { get; set; }

    // Navigation Property
    public ProductVariant ProductVariant { get; set; } = null!;

    public int Quantity { get; set; }

    public decimal UnitPrice { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }
}