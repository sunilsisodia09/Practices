import React, { useState } from "react";

const ProductFilter = () => {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
    { id: 2, name: "Phone", category: "Electronics", price: 25000 },
    { id: 3, name: "Shoes", category: "Fashion", price: 3000 },
    { id: 4, name: "T-Shirt", category: "Fashion", price: 1000 },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sortOrder === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Search & Filter</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>

      {/* Sort */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort By Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>
            </div>
          ))
        ) : (
          <h3>No Products Found</h3>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;