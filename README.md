📱 Hotel Sri Sai Darshini - Digital Menu System
A lightweight, mobile-first digital menu designed for restaurants to accept table orders directly via WhatsApp. This system eliminates the need for expensive apps or paper menus.
✨ Features
 * Searchable Menu: Customers can quickly find dishes using the real-time search bar.
 * Table Management: Pre-configured for Tables 1-10.
 * Live Cart & Billing: Calculates the total bill as items are added or removed.
 * Special Instructions: A dedicated field for customers to add requests like "No Onion" or "Extra Spicy."
 * WhatsApp Integration: Uses the official Universal Link API to prevent browser errors and send a formatted receipt directly to the shop's phone.
 * Pure HTML/JS: No database or hosting fees required.
🚀 How to Launch
 * Save the Code: Save the provided code as index.html.
 * Host for Free: * Upload the file to GitHub Pages, Netlify, or Vercel.
   * Alternatively, open the file directly in any mobile browser to test.
 * Generate a QR Code:
   * Copy the URL of your hosted website.
   * Go to a free QR generator (like qr-code-generator.com).
   * Print the QR code and place it on your restaurant tables.
🛠️ How to Customize
1. Update Prices or Items
In the HTML code, look for the product-card sections. You can change the name, price, and image:
<div class="product-card">
    <img src="your-image-link.jpg" alt="Dish Name">
    <h4>Dish Name</h4>
    <span class="price-tag">₹99</span>
    <button class="add-btn" onclick="addToCart('Dish Name', 99)">ADD +</button>
</div>

2. Change the WhatsApp Number
Find this line in the <script> section and replace it with your business number (include country code):
const phoneNumber = "918391809802"; 

📋 Order Format Received
When a customer clicks Confirm Order, you will receive a WhatsApp message formatted like this:
> HOTEL SRI SAI DARSHINI NEW ORDER
> 📍 Table: 5 👤 Name: Rahul 📝 Note: Make it extra spicy
> ITEMS: ✅ Masala Dosa x 2 = ₹120 ✅ Filter Coffee x 1 = ₹20
> 💰 TOTAL BILL: ₹140
> PLEASE PREPARE THE ORDER
> 
📝 License
This project is free to use for Hotel Sri Sai Darshini
