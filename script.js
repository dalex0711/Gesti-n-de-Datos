
// Create object with 3 products
const products = {
  '1': { id: 1, name: 'smartBand', price: 500 },
  '2': { id: 2, name: 's23Ultra', price: 700 },
  '3': { id: 3, name: 'AirPodsMax', price: 200 },
};

// Convert object to Set
const setProducts = new Set(Object.values(products));


// Create a Map for categories
const category = new Map();

category.set("cellPhones", "products1");
category.set('smartWatch', "products2");
category.set('AirPods', "products3");

// Show Object products using for in
const productCatalog = document.getElementById('product-catalog');

for (let nameProduct in products) {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.innerHTML = `
    <div class="product-id">ID: ${products[nameProduct].id}</div>
    <div class="product-name">${products[nameProduct].name}</div>
    <div class="product-price">$${products[nameProduct].price}</div>`;
  productCatalog.appendChild(productCard);
}

// Show Set products using for of
const productSet = document.getElementById('product-set');

for (let product of setProducts) {
  const setProductCard = document.createElement('div');
  setProductCard.className = 'set-product-card';
  setProductCard.innerHTML = `
    <div class="set-product-header">
      <span class="set-product-id">ID: ${product.id}</span>
    </div>
    <div class="set-product-details">
      <div class="set-product-name">Name: ${product.name}</div>
      <div class="set-product-price">Price: $${product.price}</div>
    </div>`;
  productSet.appendChild(setProductCard);
}


// Show Map categories using forEach
const categoryMapping = document.getElementById('category-mapping');

category.forEach((value, key) => {
  const categoryItem = document.createElement('div');
  categoryItem.className = 'category-item';
  categoryItem.innerHTML = `
    <span class="category-name">${key}</span>
    <span class="category-value">${value}</span>`;
  categoryMapping.appendChild(categoryItem);
});
