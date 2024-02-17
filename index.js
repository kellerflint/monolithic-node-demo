const express = require('express');
const db = require('./database');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the 'public' directory as the location for static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the database
db.connectToDatabase();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
});

// Route for the order form
app.get('/order', (req, res) => {
    res.render('orderForm');
});

// Route to handle form submission
app.post('/submit-order', (req, res) => {
    const orderDetails = req.body; // Capture the order details from the form

    // Save the order details to the database
    db.query(`INSERT INTO PizzaOrder (size, toppings, crust) VALUES (
        '${orderDetails.size}', 
        '${orderDetails.toppings}', 
        '${orderDetails.crust}'
    )`);

    res.render('orderConfirmation', { order: orderDetails }); // Pass the order details to the view
});

app.get('/admin', async (req, res) => {
    const result = await db.query(`SELECT * FROM PizzaOrder`);
    res.render('admin', { orders: result.recordset }); // Pass the orders to the view
});

app.post('/delete-order', async (req, res) => {
    const orderId = req.body.orderId;
    await db.query(`DELETE FROM PizzaOrder WHERE id = ${orderId}`);
    res.redirect('/admin'); // Redirect back to the admin page after deletion
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));