namespace ShopEase.Domain.Entities
{
    public class Inventory
    {
        public Guid Id { get; set; }

        // Foreign Key
        public Guid ProductVariantId { get; set; }

        // Navigation Property
        public ProductVariant ProductVariant { get; set; } = null!;

        // Inventory Information
        public int AvailableQuantity { get; set; }

        public int ReservedQuantity { get; set; }

        public int ReorderLevel { get; set; }

        public DateTime? LastRestockedAt { get; set; }

        // Audit Fields
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? UpdatedAt { get; set; }
    }
}