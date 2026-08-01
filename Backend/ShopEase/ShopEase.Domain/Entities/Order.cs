namespace ShopEase.Domain.Entities;

public class Order
{
    public Guid Id { get; set; }

    // Foreign Key
    public Guid UserId { get; set; }

    // Navigation Property
    public User User { get; set; } = null!;

    // Foreign Key
    public Guid CheckoutId { get; set; }

    // Navigation Property
    public Checkout Checkout { get; set; } = null!;

    public string OrderNumber { get; set; } = string.Empty;

    public decimal TotalAmount { get; set; }

    public string Status { get; set; } = "Pending";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    // Navigation Property
    public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}