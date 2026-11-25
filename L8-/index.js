const products = [
    {
    id: "p_1",
    name: "Wireless Noise-Cancelling Headphones",
    slug: "wireless-nc-headphones",
    brand: "AudioWave",
    category: "audio",
    price: 199.99,
    currency: "USD",
    stock: 42,
    rating: 4.6,
    reviewsCount: 1284,
    image: "https://picsum.photos/seed/headphones/600/600",
    tags: ["bluetooth", "over-ear", "anc"],
    isActive: true,
    createdAt: "2023-11-02T10:00:00Z",
    },
    {
    id: "p_2",
    name: "Mechanical Keyboard (87-key, Hot-swap)",
    slug: "mech-keyboard-87",
    brand: "KeyForge",
    category: "peripherals",
    price: 129.0,
    currency: "USD",
    stock: 18,
    rating: 4.8,
    reviewsCount: 932,
    image: "https://picsum.photos/seed/keyboard/600/600",
    tags: ["tactile", "rgb", "usb-c"],
    isActive: true,
    createdAt: "2023-09-18T14:30:00Z",
    },
    {
    id: "p_3",
    name: "27\" 4K IPS Monitor",
    slug: "monitor-27-4k-ips",
    brand: "PixelView",
    category: "displays",
    price: 349.5,
    currency: "USD",
    stock: 7,
    rating: 4.4,
    reviewsCount: 415,
    image: "https://picsum.photos/seed/monitor/600/600",
    tags: ["4k", "hdr", "usb-c"],
    isActive: true,
    createdAt: "2024-01-09T08:15:00Z",
    },
    {
    id: "p_4",
    name: "USB-C Docking Station (12-in-1)",
    slug: "usbc-dock-12in1",
    brand: "PortPlus",
    category: "accessories",
    price: 89.99,
    currency: "USD",
    stock: 0,
    rating: 4.1,
    reviewsCount: 207,
    image: "https://picsum.photos/seed/dock/600/600",
    tags: ["hdmi", "ethernet", "pd-100w"],
    isActive: false,
    createdAt: "2023-06-27T16:45:00Z",
    },
    {
    id: "p_5",
    name: "Ergonomic Wireless Mouse",
    slug: "ergo-wireless-mouse",
    brand: "ClickEase",
    category: "peripherals",
    price: 59.0,
    currency: "USD",
    stock: 63,
    rating: 4.3,
    reviewsCount: 648,
    image: "https://picsum.photos/seed/mouse/600/600",
    tags: ["ergonomic", "silent", "bluetooth"],
    isActive: true,
    createdAt: "2023-12-14T11:20:00Z",
    },
];
const orders = [
    {
    id: "o_1001",
    userId: 1,
    status: "delivered",
    currency: "USD",
    items: [
        { productId: "p_1", nameSnapshot: "Wireless Noise-Cancelling Headphones",
        unitPrice: 199.99, qty: 1 },
        { productId: "p_5", nameSnapshot: "Ergonomic Wireless Mouse", unitPrice: 59.0,
        qty: 2 },
    ],
    subtotal: 317.99,
    shipping: 0,
    tax: 25.44,
    total: 343.43,
    paymentMethod: "visa •••• 4242",
    shippingAddress: { city: "Toronto", country: "CA" },
    createdAt: "2024-03-02T09:12:00Z",
    updatedAt: "2024-03-06T17:40:00Z",
    },
    {
    id: "o_1002",
    userId: 2,
    status: "shipped",
    currency: "USD",
    items: [
    { productId: "p_2", nameSnapshot: "Mechanical Keyboard (87-key, Hot-swap)",
    unitPrice: 129.0, qty: 1 },
    ],
    subtotal: 129.0,
    shipping: 9.99,
    tax: 11.12,
    total: 150.11,
    paymentMethod: "paypal",
    shippingAddress: { city: "Seoul", country: "KR" },
    createdAt: "2024-04-10T13:05:00Z",
    updatedAt: "2024-04-11T08:00:00Z",
    },
    {
    id: "o_1003",
    userId: 3,
    status: "pending",
    currency: "USD",
    items: [
    { productId: "p_3", nameSnapshot: "27\" 4K IPS Monitor", unitPrice: 349.5, qty:
    2 },
    { productId: "p_2", nameSnapshot: "Mechanical Keyboard (87-key, Hot-swap)",
    unitPrice: 129.0, qty: 1 },
    ],
    subtotal: 828.0,
    shipping: 0,
    tax: 66.24,
    total: 894.24,
    paymentMethod: null,
    shippingAddress: { city: "Bangalore", country: "IN" },
    createdAt: "2024-04-12T07:50:00Z",
    updatedAt: "2024-04-12T07:50:00Z",
    },
    {
    id: "o_1004",
    userId: 4,
    status: "cancelled",
    currency: "USD",
    items: [
    { productId: "p_4", nameSnapshot: "USB-C Docking Station (12-in-1)", unitPrice:
    89.99, qty: 1 },
    ],
    subtotal: 89.99,
    shipping: 4.99,
    tax: 7.6,
    total: 102.58,
    paymentMethod: "mastercard •••• 8821",
    shippingAddress: { city: "Mexico City", country: "MX" },
    createdAt: "2024-02-18T19:30:00Z",
    updatedAt: "2024-02-19T10:15:00Z",
    },
];

