export interface CategoryType {
  parent_slug: string | null;
  slug: string;
  title: string;
}
const Categories: CategoryType[] = [
  {
    parent_slug: null,
    slug: 'root',
    title: 'دسته بندی اصلی',
  },
  {
    parent_slug: 'root',
    slug: 'real-estate',
    title: 'املاک',
  },
  {
    parent_slug: 'real-estate',
    slug: 'residential-rent',
    title: 'اجاره مسکونی',
  },
  {
    parent_slug: 'root',
    slug: 'vehicles',
    title: 'وسایل نقلیه',
  },
  {
    parent_slug: 'root',
    slug: 'electronic-devices',
    title: 'لوازم الکترونیکی',
  },
  {
    parent_slug: 'root',
    slug: 'for-the-home',
    title: 'مربوط به خانه',
  },
  {
    parent_slug: 'root',
    slug: 'services',
    title: 'خدمات',
  },
  {
    parent_slug: 'root',
    slug: 'personal',
    title: 'وسایل شخصی',
  },
  {
    parent_slug: 'root',
    slug: 'leisure-hobbies',
    title: 'سرگرمی و فراغت',
  },
  {
    parent_slug: 'root',
    slug: 'community',
    title: 'اجتماعی',
  },
  {
    parent_slug: 'root',
    slug: 'businesses',
    title: 'برای کسب و کار',
  },
  {
    parent_slug: 'root',
    slug: 'jobs',
    title: 'استخدام و کاریابی',
  },
  {
    parent_slug: 'electronic-devices',
    slug: 'mobile-tablet',
    title: 'موبایل و تبلت',
  },
  {
    parent_slug: 'for-the-home',
    slug: 'furniture-and-home-decore',
    title: 'وسایل و تزئینات خانه',
  },
  {
    parent_slug: 'personal',
    slug: 'clothing-and-shoes',
    title: 'کیف، کفش و لباس',
  },
  {
    parent_slug: 'electronic-devices',
    slug: 'computers',
    title: 'رایانه',
  },
  {
    parent_slug: 'leisure-hobbies',
    slug: 'ticket',
    title: 'بلیط',
  },
  {
    parent_slug: 'vehicles',
    slug: 'cars',
    title: 'خودرو',
  },
  {
    parent_slug: 'services',
    slug: 'car-and-motor',
    title: 'موتور و ماشین',
  },
  {
    parent_slug: 'community',
    slug: 'event',
    title: 'رویداد',
  },
  {
    parent_slug: 'jobs',
    slug: 'administration-and-hr',
    title: 'اداری و مدیریت',
  },
  {
    parent_slug: 'real-estate',
    slug: 'residential-sell',
    title: 'فروش مسکونی',
  },
  {
    parent_slug: 'jobs',
    slug: 'janitorial-cleaning',
    title: 'سرایداری و نظافت',
  },
  {
    parent_slug: 'electronic-devices',
    slug: 'game-consoles-and-video-games',
    title: 'کنسول، بازی‌ ویدئویی و آنلاین',
  },
  {
    parent_slug: 'for-the-home',
    slug: 'utensils-and-appliances',
    title: 'وسایل آشپزخانه',
  },
  {
    parent_slug: 'personal',
    slug: 'jewelry-and-watches',
    title: 'تزیینی',
  },
  {
    parent_slug: 'electronic-devices',
    slug: 'audio-video',
    title: 'صوتی و تصویری',
  },
  {
    parent_slug: 'businesses',
    slug: 'equipments-and-machinery',
    title: 'تجهیزات و ماشین‌آلات',
  },
  {
    parent_slug: 'services',
    slug: 'catering',
    title: 'پذیرایی/مراسم',
  },
  {
    parent_slug: 'community',
    slug: 'volunteers',
    title: 'داوطلبانه',
  },
  {
    parent_slug: 'personal',
    slug: 'health-beauty',
    title: 'آرایشی، بهداشتی و درمانی',
  },
  {
    parent_slug: 'leisure-hobbies',
    slug: 'travel-packages',
    title: 'تور و چارتر',
  },
  {
    parent_slug: 'jobs',
    slug: 'construction-craft',
    title: 'معماری ،عمران و ساختمانی',
  },
  {
    parent_slug: 'jobs',
    slug: 'shop-restaurant',
    title: 'خدمات فروشگاه و رستوران',
  },
  {
    parent_slug: 'baby-and-toys',
    slug: 'childrens-clothing-and-shoe',
    title: 'کفش و لباس بچه',
  },
  {
    parent_slug: 'leisure-hobbies',
    slug: 'book-student-literature',
    title: 'کتاب و مجله',
  },
  {
    parent_slug: 'vehicles',
    slug: 'parts-accessories',
    title: 'قطعات یدکی و لوازم جانبی خودرو',
  },
  {
    parent_slug: 'for-the-home',
    slug: 'utility',
    title: 'ابزار',
  },
  {
    parent_slug: 'services',
    slug: 'computer-and-mobile',
    title: 'خدمات رایانه‌ای و موبایل',
  },
  {
    parent_slug: 'jobs',
    slug: 'computer-and-it',
    title: 'رایانه و فناوری اطلاعات',
  },
  {
    parent_slug: 'real-estate',
    slug: 'commercial-sell',
    title: 'فروش اداری و تجاری',
  },
  {
    parent_slug: 'electronic-devices',
    slug: 'phone',
    title: 'تلفن رومیزی',
  },
  {
    parent_slug: 'for-the-home',
    slug: 'building-and-garden',
    title: 'ساختمان و حیاط',
  },
  {
    parent_slug: 'personal',
    slug: 'baby-and-toys',
    title: 'وسایل بچه و اسباب بازی',
  },
  {
    parent_slug: 'leisure-hobbies',
    slug: 'bicycle',
    title: 'دوچرخه/اسکیت/اسکوتر',
  },
  {
    parent_slug: 'vehicles',
    slug: 'motorcycles',
    title: 'موتورسیکلت و لوازم جانبی',
  },
  {
    parent_slug: 'jobs',
    slug: 'accounting-finance-legal',
    title: 'مالی و حسابداری و حقوقی',
  },
  {
    parent_slug: 'leisure-hobbies',
    slug: 'animals',
    title: 'حیوانات',
  },
  {
    parent_slug: 'services',
    slug: 'accounting-and-finance',
    title: 'مالی/حسابداری/بیمه',
  },
  {
    parent_slug: 'jobs',
    slug: 'sales-marketing',
    title: 'بازاریابی و فروش',
  },
  {
    parent_slug: 'leisure-hobbies',
    slug: 'hobby-collectibles',
    title: 'کلکسیون و سرگرمی',
  },
  {
    parent_slug: 'businesses',
    slug: 'batch',
    title: 'عمده فروشی',
  },
  {
    parent_slug: 'services',
    slug: 'transport',
    title: 'حمل و نقل',
  },
  {
    parent_slug: 'jobs',
    slug: 'industrial-technology',
    title: 'صنعتی و فنی و مهندسی',
  },
  {
    parent_slug: 'services',
    slug: 'craftsmen',
    title: 'پیشه و مهارت',
  },
  {
    parent_slug: 'jobs',
    slug: 'education',
    title: 'آموزشی',
  },
  {
    parent_slug: 'leisure-hobbies',
    slug: 'musical-instruments',
    title: 'آلات موسیقی',
  },
  {
    parent_slug: 'vehicles',
    slug: 'boat',
    title: 'قایق و لوازم جانبی',
  },
  {
    parent_slug: 'jobs',
    slug: 'transportation',
    title: 'حمل و نقل',
  },
  {
    parent_slug: 'leisure-hobbies',
    slug: 'sport-leisure',
    title: 'ورزش و تناسب اندام',
  },
  {
    parent_slug: 'services',
    slug: 'beauty-and-haircare',
    title: 'آرایشگری و زیبایی',
  },
  {
    parent_slug: 'jobs',
    slug: 'care-health-beauty',
    title: 'درمانی و زیبایی و بهداشتی',
  },
  {
    parent_slug: 'services',
    slug: 'entertainment',
    title: 'سرگرمی',
  },
  {
    parent_slug: 'leisure-hobbies',
    slug: 'leisure-hobbies-toys',
    title: 'اسباب‌ بازی',
  },
  {
    parent_slug: 'jobs',
    slug: 'media-advertising',
    title: 'هنری و رسانه',
  },
  {
    parent_slug: 'services',
    slug: 'cleaning',
    title: 'نظافت',
  },
  {
    parent_slug: 'services',
    slug: 'garden-and-landscaping',
    title: 'باغبانی و درختکاری',
  },
  {
    parent_slug: 'services',
    slug: 'teaching',
    title: 'آموزشی',
  },
  {
    parent_slug: 'building-and-garden',
    slug: 'bathroom-wc-sauna',
    title: 'سرویس بهداشتی و سونا',
  },
  {
    parent_slug: 'jewelry-and-watches',
    slug: 'watches',
    title: 'ساعت',
  },
  {
    parent_slug: 'jewelry-and-watches',
    slug: 'jewelry',
    title: 'جواهرات',
  },
  {
    parent_slug: 'baby-and-toys',
    slug: 'personal-toys',
    title: 'اسباب بازی',
  },
  {
    parent_slug: 'baby-and-toys',
    slug: 'strollers-and-accessories',
    title: 'کالسکه و لوازم جانبی',
  },
  {
    parent_slug: 'baby-and-toys',
    slug: 'child-car-seat',
    title: 'تخت و صندلی بچه',
  },
  {
    parent_slug: 'baby-and-toys',
    slug: 'childrens-furniture',
    title: 'اسباب و اثاث بچه',
  },
  {
    parent_slug: 'computers',
    slug: 'laptops',
    title: 'رایانه همراه',
  },
  {
    parent_slug: 'audio-video',
    slug: 'movies-and-music',
    title: 'فیلم و موسیقی',
  },
  {
    parent_slug: 'ticket',
    slug: 'concert',
    title: 'کنسرت',
  },
  {
    parent_slug: 'furniture-and-home-decore',
    slug: 'antiques-and-art',
    title: 'تزئینی و آثار هنری',
  },
  {
    parent_slug: 'furniture-and-home-decore',
    slug: 'lighting',
    title: 'لوازم روشنایی',
  },
  {
    parent_slug: 'furniture-and-home-decore',
    slug: 'tables-and-chairs',
    title: 'میز و صندلی',
  },
  {
    parent_slug: 'furniture-and-home-decore',
    slug: 'carpets',
    title: 'فرش و گلیم',
  },
  {
    parent_slug: 'furniture-and-home-decore',
    slug: 'storage',
    title: 'کمد و بوفه',
  },
  {
    parent_slug: 'furniture-and-home-decore',
    slug: 'textile-ornaments',
    title: 'پرده و رومیزی',
  },
  {
    parent_slug: 'furniture-and-home-decore',
    slug: 'beds-bedroom',
    title: 'تخت و اتاق خواب',
  },
  {
    parent_slug: 'furniture-and-home-decore',
    slug: 'sofa-armchair',
    title: 'مبلمان و صندلی راحتی',
  },
  {
    parent_slug: 'furniture-and-home-decore',
    slug: 'tv-and-stereo-furniture',
    title: 'میز تلویزیون و وسایل سیستم پخش',
  },
  {
    parent_slug: 'utensils-and-appliances',
    slug: 'dishwasher',
    title: 'ماشین ظرفشویی',
  },
  {
    parent_slug: 'utensils-and-appliances',
    slug: 'fridge-and-freezer',
    title: 'یخچال و فریزر',
  },
  {
    parent_slug: 'utensils-and-appliances',
    slug: 'cookware-tableware',
    title: 'وسایل آشپزی و غذاخوری',
  },
  {
    parent_slug: 'utensils-and-appliances',
    slug: 'microwave-stove',
    title: 'مایکروویو و گاز',
  },
  {
    parent_slug: 'utensils-and-appliances',
    slug: 'washer-dryer',
    title: 'ماشین لباسشویی و خشک کننده',
  },
  {
    parent_slug: 'musical-instruments',
    slug: 'guitar-bass-amplifier',
    title: 'گیتار، بیس و امپلیفایر',
  },
  {
    parent_slug: 'hobby-collectibles',
    slug: 'coin-stamp',
    title: 'سکه، تمبر و اسکناس',
  },
  {
    parent_slug: 'sport-leisure',
    slug: 'ball-sports',
    title: 'ورزش‌های توپی',
  },
  {
    parent_slug: 'musical-instruments',
    slug: 'wind',
    title: 'سازهای بادی',
  },
  {
    parent_slug: 'mobile-tablet',
    slug: 'mobile-phones',
    title: 'موبایل',
  },
  {
    parent_slug: 'equipments-and-machinery',
    slug: 'shop-and-cash',
    title: 'فروشگاه و مغازه',
  },
  {
    parent_slug: 'event',
    slug: 'for-sale',
    title: 'حراج',
  },
  {
    parent_slug: 'teaching',
    slug: 'foreign-language',
    title: 'زبان خارجی',
  },
  {
    parent_slug: 'clothing-and-shoes',
    slug: 'shoes-belt-bag',
    title: 'کیف/کفش/کمربند',
  },
  {
    parent_slug: 'clothing-and-shoes',
    slug: 'clothing',
    title: 'لباس',
  },
  {
    parent_slug: 'book-student-literature',
    slug: 'educational',
    title: 'آموزشی',
  },
  {
    parent_slug: 'book-student-literature',
    slug: 'literary',
    title: 'ادبی',
  },
  {
    parent_slug: 'utility',
    slug: 'instrument-cleaning-tailoring',
    title: 'نظافت و خیاطی و اتو',
  },
  {
    parent_slug: 'computer-and-mobile',
    slug: 'domains-and-websites',
    title: 'فروش دامنه و سایت',
  },
  {
    parent_slug: 'residential-sell',
    slug: 'apartment-sell',
    title: 'آپارتمان',
  },
  {
    parent_slug: 'residential-rent',
    slug: 'apartment-rent',
    title: 'آپارتمان',
  },
  {
    parent_slug: 'commercial-sell',
    slug: 'office-sell',
    title: 'دفتر کار، اتاق اداری و مطب',
  },
  {
    parent_slug: 'commercial-rent',
    slug: 'office-rent',
    title: 'دفتر کار، اتاق اداری و مطب',
  },
  {
    parent_slug: 'cars',
    slug: 'light',
    title: 'سواری',
  },
  {
    parent_slug: 'computers',
    slug: 'desktops',
    title: 'رایانه رومیزی',
  },
  {
    parent_slug: 'audio-video',
    slug: 'camera-camcoders',
    title: 'دوربین عکاسی و فیلم‌برداری',
  },
  {
    parent_slug: 'ticket',
    slug: 'theatre-and-cinema',
    title: 'تئاتر و سینما',
  },
  {
    parent_slug: 'animals',
    slug: 'cat',
    title: 'گربه',
  },
  {
    parent_slug: 'musical-instruments',
    slug: 'piano-keyboard',
    title: 'پیانو/کیبورد/آکاردئون',
  },
  {
    parent_slug: 'sport-leisure',
    slug: 'camping-outdoor',
    title: 'کوهنوردی و کمپینگ',
  },
  {
    parent_slug: 'mobile-tablet',
    slug: 'tablet',
    title: 'تبلت',
  },
  {
    parent_slug: 'equipments-and-machinery',
    slug: 'barbershop-and-beautysalon',
    title: 'آرایشگاه و سالن‌های زیبایی',
  },
  {
    parent_slug: 'event',
    slug: 'conference-meeting',
    title: 'گردهمایی و همایش',
  },
  {
    parent_slug: 'volunteers',
    slug: 'research',
    title: 'تحقیقاتی',
  },
  {
    parent_slug: 'teaching',
    slug: 'school',
    title: 'دروس مدرسه و دانشگاه',
  },
  {
    parent_slug: 'jewelry-and-watches',
    slug: 'rhinestones',
    title: 'بدلیجات',
  },
  {
    parent_slug: 'utility',
    slug: 'repair-tool',
    title: 'تعمیرات',
  },
  {
    parent_slug: 'computer-and-mobile',
    slug: 'hosting-and-web-design',
    title: 'میزبانی و طراحی سایت',
  },
  {
    parent_slug: 'residential-sell',
    slug: 'house-villa-sell',
    title: 'خانه و ویلا',
  },
  {
    parent_slug: 'residential-rent',
    slug: 'house-villa-rent',
    title: 'خانه و ویلا',
  },
  {
    parent_slug: 'commercial-sell',
    slug: 'shop-sell',
    title: 'مغازه و غرفه',
  },
  {
    parent_slug: 'commercial-rent',
    slug: 'shop-rent',
    title: 'مغازه و غرفه',
  },
  {
    parent_slug: 'real-estate-services',
    slug: 'partnership',
    title: 'مشارکت در ساخت',
  },
  {
    parent_slug: 'building-and-garden',
    slug: 'stove-and-heating',
    title: 'سیستم گرمایشی سرمایشی و گاز',
  },
  {
    parent_slug: 'audio-video',
    slug: 'mp3-player',
    title: 'پخش‌کننده همراه',
  },
  {
    parent_slug: 'ticket',
    slug: 'gift-certificate',
    title: 'کارت هدیه و تخفیف',
  },
  {
    parent_slug: 'animals',
    slug: 'rodents-rabbits',
    title: 'موش و خرگوش',
  },
  {
    parent_slug: 'sport-leisure',
    slug: 'diving-watersports',
    title: 'غواصی و ورزش‌های آبی',
  },
  {
    parent_slug: 'mobile-tablet',
    slug: 'mobile-tablet-accessories',
    title: 'لوازم جانبی موبایل و تبلت',
  },
  {
    parent_slug: 'equipments-and-machinery',
    slug: 'offices',
    title: 'دفتر کار',
  },
  {
    parent_slug: 'teaching',
    slug: 'software',
    title: 'نرم‌افزار',
  },
  {
    parent_slug: 'computers',
    slug: 'parts-and-accessories',
    title: 'قطعات و لوازم جانبی',
  },
  {
    parent_slug: 'book-student-literature',
    slug: 'historical',
    title: 'تاریخی',
  },
  {
    parent_slug: 'sport-leisure',
    slug: 'fishing',
    title: 'ماهیگیری',
  },
  {
    parent_slug: 'computer-and-mobile',
    slug: 'broadband-internet-service',
    title: 'خدمات پهنای باند اینترنت',
  },
  {
    parent_slug: 'residential-sell',
    slug: 'plot-old',
    title: 'زمین و کلنگی',
  },
  {
    parent_slug: 'commercial-sell',
    slug: 'industry-agriculture-business-sell',
    title: 'صنعتی، کشاورزی و تجاری',
  },
  {
    parent_slug: 'commercial-rent',
    slug: 'industry-agriculture-business-rent',
    title: 'صنعتی، کشاورزی و تجاری',
  },
  {
    parent_slug: 'ticket',
    slug: 'tickets-sports',
    title: 'اماکن و مسابقات ورزشی',
  },
  {
    parent_slug: 'real-estate-services',
    slug: 'presell',
    title: 'پیش‌فروش',
  },
  {
    parent_slug: 'building-and-garden',
    slug: 'kitchen',
    title: 'آشپزخانه',
  },
  {
    parent_slug: 'audio-video',
    slug: 'stereo-surround',
    title: 'سیستم صوتی خانگی',
  },
  {
    parent_slug: 'ticket',
    slug: 'sport',
    title: 'ورزشی',
  },
  {
    parent_slug: 'animals',
    slug: 'reptile',
    title: 'خزنده',
  },
  {
    parent_slug: 'musical-instruments',
    slug: 'traditional',
    title: 'سنتی',
  },
  {
    parent_slug: 'equipments-and-machinery',
    slug: 'industrial',
    title: 'صنعتی',
  },
  {
    parent_slug: 'event',
    slug: 'events-sports',
    title: 'ورزشی',
  },
  {
    parent_slug: 'teaching',
    slug: 'art',
    title: 'هنری',
  },
  {
    parent_slug: 'computers',
    slug: 'modem-and-network-equipment',
    title: 'لوازم و تجهیزات شبکه',
  },
  {
    parent_slug: 'ticket',
    slug: 'bus-metro-train',
    title: 'اتوبوس، مترو و قطار',
  },
  {
    parent_slug: 'book-student-literature',
    slug: 'religious',
    title: 'مذهبی',
  },
  {
    parent_slug: 'computer-and-mobile',
    slug: 'computer-hardware-and-software',
    title: 'خدمات نرم‌افزار و سخت‌افزار کامپیوتر',
  },
  {
    parent_slug: 'building-and-garden',
    slug: 'garden-and-patio',
    title: 'حیاط و ایوان',
  },
  {
    parent_slug: 'audio-video',
    slug: 'video-dvdplayer',
    title: 'ویدئو و پخش کننده DVD',
  },
  {
    parent_slug: 'animals',
    slug: 'birds',
    title: 'پرنده',
  },
  {
    parent_slug: 'hobby-collectibles',
    slug: 'historical-objects',
    title: 'اشیای عتیقه',
  },
  {
    parent_slug: 'sport-leisure',
    slug: 'training',
    title: 'تجهیزات ورزشی',
  },
  {
    parent_slug: 'mobile-tablet',
    slug: 'sim-card',
    title: 'سیم‌کارت',
  },
  {
    parent_slug: 'equipments-and-machinery',
    slug: 'cafe-and-restaurant',
    title: 'کافی‌شاپ و رستوران',
  },
  {
    parent_slug: 'teaching',
    slug: 'services-sports',
    title: 'خدمات ورزشی',
  },
  {
    parent_slug: 'computers',
    slug: 'printer-scaner-copier',
    title: 'پرینتر/اسکنر/کپی/فکس',
  },
  {
    parent_slug: 'computer-and-mobile',
    slug: 'mobile-phone-repair',
    title: 'تعمیرات نرم‌افزار و سخت‌افزار گوشی موبایل',
  },
  {
    parent_slug: 'building-and-garden',
    slug: 'garden-tools',
    title: 'ابزار باغبانی',
  },
  {
    parent_slug: 'audio-video',
    slug: 'tv-projector',
    title: 'تلویزیون و پروژکتور',
  },
  {
    parent_slug: 'animals',
    slug: 'fish',
    title: 'ماهی و آکواریوم',
  },
  {
    parent_slug: 'musical-instruments',
    slug: 'drums-percussion',
    title: 'درام پرکاشن',
  },
  {
    parent_slug: 'sport-leisure',
    slug: 'winter-sports',
    title: 'ورزش‌های زمستانی',
  },
  {
    parent_slug: 'teaching',
    slug: 'consulting',
    title: 'مشاوره تحصیلی',
  },
  {
    parent_slug: 'book-student-literature',
    slug: 'magazines',
    title: 'مجلات',
  },
  {
    parent_slug: 'sport-leisure',
    slug: 'horses-equestrian',
    title: 'اسب و تجهیزات اسب سواری',
  },
  {
    parent_slug: 'animals',
    slug: 'accessories',
    title: 'لوازم جانبی',
  },
  {
    parent_slug: 'musical-instruments',
    slug: 'violins',
    title: 'ویولن',
  },
  {
    parent_slug: 'animals',
    slug: 'farm-animals',
    title: 'حیوانات مزرعه',
  },
  {
    parent_slug: 'cars',
    slug: 'rental',
    title: 'اجاره‌ای',
  },
  {
    parent_slug: 'cars',
    slug: 'classic',
    title: 'کلاسیک',
  },
  {
    parent_slug: 'cars',
    slug: 'heavy',
    title: 'سنگین',
  },
  {
    parent_slug: 'community',
    slug: 'lost-and-found',
    title: 'گم‌شده‌ها',
  },
  {
    parent_slug: 'lost-and-found',
    slug: 'lost-animals',
    title: 'حیوانات',
  },
  {
    parent_slug: 'lost-and-found',
    slug: 'lost-things',
    title: 'اشیا',
  },
  {
    parent_slug: 'animals',
    slug: 'dog',
    title: 'سگ',
  },
  {
    parent_slug: 'audio-video',
    slug: 'CCTV',
    title: 'دوربین مداربسته',
  },
  {
    parent_slug: 'personal',
    slug: 'stationery',
    title: 'لوازم التحریر',
  },
  {
    parent_slug: 'equipments-and-machinery',
    slug: 'medical-equipment',
    title: 'پزشکی',
  },
  {
    parent_slug: 'real-estate',
    slug: 'commercial-rent',
    title: 'اجاره اداری و تجاری',
  },
  {
    parent_slug: 'real-estate',
    slug: 'temporary-rent',
    title: 'اجاره کوتاه مدت',
  },
  {
    parent_slug: 'temporary-rent',
    slug: 'suite-apartment',
    title: 'آپارتمان و سوئیت',
  },
  {
    parent_slug: 'temporary-rent',
    slug: 'villa',
    title: 'ویلا و باغ',
  },
  {
    parent_slug: 'temporary-rent',
    slug: 'workspace',
    title: 'دفتر کار و فضای آموزشی',
  },
  {
    parent_slug: 'real-estate',
    slug: 'real-estate-services',
    title: 'پرو‌ژه‌های ساخت و ساز',
  },
];
export default Categories;
