import React, { useMemo, useState } from 'react';
import './ProductGalleryComponent.css';
import useFirestoreProducts from './useFirestoreProducts';

const ProductGalleryComponent2 = () => {
  const { products, notice } = useFirestoreProducts();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const price = value => Number(String(value || '').replace(/[^0-9.]/g, '')) || 0;
    const filtered = products.filter(product =>
      String(product.name || '').toLowerCase().includes(query)
    );
    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return price(a.newPrice) - price(b.newPrice);
      if (sort === 'price-desc') return price(b.newPrice) - price(a.newPrice);
      return String(a.name || '').localeCompare(String(b.name || ''));
    });
  }, [products, search, sort]);

  return (
    <section className="store-gallery" aria-label="Products">
      <div className="store-toolbar">
        <label>Search products
          <input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search products..." />
        </label>
        <label>Sort by
          <select value={sort} onChange={event => setSort(event.target.value)}>
            <option value="name">Name</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
      </div>
      {notice && <p className="store-notice" role="status">{notice}</p>}
      <p className="store-result-count">{visibleProducts.length} products</p>
      <div className="image-container">
        {visibleProducts.map(product => (
          <article key={product.id} className="image-card">
            {product.img ? (
              <img src={product.img} alt={product.name || 'Product'} className="galleryItem" loading="lazy" />
            ) : (
              <div className="store-image-placeholder">Image unavailable</div>
            )}
            <div className="details">
              <span className="productName">{product.name}</span>
              <div className="priceDetails">
                <span className="newPrice">₹{product.newPrice}</span>
                <span className="old-price-mrp">MRP: <span className="oldPrice">₹{product.oldPrice}</span></span>
              </div>
              {product.myLink ? (
                <a href={product.myLink} target="_blank" rel="noopener noreferrer" className="view-button">View product</a>
              ) : <span className="store-unavailable">Link unavailable</span>}
            </div>
          </article>
        ))}
      </div>
      {!visibleProducts.length && <p className="store-empty">No products match your search.</p>}
    </section>
  );
};

export default ProductGalleryComponent2;