// ==========================================
// PART A - PRODUCTS MANAGEMENT
// ==========================================
/**
* 1. getAllProducts
* @returns {Array} Array of all products.
* Student Task: Return the complete products array.
* Test: Console log the length of the returned array (should be 5).
*/
function getAllProducts() {
    // TODO: Implement
    return [...products];
}
/**
* 2. getProductById
* @param {string} id
* @returns {Object|null} The product object or null if not found.
* Student Task: Find and return a product by its ID.
* Test: Test with a valid ID (e.g., 'p_2') and an invalid ID (e.g., 'p_99').
*/
function getProductById(id) {
    // TODO: Implement
    return products.find(e => e.id === id) || null;
}
/**
* 3. getProductsByCategory
* @param {string} category
* @returns {Array} Array of products in the given category.
* Student Task: Filter products belonging to a specific category.
* Test: Test with 'peripherals' (should return 2 products) and an invalid category.
*/
function getProductsByCategory(category) {
    // TODO: Implement
    return products.filter(e => e.category === category);
}
/**
* 4. getActiveProducts
* @returns {Array} Array of active products.
* Student Task: Filter and return only products where isActive is true.
* Test: Check the returned array length (should be 4).
*/
function getActiveProducts() {
    // TODO: Implement
    return products.filter(e => e.isActive)
}
/**
* 5. getAvailableProducts
* @returns {Array} Array of active products with stock > 0.
* Student Task: Filter products that are both active AND have stock greater than
zero.
* Test: Check the returned array length (should be 3 - excluding p_4 (inactive/0
stock)).
*/
function getAvailableProducts() {
    // TODO: Implement
    return getActiveProducts().filter(e => e.stock > 0)
}
/**
* 6. searchProducts
* @param {string} keyword
* @returns {Array} Array of matching products.
* Student Task: Search products by checking if the name, brand, or tags contain the
keyword (case-insensitive).
* Test: Search for 'bluetooth' (should return p_1 and p_5).
*/
function searchProducts(keyword) {
    // TODO: Implement
    const ky = keyword.toLowerCase();
    return products.filter(e => e.name.toLowerCase().includes(ky) 
    || e.brand.toLowerCase().includes(ky)
    || e.tags.some(e => e.toLowerCase().includes(ky)))
}
/**
* 7. getProductsSortedByPrice
* @param {string} order - "asc" or "desc"
* @returns {Array} A NEW array of sorted products.
* Student Task: Sort products by price in ascending or descending order. Do NOT
mutate the original array!
* Test: Test with "asc" and "desc", verifying the first item's price in each case.
*/
function getProductsSortedByPrice(order = "asc") {
    // TODO: Implement
    return getAllProducts().sort((a, b) => {
        return (order === "asc")
        ? (a.price - b.price)
        : (b.price - a.price);
    })
}
/**
* 8. updateProductPrice
* @param {string} id
* @param {number} newPrice
* @returns {Object} The updated product object.
* Student Task: Update the current price of a product. Validate that the price is a
positive number.
* Test: Update 'p_5' to 55.0 and console log the returned object. Test with a
negative price to verify error handling.
*/
function updateProductPrice(id, newPrice) {
    // TODO: Implement
    const product = getProductById(id);

    if(!product) return "ERROR"

    if(typeof newPrice !== "number") return "ERROR";

    if(newPrice < 0) return "ERROR";

    product.price = newPrice;

    return product
}
/**
* 9. updateProductStock
* @param {string} id
* @param {number} quantity
* @returns {Object} The updated product object.
* Student Task: Update the stock quantity of a product. Validate that quantity is a
non-negative integer.
* Test: Update stock for 'p_3' to 10. Test with a negative stock to verify error
handling.
*/
function updateProductStock(id, quantity) {
 // TODO: Implement
    const product = getProductById(id);

    if(!product) return "ERROR"

    if(typeof quantity !== "number") return "ERROR";

    const updatedQuantity = Math.round(quantity);

    if(updatedQuantity < 0) return "ERROR";

    product.quantity = updatedQuantity;

    return product
}
/**
* 10. getLowStockProducts
* @param {number} limit
* @returns {Array} Array of products with stock <= limit.
* Student Task: Return products whose stock is less than or equal to the specified
limit.
* Test: Test with limit 10 (should return p_3 and p_4).
*/
function getLowStockProducts(limit) {
    // TODO: Implement
    return products.filter(e => e.stock <= limit);
}
// ==========================================
// PART B - ORDERS MANAGEMENT
// ==========================================
/**
* 11. getAllOrders
* @returns {Array} Array of all orders.
* Student Task: Return all orders.
* Test: Console log the length of the returned array (should be 4).
*/
function getAllOrders() {
    // TODO: Implement
    return [...orders];
}
/**
* 12. getOrderById
* @param {string} id
* @returns {Object|null} The order object or null.
* Student Task: Find an order by its ID.
* Test: Search for 'o_1002' and check its status.
*/
function getOrderById(id) {
    // TODO: Implement
    return orders.find(e => e.id === id) || null;
}
/**
* 13. getOrdersByUser
* @param {number} userId
* @returns {Array} Array of orders.
* Student Task: Return all orders belonging to a specific user.
* Test: Search for userId 1 (should return 1 order).
*/
function getOrdersByUser(userId) {
 // TODO: Implement
    return orders.filter(e => e.userId === userId);
}
/**
* 14. getOrdersByStatus
* @param {string} status
* @returns {Array} Array of orders.
* Student Task: Return orders with a specific status (case-insensitive).
* Test: Search for 'pending' (should return 1 order).
*/
function getOrdersByStatus(status) {
    // TODO: Implement
    return orders.filter(e => e.status.toLowerCase() === status.toLowerCase())
}
/**
* 15. getOrderItemsCount
* @param {string} orderId
* @returns {number} Total units purchased.
* Student Task: Calculate the total number of purchased units in an order by summing
the 'qty' of all items.
* Test: Test with 'o_1001' (should return 3).
*/
function getOrderItemsCount(orderId) {
    // TODO: Implement
    const order = getOrderById(orderId);

    if(!order) return "ERROR";

    return order.items.reduce((a, b) => a + b.qty,0)
}
/**
* 16. getOrderTotal
* @param {string} orderId
* @returns {number} The calculated total.
* Student Task: Calculate the final order total (subtotal of all items [unitPrice *
qty] + shipping + tax).
* Test: Test with 'o_1002' (should equal 150.11). Check for float precision issues.
*/
function getOrderTotal(orderId) {
 // TODO: Implement
    const order = getOrderById(orderId);

    if(!order) return "ERROR";

    return (order.items.reduce((a, b) => a + (b.qty * b.unitPrice),0)) + (order.tax) + (order.shipping)
}
// ==========================================
// PART C - RELATIONSHIPS AND BUSINESS LOGIC
// ==========================================
/**
* 17. getOrderProducts
* @param {string} orderId
* @returns {Array} Array of enriched product objects.
* Student Task: Return the complete product info for every item in an order by
matching productId.
* Preserve the order's snapshot name and price (override the current product
name/price in the result).
* Test: Test with 'o_1001' and verify the prices match the order snapshot, not the
current products array.
*/
function getOrderProducts(orderId) {
    // TODO: Implement
    const order = getOrderById(orderId);

    if(!order) return "ERROR";

    return order.items.map(e => {
        const product = getProductById(e.productId)

        return { ...product, name: e.nameSnapshot }
    })
}
/**
* 18. getProductOrders
* @param {string} productId
* @returns {Array} Array of orders.
* Student Task: Return all orders containing a specific product.
* Test: Test with 'p_2' (should return o_1002 and o_1003).
*/
function getProductOrders(productId) {
    // TODO: Implement
    const product = getProductById(productId);

    if(!product) return "ERROR";

    // some
    // every

    return orders.filter(e => {
        return e.items.some(ee => ee.productId === product.id)
    })
}
/**
* 19. getProductSales
* @param {string} productId
* @returns {number} Total units sold.
* Student Task: Calculate total units sold for a product. Exclude 'cancelled' and
'refunded' orders.
* Test: Test with 'p_4' (should return 0 because its only order is cancelled).
*/
function getProductSales(productId) {
    // TODO: Implement
    const product = getProductById(productId);

    if(!product) return "ERROR";

    const newOrders = getProductOrders(productId).filter(e => e.status !== "cancelled" || e.status !== "refunded")

    return newOrders.map(e => {
        return { ...e, items: items.filter(ee => ee.productId === productId) }
    }).reduce((a, b) => a + b.items.qty, 0)
}
/**
* 20. createOrder
* @param {number} userId
* @param {Array} items - e.g. [{ productId: "p_1", qty: 2 }]
* @param {number} shipping
* @param {number} tax
* @param {string} paymentMethod
* @param {Object} shippingAddress
* @returns {Object} The newly created order.
* Student Task: Create a new order object, calculate totals, build item snapshots,
* validate product active status and stock limits, decrease stock, and push to the
orders array.
* Test: Create a valid order. Test trying to buy an inactive product (should throw
error). Test buying more than available stock (should throw error).
*/
function createOrder(userId, items, shipping, tax, paymentMethod, shippingAddress) {
    // TODO: Implement
    const updateItems = items.map(e => {
        const product = getProductById(e.productId);

        if(!product.isActive || product.stock === 0 || product.stock < e.qty) return null;

        return { ...e, nameSnapshot: e.name, unitPrice: e.price }
    }).filter(e => e !== null);

    // o_1004
    const lastOrder = orders[orders.length - 1].id;
    const newID = "o_" +lastOrder.split("_")[1] + 1;

    const order = {
        id: newID,
        items: updateItems,
        status: "pending",
        userId,
        shipping,
        tax,
        paymentMethod,
        shippingAddress,
        currency: "USD",
        subtotal: updateItems.reduce((a, b) => a + (b.qty * b.unitPrice), 0),
        total: (tax + shipping + subtotal),
        createdAt: new Date(),
        updatedAt: new Date()
    }
    orders.push(order);
}

// truthy / falsy

// AND (&&) -> FALSE
console.log(true && "HELLO" && false)
// OR (||) -> TRUE
console.log(false || "" || false)