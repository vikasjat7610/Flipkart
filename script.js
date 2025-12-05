// --- Product Data ---
const products = [
    {
        id: 1,
        name: "Aroma NB121 Pods",
        fullName: "Aroma NB121 Pods Upto 40 Hours Playtime Type C Fast Charging",
        price: 2999,
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/u/0/nb121-pods-upto-40-hours-playtime-type-c-fast-charging-dual-original-imahh4a72k7jbk2h.jpeg?q=70&amp;crop=false"
    },
    {
        id: 2,
        name: "GOBOULT Z40 ENC",
        fullName: "GOBOULT Z40 with ENC Mic, 60Hr Battery, Metal Finish",
        price: 3499,
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/a/c/-original-imahebzzqs5fspcv.jpeg?q=70&crop=false"
    },
    {
        id: 3,
        name: "OnePlus Nord Buds 3r (Blue)",
        fullName: "OnePlus Nord Buds 3r TWS Earbuds, 3D Audio, 2-mic call",
        price: 2299,
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/t/b/-original-imahf9daxb97keh5.jpeg?q=70&crop=false"
    },
    {
        id: 4,
        name: "Mivi Duopods B1",
        fullName: "Mivi Duopods B1 (Just Launched) 45 Hours Playtime",
        price: 1999,
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/k/k/r/-original-imaha9pgxwpfewtb.jpeg?q=70&crop=false"
    },
    {
        id: 5,
        name: "truke Buds Lite",
        fullName: "truke Buds Lite with 60 Hours Playtime, Deep Bass",
        price: 1599,
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/f/d/-original-imahgbn7hzywq3gm.jpeg?q=70&crop=false"
    },
    {
        id: 6,
        name: "OnePlus Nord Buds 3r (Black)",
        fullName: "OnePlus Nord Buds 3r TWS Earbuds, Ash Black",
        price: 2299,
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/n/o/-original-imahfsg7chmgrugu.jpeg?q=70&crop=false"
    }
];

// --- 95% Discount Logic ---
function calculateDiscount(originalPrice) {
    return Math.floor(originalPrice * 0.05); // Only 5% of price needs to be paid
}

// --- Render Products ---
const productContainer = document.getElementById('product-container');

products.forEach(product => {
    const discountedPrice = calculateDiscount(product.price);
    
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <div class="discount-badge">95% OFF</div>
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-title" title="${product.fullName}">${product.name}</div>
        <div class="price-box">
            <span class="new-price">₹${discountedPrice}</span>
            <span class="old-price">₹${product.price}</span>
            <span class="off-percent">95% off</span>
        </div>
    `;

    // Click event to open checkout
    card.addEventListener('click', () => openCheckout(product));
    productContainer.appendChild(card);
});

// --- Timer Logic (10 Min Loop) ---
let timeInSeconds = 600; // 10 minutes
const timerElement = document.getElementById('timer');

function startTimer() {
    setInterval(() => {
        if (timeInSeconds <= 0) {
            timeInSeconds = 600; // Reset loop
        } else {
            timeInSeconds--;
        }
        
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

startTimer();

// --- Checkout Modal Logic ---
const modal = document.getElementById('checkoutModal');
const closeBtn = document.querySelector('.close-btn');
const payBtn = document.getElementById('pay-btn');
let currentProductPrice = 0;

// UPI ID Config
const UPI_ID = "simplejat01@ybl";
const MY_NAME = "Shop Owner"; // Payment app me ye name dikhega

function openCheckout(product) {
    const discountedPrice = calculateDiscount(product.price);
    currentProductPrice = discountedPrice;

    // Show details in modal
    document.getElementById('selected-product-details').innerHTML = `
        <div style="display:flex; gap:10px; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
            <img src="${product.image}" style="width:50px; height:50px;">
            <div>
                <div style="font-size:14px; font-weight:bold;">${product.name}</div>
                <div style="font-size:16px; color:green; font-weight:bold;">Total to Pay: ₹${discountedPrice}</div>
            </div>
        </div>
    `;
    
    modal.style.display = "flex";
}

// Close Modal
closeBtn.onclick = () => { modal.style.display = "none"; };
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };

// --- Payment Logic ---
payBtn.addEventListener('click', () => {
    // Check if inputs are filled
    const inputs = document.querySelectorAll('.address-form input');
    let valid = true;
    inputs.forEach(input => {
        if(input.value === "") valid = false;
    });

    if(!valid) {
        alert("Please fill address details first.");
        return;
    }

    // Generate UPI Link
    // Note: This link works best on Mobile devices with UPI apps installed
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MY_NAME)}&am=${currentProductPrice}&cu=INR`;
    
    // Redirect to UPI
    window.location.href = upiLink;
});