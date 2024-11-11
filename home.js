const products = [
    { name: 'Laptop', inStock: true },
    { name: 'Smartphone', inStock: false },
    { name: 'Tablet', inStock: true },
    { name: 'Headphones', inStock: true },
    { name: 'Smartwatch', inStock: false },
    { name: 'Camera', inStock: true }
];
function displayProducts(query) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    filteredProducts.forEach(product => {
        const button = document.createElement('button');
        button.classList.add('product-button');

        if (product.inStock) {
            button.classList.add('in-stock');
            button.textContent = `${product.name} - In Stock`;
        } else {
            button.classList.add('out-of-stock');
            button.textContent = `${product.name} - Out of Stock`;
            button.disabled = true;
        }

        productContainer.appendChild(button);
    });
    if (filteredProducts.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No products found';
        productContainer.appendChild(noResults);
    }
}
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    displayProducts(query);
});
document.getElementById('search-input').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        displayProducts(event.target.value);
    }
});
