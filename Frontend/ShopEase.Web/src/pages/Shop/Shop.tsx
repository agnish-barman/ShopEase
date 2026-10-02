import { useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { shopPageData } from '../../services/shop/shop.data';
import type {
  ShopCategory,
  ShopPageData,
  ShopProduct,
} from '../../services/shop/shop.types';
import './Shop.css';

interface ShopProps {
  data?: ShopPageData;
  onSortChange?: (sortValue: string) => void;
  onFilterClick?: () => void;
}

type PriceFilter =
  | 'all'
  | 'under-100000'
  | '100000-150000'
  | 'above-150000';

type RatingFilter =
  | 'all'
  | '4'
  | '4.5';

function Shop({
  data = shopPageData,
  onSortChange,
  onFilterClick,
}: ShopProps) {
  const [sortValue, setSortValue] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceFilter, setPriceFilter] =
    useState<PriceFilter>('all');
  const [ratingFilter, setRatingFilter] =
    useState<RatingFilter>('all');

  const searchParams = new URLSearchParams(
    window.location.search
  );

  const categoryParam =
    searchParams.get('category')?.toLowerCase();

  const validCategories: ShopCategory[] = [
    'lehengas',
    'sarees',
    'bridal',
    'jewellery',
  ];

  const selectedCategory = validCategories.find(
    (category) => category === categoryParam
  );

  const categoryProducts = selectedCategory
    ? data.products.filter((product) =>
        product.categories.includes(selectedCategory)
      )
    : data.products;

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((product) => {
      const matchesPrice = (() => {
        switch (priceFilter) {
          case 'under-100000':
            return product.price < 100000;

          case '100000-150000':
            return (
              product.price >= 100000 &&
              product.price <= 150000
            );

          case 'above-150000':
            return product.price > 150000;

          default:
            return true;
        }
      })();

      const matchesRating = (() => {
        const rating = product.rating ?? 0;

        switch (ratingFilter) {
          case '4':
            return rating >= 4;

          case '4.5':
            return rating >= 4.5;

          default:
            return true;
        }
      })();

      return matchesPrice && matchesRating;
    });
  }, [categoryProducts, priceFilter, ratingFilter]);

  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];

    switch (sortValue) {
      case 'price-low-to-high':
        return products.sort(
          (firstProduct, secondProduct) =>
            firstProduct.price - secondProduct.price
        );

      case 'price-high-to-low':
        return products.sort(
          (firstProduct, secondProduct) =>
            secondProduct.price - firstProduct.price
        );

      case 'newest':
        return products.sort(
          (firstProduct, secondProduct) =>
            new Date(secondProduct.createdAt).getTime() -
            new Date(firstProduct.createdAt).getTime()
        );

      case 'rating':
        return products.sort(
          (firstProduct, secondProduct) =>
            (secondProduct.rating ?? 0) -
            (firstProduct.rating ?? 0)
        );

      default:
        return products;
    }
  }, [filteredProducts, sortValue]);

  const handleSortChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSort = event.target.value;

    setSortValue(selectedSort);
    onSortChange?.(selectedSort);
  };

  const handleFilterClick = () => {
    setIsFilterOpen((currentState) => !currentState);
    onFilterClick?.();
  };

  const handleClearFilters = () => {
    setPriceFilter('all');
    setRatingFilter('all');
  };

  const hasActiveFilters =
    priceFilter !== 'all' ||
    ratingFilter !== 'all';

  return (
    <main className="shop-page">

      {/* Promotional Banner */}
      {data.promotion?.message && (
        <section className="shop-page__promotion">
          <p className="shop-page__promotion-text">
            {data.promotion.message}
          </p>
        </section>
      )}

      {/* Catalog Controls */}
      <section className="shop-page__controls">
        <div className="shop-page__controls-inner">

          {/* Sort */}
          <div className="shop-page__sort">
            <label
              htmlFor="shop-sort"
              className="shop-page__sort-label"
            >
              Sort by
            </label>

            <select
              id="shop-sort"
              className="shop-page__sort-select"
              value={sortValue}
              onChange={handleSortChange}
            >
              <option value="" disabled>
                Select
              </option>

              <option value="price-low-to-high">
                Price: Low to High
              </option>

              <option value="price-high-to-low">
                Price: High to Low
              </option>

              <option value="newest">
                Newest
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>

          {/* Product Count */}
          <p className="shop-page__product-count">
            {sortedProducts.length} products
          </p>

          {/* Filter */}
          <button
            type="button"
            className="shop-page__filter-button"
            onClick={handleFilterClick}
            aria-expanded={isFilterOpen}
            aria-controls="shop-filter-panel"
          >
            <span
              className="shop-page__filter-icon"
              aria-hidden="true"
            >
              ☰
            </span>

            <span>Filter</span>

            {hasActiveFilters && (
              <span className="shop-page__filter-indicator">
                •
              </span>
            )}
          </button>

        </div>
      </section>

      {/* Filter Panel */}
      {isFilterOpen && (
        <aside
          id="shop-filter-panel"
          className="shop-page__filter-panel"
          aria-label="Product filters"
        >
          <div className="shop-page__filter-panel-inner">

            <div className="shop-page__filter-header">
              <h2 className="shop-page__filter-title">
                Filters
              </h2>

              <button
                type="button"
                className="shop-page__filter-close"
                onClick={() => setIsFilterOpen(false)}
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            {/* Price Filter */}
            <fieldset className="shop-page__filter-group">
              <legend className="shop-page__filter-group-title">
                Price
              </legend>

              <label className="shop-page__filter-option">
                <input
                  type="radio"
                  name="price-filter"
                  value="all"
                  checked={priceFilter === 'all'}
                  onChange={() => setPriceFilter('all')}
                />
                <span>All Prices</span>
              </label>

              <label className="shop-page__filter-option">
                <input
                  type="radio"
                  name="price-filter"
                  value="under-100000"
                  checked={
                    priceFilter === 'under-100000'
                  }
                  onChange={() =>
                    setPriceFilter('under-100000')
                  }
                />
                <span>Under ₹1,00,000</span>
              </label>

              <label className="shop-page__filter-option">
                <input
                  type="radio"
                  name="price-filter"
                  value="100000-150000"
                  checked={
                    priceFilter === '100000-150000'
                  }
                  onChange={() =>
                    setPriceFilter('100000-150000')
                  }
                />
                <span>
                  ₹1,00,000 – ₹1,50,000
                </span>
              </label>

              <label className="shop-page__filter-option">
                <input
                  type="radio"
                  name="price-filter"
                  value="above-150000"
                  checked={
                    priceFilter === 'above-150000'
                  }
                  onChange={() =>
                    setPriceFilter('above-150000')
                  }
                />
                <span>Above ₹1,50,000</span>
              </label>
            </fieldset>

            {/* Rating Filter */}
            <fieldset className="shop-page__filter-group">
              <legend className="shop-page__filter-group-title">
                Rating
              </legend>

              <label className="shop-page__filter-option">
                <input
                  type="radio"
                  name="rating-filter"
                  value="all"
                  checked={ratingFilter === 'all'}
                  onChange={() => setRatingFilter('all')}
                />
                <span>All Ratings</span>
              </label>

              <label className="shop-page__filter-option">
                <input
                  type="radio"
                  name="rating-filter"
                  value="4"
                  checked={ratingFilter === '4'}
                  onChange={() =>
                    setRatingFilter('4')
                  }
                />
                <span>4★ &amp; above</span>
              </label>

              <label className="shop-page__filter-option">
                <input
                  type="radio"
                  name="rating-filter"
                  value="4.5"
                  checked={ratingFilter === '4.5'}
                  onChange={() =>
                    setRatingFilter('4.5')
                  }
                />
                <span>4.5★ &amp; above</span>
              </label>
            </fieldset>

            {/* Filter Actions */}
            <div className="shop-page__filter-actions">
              <button
                type="button"
                className="shop-page__clear-filter-button"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>

              <button
                type="button"
                className="shop-page__apply-filter-button"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply Filters
              </button>
            </div>

          </div>
        </aside>
      )}

      {/* Product Listing */}
      <section
        className="shop-page__products"
        aria-label="Product listing"
      >
        {sortedProducts.length > 0 ? (
          <div className="shop-page__grid">

            {sortedProducts.map((product: ShopProduct) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (
          <div className="shop-page__empty">
            <p>
              No products available
              {selectedCategory
                ? ` in ${selectedCategory}.`
                : '.'}
            </p>
          </div>
        )}
      </section>

    </main>
  );
}

export default Shop;