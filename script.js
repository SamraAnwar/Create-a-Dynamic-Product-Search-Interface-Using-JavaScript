const shirts = [
    { name: "red-shirt", inStock: true },
    { name: "blue-shirt", inStock: true },
    { name: "green-shirt", inStock: false },
    { name: "white-shirt", inStock: true }
];

document.getElementById('btn').addEventListener('click', function() {
    const query = document.getElementById('input').value.toLowerCase();
    searchTshirts(query);
});

function searchTshirts(query) {
    const container = document.getElementById('Tshirt-container');
    container.innerHTML = ''; 

    const results = shirts.filter(shirt => shirt.name.includes(query));

    if (results.length === 0) {
        container.innerHTML = '<p>No shirts found</p>';
        return;
    }

    results.forEach(shirt => {
        const button = document.createElement('button');
        button.className = `product-button shirt-button ${shirt.inStock ? 'in-stock' : 'out-of-stock'}`;
        button.textContent = shirt.name;
        button.disabled = !shirt.inStock;
        container.appendChild(button);
    });
}