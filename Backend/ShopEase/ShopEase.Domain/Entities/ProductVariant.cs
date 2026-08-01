namespace ShopEase.Domain.Entities;

public class ProductVariant
{
    public Guid Id { get; set; }

    public string SKU { get; set; } = string.Empty;

    public string Size { get; set; } = string.Empty;

    public string Color { get; set; } = string.Empty;

    public int StockQuantity { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    // Foreign Key
    public Guid ProductId { get; set; }

    // Navigation Property
    public Product Product { get; set; } = null!;

    // Navigation Property
    public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    // Navigation Property
    public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}