** start of script.js **

let inventory = [];

function findProductIndex(productName) {
    // Convert the product name to lowercase to ensure case-insensitive search
    return inventory.findIndex(product => product.name.toLowerCase() === productName.toLowerCase());
}

function addProduct(product) {
    const index = findProductIndex(product.name);
    
    // Ensure the product name is in lowercase in the inventory
    const normalizedProductName = product.name.toLowerCase();
    
    if (index !== -1) {
        // If product already exists, update its quantity
        inventory[index].quantity += product.quantity;
        console.log(`${normalizedProductName} quantity updated`);
    } else {
        // If product doesn't exist, add it to the inventory
        inventory.push({ name: normalizedProductName, quantity: product.quantity });
        console.log(`${normalizedProductName} added to inventory`);
    }
}

function removeProduct(productName, quantity) {
    const index = findProductIndex(productName);
    const normalizedProductName = productName.toLowerCase();
    
    if (index === -1) {
        // If product not found in inventory
        console.log(`${normalizedProductName} not found`);
    } else {
        // Check if there are enough items in inventory
        if (inventory[index].quantity >= quantity) {
            inventory[index].quantity -= quantity;
            console.log(`Remaining ${normalizedProductName} pieces: ${inventory[index].quantity}`);
            
            // If the quantity reaches zero, remove the product from inventory
            if (inventory[index].quantity === 0) {
                inventory.splice(index, 1);
            }
        } else {
            console.log(`Not enough ${normalizedProductName} available, remaining pieces: ${inventory[index].quantity}`);
        }
    }
}

** end of script.js **

