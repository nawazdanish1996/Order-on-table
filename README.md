Hotel Sri Sai Darshini - Digital Menu
A mobile-responsive, lightweight digital menu application designed for Hotel Sri Sai Darshini. This web app allows customers to browse the menu, search for specific dishes, manage a virtual cart, and send their final order directly to the kitchen via WhatsApp.
🚀 Features
 * Categorized Menu: Organized sections for Breakfast, Indo-Chinese, Meals, and Beverages.
 * Real-time Search: Instant filtering of menu items as the user types.
 * Interactive Cart:
   * Floating "View Cart" bar for easy access.
   * Add/Remove items and adjust quantities.
   * Automated total price calculation.
 * Smart Order Form: Collects customer name, table number, and special cooking instructions.
 * WhatsApp Integration: Sends a clean, formatted receipt directly to the business phone number.
 * Persistence: Saves cart items in the browser's local storage so progress isn't lost on page refresh.
📂 File Structure
The project is divided into three main files for better maintainability:
 * index.html: The structure of the website, including the menu grid and order panel.
 * style.css: All styling, including mobile-first responsive design and animations.
 * script.js: The logic for filtering the menu, calculating totals, and managing the cart.
🛠️ Setup Instructions
 * Download Files: Save index.html, style.css, and script.js into the same folder.
 * Verify Links: Ensure your index.html has the following tags in the <head> and before the closing </body>:
   <link rel="stylesheet" href="style.css">
<script src="script.js"></script>

 * Configuration: To change the receiving WhatsApp number, open script.js and update the phone number in the sendOrder function:
   const phone = "918391809802"; // Ensure it includes the country code

📱 How to Use
 * Open index.html in any modern web browser (works best on mobile).
 * Browse or search for items.
 * Click "ADD +" to put items in the cart.
 * Click the "VIEW CART" bar at the bottom.
 * Enter your Name and Table Number.
 * Click "CONFIRM ORDER" to open WhatsApp and send the order.
🎨 Customization
 * Adding Products: Duplicate a product-card div in index.html and update the image source, title, and price.
 * Changing Colors: Update the --primary and --accent variables at the top of style.css to match your brand's colors.
 * 
Next Step: Generate a QR Code link that you can print on your restaurant tables to open this menu automatically?
