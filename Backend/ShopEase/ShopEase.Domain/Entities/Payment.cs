namespace ShopEase.Domain.Entities
{
    public class Payment
    {
        // Primary Key
        public Guid Id { get; set; }

        // Foreign Key
        public Guid OrderId { get; set; }

        // Navigation Property
        public Order Order { get; set; } = null!;

        // Payment Information
        public string PaymentMethod { get; set; } = string.Empty;

        public string TransactionId { get; set; } = string.Empty;

        public decimal Amount { get; set; }

        public string Status { get; set; } = "Pending";

        public DateTime? PaidAt { get; set; }

        // Audit Fields
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? UpdatedAt { get; set; }
    }
}