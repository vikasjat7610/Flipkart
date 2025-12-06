// --- COMPLETE PRODUCT DATA ---
// Images are placeholders because I cannot access external copyrighted images.
// I have categorized them for better placeholder visuals.

const products = [
    // --- Earbuds (Keywords: wireless, earbuds, isolated) ---
    { id: 1, category: "Earbuds", name: "Aroma NB121 Pods", fullName: "Aroma NB121 Pods Upto 40 Hours Playtime Type C Fast Charging", price: 2999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/u/0/nb121-pods-upto-40-hours-playtime-type-c-fast-charging-dual-original-imahh4a72k7jbk2h.jpeg?q=70&amp;crop=false" },
    { id: 2, category: "Earbuds", name: "GOBOULT Z40", fullName: "GOBOULT Z40 with ENC Mic, 60Hr Battery, Metal Finish", price: 3499, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/a/c/-original-imahebzzqs5fspcv.jpeg?q=70&crop=false" },
    { id: 3, category: "Earbuds", name: "OnePlus Nord Buds 3r", fullName: "OnePlus Nord Buds 3r TWS Earbuds, 3D Audio, 2-mic call (Blue)", price: 2299, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/t/b/-original-imahf9daxb97keh5.jpeg?q=70&crop=false" },
    { id: 4, category: "Earbuds", name: "Mivi Duopods B1", fullName: "Mivi Duopods B1 (Just Launched) 45 Hours Playtime", price: 1999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/k/k/r/-original-imaha9pgxwpfewtb.jpeg?q=70&crop=false" },
    { id: 5, category: "Earbuds", name: "truke Buds Lite", fullName: "truke Buds Lite with 60 Hours Playtime, Deep Bass", price: 1599, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/f/d/-original-imahgbn7hzywq3gm.jpeg?q=70&crop=false" },
    { id: 6, category: "Earbuds", name: "OnePlus Nord Buds 3r", fullName: "OnePlus Nord Buds 3r TWS Earbuds, Ash Black", price: 2299, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/n/o/-original-imahfsg7chmgrugu.jpeg?q=70&crop=false" },
    
    // --- Sunglasses (Keywords: sunglasses, isolated, glasses) ---
    { id: 7, category: "Sunglasses", name: "UV Wayfarer", fullName: "UV Protection Wayfarer Sunglasses (Free Size) (Black)", price: 999, image: "https://loremflickr.com/320/320/sunglasses,product?lock=7" },
    { id: 8, category: "Sunglasses", name: "Retro Square", fullName: "UV Protection Retro Square Round Sunglasses (Black)", price: 1299, image: "https://loremflickr.com/320/320/black-sunglasses?lock=8" },
    { id: 9, category: "Sunglasses", name: "Riding Glasses", fullName: "UV Protection Riding Glasses, Rectangle Sunglasses", price: 799, image: "https://loremflickr.com/320/320/fashion-glasses?lock=9" },
    { id: 10, category: "Sunglasses", name: "Sport Wrap", fullName: "UV Protection Wrap-Around Sports Sunglasses (Multicolor)", price: 1499, image: "https://loremflickr.com/320/320/sport-sunglasses?lock=10" },
    { id: 11, category: "Sunglasses", name: "Polarized Round", fullName: "UV Protection Gradient Polarized Round Sunglasses (Black)", price: 1999, image: "https://loremflickr.com/320/320/shades,glasses?lock=11" },

    // --- Smartwatches (Keywords: smartwatch, dial, watch) ---
    { id: 12, category: "Smartwatch", name: "Bolt Drift+", fullName: "Bolt Drift+ 1.85, Bluetooth Calling, 500nits, 150+ Faces (White)", price: 3999, image: "https://loremflickr.com/320/320/smartwatch,screen?lock=12" },
    { id: 13, category: "Smartwatch", name: "Samsung Galaxy 7", fullName: "Samsung Galaxy Watch7 44mm LTE Smartwatch (Green Strap)", price: 29999, image: "https://loremflickr.com/320/320/wrist-watch,tech?lock=13" },
    { id: 14, category: "Smartwatch", name: "Teton 1.85", fullName: "Teton 1.85 | Premium Design | Functional Crown | AI Coach (Black)", price: 4500, image: "https://loremflickr.com/320/320/smartwatch,black?lock=14" },
    { id: 15, category: "Smartwatch", name: "Fastrack Revoltt", fullName: "Fastrack Revoltt FS2Pro - 1.96 Super AMOLED Curved (Black)", price: 5999, image: "https://loremflickr.com/320/320/digital-watch?lock=15" },
    { id: 16, category: "Smartwatch", name: "Fastrack Radiant", fullName: "Fastrack Radiant FX4 - 1.51 AMOLED | AOD | SS Strap (Gold)", price: 6499, image: "https://loremflickr.com/320/320/smartwatch,gold?lock=16" },

    // --- Headphones/Audio (Keywords: headphones, isolated, headset) ---
    { id: 17, category: "Headset", name: "Bolt Z40 Pro", fullName: "Bolt Z40 Pro with 100H Battery, Quad Mic ENC, Rubber Grip (Midnight)", price: 2499, image: "https://loremflickr.com/320/320/headphones,black?lock=17" },
    { id: 18, category: "Headset", name: "Realme Buds T200", fullName: "Realme Buds T200 Lite 12.4mm Driver, 48hrs Playback (Black)", price: 1899, image: "https://loremflickr.com/320/320/headset,product?lock=18" },
    { id: 19, category: "Headset", name: "Patron Bassbuds", fullName: "Patron Bassbuds Vibe 34 Hrs Playback, 13mm Drivers (Lilac)", price: 1299, image: "https://loremflickr.com/320/320/earphones,box?lock=19" },
    { id: 20, category: "Headset", name: "GoBolt Fluid X Pro", fullName: "GoBolt Fluid X Pro ANC, 70H Battery, Foldable, Gaming Mode (Beige)", price: 3499, image: "https://loremflickr.com/320/320/gaming-headset?lock=20" },
    { id: 21, category: "Headset", name: "GoBolt Fluid X", fullName: "GoBolt Fluid X with 60H Battery, Foldable, ENC Mic (White)", price: 2999, image: "https://loremflickr.com/320/320/white-headphones?lock=21" },
    { id: 22, category: "Headset", name: "Zeb-Thunder Pro", fullName: "Zebronics Zeb-Thunder Pro 60H Backup, BT v5.3, Gaming Mode (Olive)", price: 1599, image: "https://loremflickr.com/320/320/headphones,tech?lock=22" },
    { id: 23, category: "Headset", name: "Boat Rockerz 480", fullName: "Boat Rockerz 480 Beast Mode, RGB LEDs, 60 Hrs Playback (Black Sabre)", price: 2299, image: "https://loremflickr.com/320/320/headphones,studio?lock=23" },
    { id: 24, category: "Headset", name: "bAot B5 Neckband", fullName: "bAot Wireless Earbuds B5 Neckband 48 Hrs Playback (Black)", price: 999, image: "https://loremflickr.com/320/320/neckband,earphones?lock=24" },
    { id: 25, category: "Headset", name: "Boat Rockerz 202", fullName: "Boat Rockerz 202, 20H Battery, ENx, ASAP Charge (Active Black)", price: 1499, image: "https://loremflickr.com/320/320/sport-earphones?lock=25" },
    { id: 26, category: "Wired", name: "Trigger Blaze", fullName: "Trigger Blaze 3.5mm Wired Earphones 13mm Driver, Rich Bass (Orange)", price: 499, image: "https://loremflickr.com/320/320/wired-earphones?lock=26" },
    { id: 27, category: "Wired", name: "JBL C150SI", fullName: "JBL C150SI with One-Button Universal Remote (Black)", price: 899, image: "https://loremflickr.com/320/320/earbuds,black?lock=27" },
    { id: 28, category: "Wired", name: "Spinbot BattleBudz", fullName: "Spinbot BattleBudz C30 Type-C Gaming Earphones (Black, Red)", price: 699, image: "https://loremflickr.com/320/320/gaming-earbuds?lock=28" },
    { id: 29, category: "Wired", name: "Portronics Conch", fullName: "Portronics Conch Gama Earphones 1.2m Cable, Aux Port (Black)", price: 399, image: "https://loremflickr.com/320/320/earphones,cable?lock=29" },
    
    // --- Trimmers (Keywords: trimmer, shaver, electric) ---
    { id: 30, category: "Trimmer", name: "Zapkart Trimmer", fullName: "Zapkart Trimmer pack of 1, 45 min Runtime (Black, Silver)", price: 899, image: "https://loremflickr.com/320/320/electric-shaver?lock=30" },
    { id: 31, category: "Trimmer", name: "Smartbuy FKSB 10", fullName: "Flipkart Smartbuy FKSB 10, Runtime: 120 min for Men", price: 1199, image: "https://loremflickr.com/320/320/hair-trimmer?lock=31" },
    { id: 32, category: "Trimmer", name: "Nova NHT 1132", fullName: "Nova NHT 1132, Runtime: 150 min for Men (Black, Red)", price: 1099, image: "https://loremflickr.com/320/320/beard-trimmer?lock=32" },
    { id: 33, category: "Trimmer", name: "Smartbuy FKSB 20", fullName: "Flipkart Smartbuy FKSB 20, IPX4, Digital Display, 150 min", price: 1499, image: "https://loremflickr.com/320/320/shaver,black?lock=33" },
    { id: 34, category: "Trimmer", name: "Bombay Shaving", fullName: "Bombay Shaving Company POWER PLAY NXT BEARD TRIMMER (Green)", price: 1699, image: "https://loremflickr.com/320/320/shaver,product?lock=34" }
];


// --- LOGIC ---

// 1. Discount Calculation
function getDiscountedPrice(price) {
    return Math.floor(price * 0.05); // 95% Off
}

// 2. DOM Elements
const homeView = document.getElementById('home-view');
const detailView = document.getElementById('product-detail-view');
const productContainer = document.getElementById('product-container');
const checkoutModal = document.getElementById('checkoutModal');
const successModal = document.getElementById('successModal');
const timerSection = document.getElementById('timer-section');

// 3. Render Products on Grid
function renderProducts() {
    productContainer.innerHTML = '';
    products.forEach(product => {
        const discPrice = getDiscountedPrice(product.price);
        // Using placeholder images based on category to make it look decent
        const imgUrl = `https://placehold.co/300x300/f8f8f8/333?text=${encodeURIComponent(product.name)}`;
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="discount-badge">95% OFF</div>
            <img src="${imgUrl}" class="product-img" alt="${product.name}">
            <div class="product-title">${product.name}</div>
            <div class="price-box">
                <span class="new-price">₹${discPrice}</span>
                <span class="old-price">₹${product.price}</span>
                <span class="off-percent">95% off</span>
            </div>
        `;
        // Click -> View Detail Page
        card.addEventListener('click', () => showProductDetail(product));
        productContainer.appendChild(card);
    });
}

let currentProduct = null;
let currentPrice = 0;

// 4. Show Product Detail Page
function showProductDetail(product) {
    currentProduct = product;
    currentPrice = getDiscountedPrice(product.price);
    const imgUrl = `https://placehold.co/400x400/f8f8f8/333?text=${encodeURIComponent(product.name)}`;

    // Update Detail DOM
    document.getElementById('detail-img').src = imgUrl;
    document.getElementById('detail-title').innerText = product.fullName;
    document.getElementById('detail-price').innerText = `₹${currentPrice}`;
    document.getElementById('detail-old-price').innerText = `₹${product.price}`;

    // Switch Views
    homeView.classList.add('hidden');
    timerSection.classList.add('hidden');
    detailView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// 5. Go Back Home
function goHome() {
    detailView.classList.add('hidden');
    homeView.classList.remove('hidden');
    timerSection.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// 6. Checkout Flow
const stepAddress = document.getElementById('step-address');
const stepPayment = document.getElementById('step-payment');

function startCheckout() {
    // Reset to Step 1
    stepAddress.classList.remove('hidden');
    stepPayment.classList.add('hidden');
    
    // Clear inputs (optional)
    document.getElementById('input-name').value = '';
    document.getElementById('input-phone').value = '';
    
    checkoutModal.style.display = "flex";
}

function closeModal() {
    checkoutModal.style.display = "none";
}

function goToPayment() {
    // Validation
    const name = document.getElementById('input-name').value;
    const phone = document.getElementById('input-phone').value;
    const pincode = document.getElementById('input-pincode').value;
    const addr = document.getElementById('input-addr').value;

    if(!name || !phone || !pincode || !addr) {
        alert("Please fill all required details");
        return;
    }

    // Move to Step 2
    stepAddress.classList.add('hidden');
    stepPayment.classList.remove('hidden');
    
    document.getElementById('payment-total').innerText = `₹${currentPrice}`;
}

function backToAddress() {
    stepPayment.classList.add('hidden');
    stepAddress.classList.remove('hidden');
}

// 7. Process Payment
const UPI_ID = "simplejat01@ybl"; 

function processPayment() {
    // UPI Link Generation
    // Note: Desktop browsers might not open this, but mobile will try to open GPay/PhonePe
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=FlipStore&am=${currentPrice}&cu=INR`;
    
    // Simulate redirection
    window.location.href = upiLink;

    // Show success after a short delay (Simulating app return)
    setTimeout(() => {
        closeModal();
        successModal.style.display = 'flex';
    }, 2000);
}

function closeSuccessAndHome() {
    successModal.style.display = 'none';
    goHome();
}

// 8. Timer Logic
let timeInSeconds = 600;
function startTimer() {
    setInterval(() => {
        if (timeInSeconds <= 0) timeInSeconds = 600;
        else timeInSeconds--;
        
        const m = Math.floor(timeInSeconds / 60);
        const s = timeInSeconds % 60;
        document.getElementById('timer').innerText = 
            `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }, 1000);
}

// Init
renderProducts();
startTimer();
