```markdown
# Hotel Sri Sai Darshini Digital Menu

A clean, mobile-friendly **digital menu** with cart functionality and WhatsApp order placement for **Hotel Sri Sai Darshini**.

Designed to be displayed via QR code on tables — customers scan, browse, add items to cart, and send the order directly to the restaurant's WhatsApp number.

## Features

- Fully responsive & mobile-first design
- Search/filter menu items in real-time
- Consistent card layout with proper image aspect ratio
- Simple cart system with quantity controls
- Total calculation
- Name + Table number + Special instructions
- One-click order sending via WhatsApp
- Pure HTML + CSS + JavaScript (no backend required)

## Demo

You can host this file for free on:
- GitHub Pages
- Vercel
- Netlify
- Render
- Any static file hosting service

Or simply open `menu.html` directly in a browser for testing.

## How to Use

1. **Download / Copy** the `menu.html` file
2. **Customize** (optional):
   - Change restaurant name
   - Update WhatsApp number in the JavaScript (`const phone = "918391809802";`)
   - Modify prices, items, categories
   - Replace images with your own photos
3. **Host** the file somewhere accessible via URL
4. **Generate QR code** pointing to your hosted URL
5. **Print** QR codes and place them on tables

## Project Structure

```
hotel-sri-sai-darshini-menu/
└── menu.html          ← The complete digital menu (single file)
```

(You can also add `README.md`, `images/`, etc. if you want to organize photos locally)

## Customization Tips

```javascript
// Change WhatsApp number
const phone = "91XXXXXXXXXX";           // ← your business WhatsApp number

// Add GST / Service Charge (example)
let total = 0;
// ... calculation ...
total = total + (total * 0.05);         // +5% service charge
```

```html
<!-- Add new item example -->
<div class="product-card">
    <div class="image-container">
        <img src="https://your-image-url.jpg" alt="Rava Idli" loading="lazy">
    </div>
    <div class="product-info">
        <h4>Rava Idli</h4>
        <span class="price-tag">₹45</span>
        <button class="add-btn" onclick="addToCart('Rava Idli', 45)">ADD +</button>
    </div>
</div>
```

## Tech Stack

- HTML5
- CSS3 (Custom properties + Flex + Grid)
- JavaScript (Vanilla)
- Google Fonts (Poppins)

No frameworks, no build tools, no dependencies → extremely lightweight

## License

MIT License  
Feel free to use, modify, and distribute for your restaurant/business.

## Made with ❤️ for small hotels & darshinis

Enjoy serving your customers faster & smarter!

Hotel Sri Sai Darshini  
Digital Menu – 2025
```

