let cart = JSON.parse(localStorage.getItem('darshiniCart')) || {};

// Initialize table numbers
const tableSelect = document.getElementById('table-num');
for (let i = 1; i <= 15; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    tableSelect.appendChild(opt);
}

function addToCart(name, price) {
    if (cart[name]) cart[name].qty++;
    else cart[name] = { price: price, qty: 1 };
    saveAndUpdate();
}

function changeQty(name, delta) {
    cart[name].qty += delta;
    if (cart[name].qty <= 0) delete cart[name];
    saveAndUpdate();
}

function saveAndUpdate() {
    localStorage.setItem('darshiniCart', JSON.stringify(cart));
    render();
}

function toggleCart(show) {
    document.getElementById('cart-panel').style.display = show ? 'block' : 'none';
    document.getElementById('cart-overlay').style.display = show ? 'block' : 'none';
}

function render() {
    const list = document.getElementById('cart-items-list');
    const bar = document.getElementById('view-cart-bar');
    const label = document.getElementById('items-label');
    const totalEl = document.getElementById('grand-total');
    
    list.innerHTML = '';
    let total = 0, count = 0;

    Object.entries(cart).forEach(([name, item]) => {
        total += item.price * item.qty;
        count += item.qty;
        list.innerHTML += `
            <div class="cart-row">
                <span>${name}</span>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty('${name}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty('${name}', 1)">+</button>
                </div>
            </div>`;
    });

    label.innerText = `${count} Item${count > 1 ? 's' : ''} | ₹${total}`;
    totalEl.innerText = total;
    bar.style.display = count > 0 ? 'flex' : 'none';
    
    if (count === 0) toggleCart(false);
}

function filterMenu() {
    let val = document.getElementById('menuSearch').value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
        let title = card.querySelector('h4').innerText.toLowerCase();
        card.style.display = title.includes(val) ? 'flex' : 'none';
    });
}

function sendOrder() {
    const name = document.getElementById('cust-name').value;
    const table = document.getElementById('table-num').value;
    const note = document.getElementById('special-note').value;

    if (!name || !table) return alert("Please enter Name and Table No.");

    let text = `*New Order - Hotel Sri Sai Darshini*%0A`;
    text += `Customer: ${name} (Table ${table})%0A`;
    text += `--------------------------%0A`;
    Object.entries(cart).forEach(([n, i]) => {
        text += `• ${n} x ${i.qty} = ₹${i.qty * i.price}%0A`;
    });
    text += `--------------------------%0A*Total: ₹${document.getElementById('grand-total').innerText}*`;
    if(note) text += `%0A*Note:* ${note}`;

    window.open(`https://wa.me/918391809802?text=${text}`);
    cart = {};
    saveAndUpdate();
}

// Initial render call
render();
