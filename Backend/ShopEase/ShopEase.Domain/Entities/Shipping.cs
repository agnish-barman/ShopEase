namespace ShopEase.Domain.Entities
{
    public class Shipping
    {
        public Guid Id { get; set; }

        // Foreign Key
        public Guid OrderId { get; set; }

        // Navigation Property
        public Order Order { get; set; } = null!;

        // Shipping Information
        public string Carrier { get; set; } = string.Empty;

        public string TrackingNumber { get; set; } = string.Empty;

        public string ShippingStatus { get; set; } = "Pending";

        public DateTime? ShippedDate { get; set; }

        public DateTime? EstimatedDelivery { get; set; }

        public DateTime? DeliveredDate { get; set; }

        // Audit Fields
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? UpdatedAt { get; set; }
    }
}