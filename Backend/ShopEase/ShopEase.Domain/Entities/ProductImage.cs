namespace ShopEase.Domain.Entities;

public class ProductImage
{
    public Guid Id { get; set; }

    public string ImageUrl { get; set; } = string.Empty;

    public string AltText { get; set; } = string.Empty;

    public int DisplayOrder { get; set; }

    public bool IsPrimary { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    // Foreign Key
    public Guid ProductId { get; set; }

    // Navigation Property
    public Product Product { get; set; } = null!;
}