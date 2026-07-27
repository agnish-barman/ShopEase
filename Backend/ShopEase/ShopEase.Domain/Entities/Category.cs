namespace ShopEase.Domain.Entities;

public class Category
{
    public Guid Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    // Self-referencing Foreign Key
    public Guid? ParentCategoryId { get; set; }

    // Navigation Property
    public Category? ParentCategory { get; set; }

    // Navigation Property
    public ICollection<Category> ChildCategories { get; set; } = new List<Category>();
}