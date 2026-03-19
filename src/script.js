/* Beit El Sham - Interactivity */

document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const menuItems = [
        { id: 1, category: 'grills', name: 'Mixed Grill', nameAr: 'مشويات مشكلة', price: '250 EGP', desc: 'Kebab, Kofta, and Shish Tawook served with rice.', descAr: 'كباب وكفتة وشيش طاووق يقدم مع الأرز.', img: 'image/515436639_1399542532180356_995956902332113191_n.jpg' },
        { id: 2, category: 'shawarma', name: 'Chicken Shawarma', nameAr: 'شاورما دجاج', price: '85 EGP', desc: 'Authentic Syrian chicken shawarma with garlic sauce.', descAr: 'شاورما دجاج سورية أصلية مع الثومية.', img: 'image/556909193_1380918700709406_9077916454856856850_n.jpg' },
        { id: 3, category: 'appetizers', name: 'Hummus', nameAr: 'حمص', price: '45 EGP', desc: 'Creamy chickpea dip with tahini and olive oil.', descAr: 'حمص كريمي مع الطحينة وزيت الزيتون.', img: 'image/594960954_1442364437898165_7746030545660750283_n.jpg' },
        { id: 4, category: 'grills', name: 'Kebab Halabi', nameAr: 'كباب حلبي', price: '220 EGP', desc: 'Traditional Aleppo style spicy kebab.', descAr: 'كباب حار على الطريقة الحلبية التقليدية.', img: 'image/606458487_1459503152850960_4721207272384331228_n.jpg' },
        { id: 5, category: 'shawarma', name: 'Beef Shawarma', nameAr: 'شاورما لحم', price: '95 EGP', desc: 'Tender beef shawarma with tahini sauce.', descAr: 'شاورما لحم طرية مع صوص الطحينة.', img: 'image/611241174_1469965451804730_808332863682861886_n.jpg' },
        { id: 6, category: 'drinks', name: 'Ayran', nameAr: 'عيران', price: '30 EGP', desc: 'Refreshing Syrian yogurt drink.', descAr: 'شراب لبن عيران سوري منعش.', img: 'image/611687670_1469965461804729_7695255395516007383_n.jpg' },
        { id: 7, category: 'appetizers', name: 'Fattoush', nameAr: 'فتوش', price: '50 EGP', desc: 'Fresh vegetable salad with toasted bread.', descAr: 'سلطة خضروات طازجة مع الخبز المحمص.', img: 'image/611978404_1469965481804727_8971988797397487897_n.jpg' },
        { id: 8, category: 'drinks', name: 'Mint Lemonade', nameAr: 'ليمون بالنعناع', price: '35 EGP', desc: 'Freshly squeezed lemon with fresh mint.', descAr: 'ليمون طازج مع النعناع المنعش.', img: 'image/619344200_1479217477546194_2343999897987403009_n.jpg' },
    ];

    const reviews = [
        { text: "The best shawarma I've ever had in Egypt! Authentic taste.", author: "Ahmed M.", textAr: "أفضل شاورما أكلتها في مصر! طعم أصلي." },
        { text: "Amazing atmosphere and very friendly staff. Highly recommended.", author: "Sara K.", textAr: "أجواء رائعة وطاقم عمل ودود للغاية. أنصح به بشدة." },
        { text: "The mixed grill is out of this world. Syrian hospitality at its best.", author: "Mohamed H.", textAr: "المشويات المشكلة خيالية. كرم الضيافة السوري في أبهى صوره." }
    ];

    const translations = {
        en: {
            home: "Home",
            about: "About",
            menu: "Menu",
            services: "Services",
            gallery: "Gallery",
            reviews: "Reviews",
            contact: "Contact",
            heroTitle: "Beit El Sham",
            heroSlogan: "Authentic Syrian Taste in Every Bite",
            viewMenu: "View Menu",
            orderNow: "Order Now",
            bookTable: "Book a Table",
            searchPlaceholder: "Search for dishes or ingredients...",
            aboutTitle: "Our Story",
            aboutText: "Beit El Sham brings the heart of Damascus to Minya. Our chefs use traditional recipes passed down through generations to ensure every dish tells a story of heritage and quality. We pride ourselves on using the freshest ingredients to create an unforgettable dining experience.",
            menuTitle: "Our Menu",
            menuSubtitle: "Delicious Syrian Specialties",
            all: "All",
            grills: "Grills",
            shawarma: "Shawarma",
            appetizers: "Appetizers",
            drinks: "Drinks",
            servicesTitle: "Our Services",
            servicesSubtitle: "How We Serve You",
            dineIn: "Dine-in",
            takeaway: "Takeaway",
            delivery: "No-contact Delivery",
            dineInDesc: "Enjoy our warm atmosphere and elegant decor.",
            takeawayDesc: "Quick and easy pickup for your convenience.",
            deliveryDesc: "Safe and fast delivery to your doorstep.",
            galleryTitle: "Gallery",
            gallerySubtitle: "Visual Feast",
            reviewsTitle: "What They Say",
            reviewsSubtitle: "Customer Love",
            contactTitle: "Find Us",
            contactSubtitle: "Get In Touch",
            address: "Ahmed Shawky St, East Samalout, Minya, Egypt",
            hours: "Open daily until 3 AM",
            phone: "01026879698",
            nameLabel: "Name",
            phoneLabel: "Phone",
            dateLabel: "Date",
            peopleLabel: "Number of People",
            confirmBooking: "Confirm Booking",
            bookingSuccess: "Booking successful! We will contact you soon."
        },
        ar: {
            home: "الرئيسية",
            about: "عن المطعم",
            menu: "المنيو",
            services: "خدماتنا",
            gallery: "المعرض",
            reviews: "الآراء",
            contact: "اتصل بنا",
            heroTitle: "بيت الشام",
            heroSlogan: "طعم سوري أصيل في كل لقمة",
            viewMenu: "عرض المنيو",
            orderNow: "اطلب الآن",
            bookTable: "حجز طاولة",
            searchPlaceholder: "ابحث عن الأطباق أو المكونات...",
            aboutTitle: "قصتنا",
            aboutText: "بيت الشام ينقل قلب دمشق إلى المنيا. يستخدم طهاتنا وصفات تقليدية متوارثة عبر الأجيال لضمان أن كل طبق يحكي قصة من التراث والجودة. نحن نفخر باستخدام طازج المكونات لخلق تجربة طعام لا تُنسى.",
            menuTitle: "قائمة الطعام",
            menuSubtitle: "تخصصات سورية لذيذة",
            all: "الكل",
            grills: "مشويات",
            shawarma: "شاورما",
            appetizers: "مقبلات",
            drinks: "مشروبات",
            servicesTitle: "خدماتنا",
            servicesSubtitle: "كيف نخدمك",
            dineIn: "تناول الطعام",
            takeaway: "تيك أواي",
            delivery: "توصيل آمن",
            dineInDesc: "استمتع بأجوائنا الدافئة وديكورنا الأنيق.",
            takeawayDesc: "استلام سريع وسهل لراحتك.",
            deliveryDesc: "توصيل آمن وسريع إلى باب منزلك.",
            galleryTitle: "المعرض",
            gallerySubtitle: "وليمة بصرية",
            reviewsTitle: "ماذا يقولون",
            reviewsSubtitle: "حب العملاء",
            contactTitle: "تجدنا هنا",
            contactSubtitle: "تواصل معنا",
            address: "شارع أحمد شوقي، شرق سمالوط، المنيا، مصر",
            hours: "مفتوح يومياً حتى 3 صباحاً",
            phone: "01026879698",
            nameLabel: "الاسم",
            phoneLabel: "رقم الهاتف",
            dateLabel: "التاريخ",
            peopleLabel: "عدد الأشخاص",
            confirmBooking: "تأكيد الحجز",
            bookingSuccess: "تم الحجز بنجاح! سنتصل بك قريباً."
        }
    };

    let currentLang = 'en';

    // --- Selectors ---
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const langToggle = document.querySelector('.lang-toggle');
    const menuGrid = document.querySelector('.menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuSearch = document.querySelector('#menu-search');
    const reviewsTrack = document.querySelector('.reviews-track');
    const sliderDots = document.querySelector('.slider-dots');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const reserveBtns = document.querySelectorAll('.reserve-btn');
    const reservationModal = document.getElementById('reservation-modal');
    const modalClose = reservationModal.querySelector('.modal-close');
    const reservationForm = document.getElementById('reservation-form');

    // --- Functions ---

    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        reveal();
    });

    // Mobile Menu
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('lucide-menu');
        icon.classList.toggle('lucide-x');
    });

    // Language Toggle
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        document.body.className = currentLang === 'ar' ? 'rtl' : '';
        langToggle.textContent = currentLang === 'en' ? 'العربية' : 'English';
        updateContent();
        renderMenu('all');
        renderReviews();
    });

    function updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });

        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[currentLang][key]) {
                el.placeholder = translations[currentLang][key];
            }
        });
    }

    // Menu Rendering
    function renderMenu(category = 'all', searchTerm = '') {
        menuGrid.innerHTML = '';
        let filtered = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
        
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(term) || 
                item.nameAr.includes(term) || 
                item.desc.toLowerCase().includes(term) || 
                item.descAr.includes(term)
            );
        }

        if (filtered.length === 0) {
            menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">${currentLang === 'en' ? 'No items found.' : 'لم يتم العثور على نتائج.'}</p>`;
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <div class="menu-card-img">
                    <img src="${item.img}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-card-info">
                    <div class="menu-card-header">
                        <h3 class="menu-card-title">${currentLang === 'en' ? item.name : item.nameAr}</h3>
                        <span class="menu-card-price">${item.price}</span>
                    </div>
                    <p class="menu-card-desc">${currentLang === 'en' ? item.desc : item.descAr}</p>
                </div>
            `;
            menuGrid.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            menuSearch.value = ''; // Clear search when switching categories
            renderMenu(btn.getAttribute('data-filter'));
        });
    });

    // Search Functionality
    menuSearch.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        renderMenu(activeCategory, e.target.value);
    });

    // Reviews Slider
    let currentReview = 0;

    function renderReviews() {
        reviewsTrack.innerHTML = '';
        sliderDots.innerHTML = '';
        
        reviews.forEach((review, index) => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <p class="review-text">"${currentLang === 'en' ? review.text : review.textAr}"</p>
                <p class="review-author">- ${review.author}</p>
            `;
            reviewsTrack.appendChild(card);

            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToReview(index));
            sliderDots.appendChild(dot);
        });
    }

    function goToReview(index) {
        currentReview = index;
        reviewsTrack.style.transform = `translateX(-${index * 100}%)`;
        const dots = document.querySelectorAll('.dot');
        dots.forEach((d, i) => {
            d.classList.toggle('active', i === index);
        });
    }

    setInterval(() => {
        currentReview = (currentReview + 1) % reviews.length;
        goToReview(currentReview);
    }, 5000);

    // Lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    });

    // Reservation Modal
    reserveBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            reservationModal.classList.add('active');
        });
    });

    modalClose.addEventListener('click', () => {
        reservationModal.classList.remove('active');
    });

    reservationModal.addEventListener('click', (e) => {
        if (e.target === reservationModal) reservationModal.classList.remove('active');
    });

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('res-name').value;
        const phone = document.getElementById('res-phone').value;
        const date = document.getElementById('res-date').value;
        const people = document.getElementById('res-people').value;

        let message = '';
        if (currentLang === 'en') {
            message = `Hello Beit El Sham! I would like to book a table.\n\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nNumber of People: ${people}`;
        } else {
            message = `مرحباً بيت الشام! أود حجز طاولة.\n\nالاسم: ${name}\nالهاتف: ${phone}\nالتاريخ: ${date}\nعدد الأشخاص: ${people}`;
        }

        const whatsappUrl = `https://wa.me/201026879698?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        reservationModal.classList.remove('active');
        reservationForm.reset();
    });

    // Scroll Reveal
    function reveal() {
        const reveals = document.querySelectorAll('[data-reveal]');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 150;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('revealed');
            }
        });
    }

    // Initialize
    renderMenu('all');
    renderReviews();
    reveal();
});
