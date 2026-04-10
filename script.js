localStorage.removeItem('artisans');
const u = (id, w = 800) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=82`

/** Wikimedia Commons (CC BY-SA / GFDL etc.) — see each file page for author & license. */
const WM = {
    nokTerracotta: 'https://lh3.googleusercontent.com/ci/AL18g_TnLqXSyOrqIPBDeTmx-AKd1e2EmEFdrDTY5udRnnHrhqykhUC1QWk-1v46xSStY88AhrTJ_A=s1200', 
    beninPlaque: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Benin_brass_plaque_03_%28cropped%29.jpg',
    bamilekeMask: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Bamileke_Mask_%28tsesah%29.jpg',
    makondeMask: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Makonde_mask_BM_Af1958_12_1.jpg',
    woodenMask: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/African_wooden_mask.jpg',
    kenteEwe: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Ewe_kente_stripes%2C_Ghana.jpg',
    bogolanMali: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Bogolan_cloth_in_market_of_End%C3%A9%2C_Mali.JPG',
    djembeGhana: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Djembe%2C_Ghana.jpg',
    maasaiBeads: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Maasai_beadwork.jpg'
}

const genericAvatar = (name) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'A')}&background=9C6644&color=fff&size=128&bold=true`

let products = [
    {
        id: 1,
        title: 'Terracotta Set',
        price: 320,
        category: 'pottery',
        image: 'https://www.proantic.com/galerie/galerie-le-rempart/img/1026134-main-6366a3427f3f1.jpg',
        images: [
            'https://www.proantic.com/galerie/galerie-le-rempart/img/1026134-main-6366a3427f3f1.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuE58lMU3jS9eKlsftmNnlIMRBfMf9GTr5Q&s',
            'https://www.hamillgallery.com/NOK/NokTerracottas/Nok12n.jpg'
        ],
        desc: 'Hand-made terracotta echoing West African ceramic traditions.',
        artisan: 'Ama Serwaa',
        specs: ['Material: Terracotta clay', 'Height: 34 cm', 'Finish: Matte earth tone'],
        photoNote: 'Beautiful African pottery'
    },
    {
        id: 2,
        title: 'Krobo Bead Necklace',
        price: 185,
        category: 'beadwork',
        image: 'https://www.culturerocksbynini.com/cdn/shop/files/159339E4-CBDE-414A-8EF6-F36C130449D5.jpg?v=1708049792&width=1946',
        images: [
            'https://www.culturerocksbynini.com/cdn/shop/files/159339E4-CBDE-414A-8EF6-F36C130449D5.jpg?v=1708049792&width=1946',
            'https://i.etsystatic.com/5631781/r/il/869473/2957952035/il_fullxfull.2957952035_qnhr.jpg',
            'https://aadampo.com/cdn/shop/collections/rn-image_picker_lib_temp_26d6846c-cfc7-4c37-9d6f-29824e9111f0.png?v=1767503736'
        ],
        desc: 'Hand-beaded necklace inspired by Ghanaian Krobo beads and East African beadwork traditions.',
        artisan: 'Kwame Mensah',
        specs: ['Material: Recycled glass beads', 'Length: 48 cm', 'Clasp: Brass hook'],
        photoNote: 'Traditional African beadwork'
    },
    {
        id: 3,
        title: 'Bogolan Wall Textile',
        price: 450,
        category: 'decor',
        image: 'https://i.etsystatic.com/23820557/r/il/7e3861/5885262157/il_570xN.5885262157_foh6.jpg',
        images: [
            'https://i.etsystatic.com/23820557/r/il/7e3861/5885262157/il_570xN.5885262157_foh6.jpg',
            'https://ih1.redbubble.net/image.1464138782.2752/ur,tapestry_lifestyle_dorm_medium,tall_portrait,750x1000.jpg',
            'https://m.media-amazon.com/images/I/81DkEpYOgiL._AC_UF894,1000_QL80_.jpg'
        ],
        desc: 'Large mud-dyed bogolanfini textile from Mali, perfect for wall display.',
        artisan: 'Fatima Abubakar',
        specs: ['Material: Cotton', 'Size: 110 x 90 cm', 'Hanging loops included'],
        photoNote: 'Traditional bogolan textile'
    },
    {
        id: 4,
        title: 'Handwoven Kente',
        price: 280,
        category: 'textile',
        image: 'https://i.etsystatic.com/23834877/r/il/69893e/5693168085/il_570xN.5693168085_7jdb.jpg',
        images: [
            'https://i.etsystatic.com/23834877/r/il/69893e/5693168085/il_570xN.5693168085_7jdb.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/5/5b/Kent_wove.jpg',
            'https://africanclothingstore.co.uk/wp-content/uploads/2025/11/69c710c9-9ab3-45e8-bfeb-ec55bc51a5da-2.jpg'
        ],
        desc: 'Beautiful kente strip-woven throw inspired by Ewe and Ashanti traditions.',
        artisan: 'Yaw Ofori',
        specs: ['Material: Cotton blend', 'Size: 160 x 120 cm', 'Care: Gentle hand wash'],
        photoNote: 'Authentic Ghanaian kente'
    },
    {
        id: 5,
        title: 'Carved Ebony Mask',
        price: 390,
        category: 'sculpture',
        image: 'https://www.africancraftsmarket.com/images/African-Mask-Ebony-wood.jpg',
        images: [
            'https://www.africancraftsmarket.com/images/African-Mask-Ebony-wood.jpg',
            'https://image.invaluable.com/housePhotos/Ahlers/31/556531/H5512-L65234705.jpg',
            'https://imisihouse.com/cdn/shop/products/il_fullxfull.3937401553_i0t7_2048x.jpg?v=1656691078'
        ],
        desc: 'Hand-carved ebony mask inspired by traditional African sculptural arts.',
        artisan: 'Kojo Antwi',
        specs: ['Material: Ebony wood', 'Height: 42 cm', 'Finish: Natural wax'],
        photoNote: 'Traditional African mask'
    },
    {
        id: 6,
        title: 'Tuareg Silver Cuff',
        price: 260,
        category: 'jewelry',
        image: 'https://www.culturalinteriors.com/cdn/shop/products/15596babd0ca598efee7a8adc603d87af4d60702e02264368574060f3dcb8e2b.jpg?v=1640991774',
        images: [
            'https://www.culturalinteriors.com/cdn/shop/products/15596babd0ca598efee7a8adc603d87af4d60702e02264368574060f3dcb8e2b.jpg?v=1640991774',
            'https://d13k5xkmdqbhs.cloudfront.net/products/3UZ1ZAE/XTMJZFWU-large.jpg',
            'https://zawadiarts.com/wp-content/uploads/2022/11/TuaregSilverBracelet1.jpg'
        ],
        desc: 'Elegant silver cuff inspired by Tuareg and Saharan metalwork traditions.',
        artisan: 'Aisha Bello',
        specs: ['Material: Silver alloy', 'Size: Adjustable', 'Weight: 42 g'],
        photoNote: 'African jewelry'
    },
    {
        id: 7,
        title: 'Woven Raffia Basket',
        price: 140,
        category: 'basketry',
        image: 'https://static.wixstatic.com/media/7e3326_6021adf8fe814ada95590a2b972a2f71~mv2.png/v1/fill/w_568,h_522,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e3326_6021adf8fe814ada95590a2b972a2f71~mv2.png',
        images: [
            'https://static.wixstatic.com/media/7e3326_6021adf8fe814ada95590a2b972a2f71~mv2.png/v1/fill/w_568,h_522,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e3326_6021adf8fe814ada95590a2b972a2f71~mv2.png',
            'https://i.shgcdn.com/4b22e63e-ab03-415e-a7b3-c0a1079c83c9/-/format/auto/-/quality/normal/',
            'https://static.wixstatic.com/media/b0690b_d2f1545933294f44955980967d345204~mv2.png/v1/fill/w_480,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0690b_d2f1545933294f44955980967d345204~mv2.png'
        ],
        desc: 'Handwoven raffia basket using traditional West African coiling techniques.',
        artisan: 'Nana Kyei',
        specs: ['Material: Raffia', 'Diameter: 36 cm', 'Handle: Leather wrapped'],
        photoNote: 'African basketry'
    },
    {
        id: 8,
        title: 'Indigo Adire Scarf',
        price: 165,
        category: 'textile',
        image: 'https://lh3.googleusercontent.com/ci/AL18g_TC6p2o3xDIXeBE5H_5hcAN05bYdKXo7jOMwkVBgoh7V1YrZtunMCpg97kntClo1Siz6HE6M-rX=s1200',
        images: [
            'https://lh3.googleusercontent.com/ci/AL18g_TC6p2o3xDIXeBE5H_5hcAN05bYdKXo7jOMwkVBgoh7V1YrZtunMCpg97kntClo1Siz6HE6M-rX=s1200',
            'https://i.etsystatic.com/5262994/r/il/3792af/3932142586/il_1080xN.3932142586_bkxu.jpg',
            'https://static.wixstatic.com/media/93feba_814d49b9305b453f92c0bdedfd5e0bdf~mv2.jpg/v1/fill/w_284,h_284,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/93feba_814d49b9305b453f92c0bdedfd5e0bdf~mv2.jpg'
        ],
        desc: 'Beautiful resist-dyed scarf in the Yoruba Adire tradition.',
        artisan: 'Bisi Adeyemi',
        specs: ['Material: Soft cotton', 'Length: 180 cm', 'Dye: Natural indigo'],
        photoNote: 'African indigo textile'
    },
    {
        id: 9,
        title: 'Talking Drums',
        price: 520,
        category: 'instruments',
        image: 'https://www.starland.co.uk/media/catalog/product/cache/0c92e6dfd61d23dc08ddae5a4abff5f4/p/p/pp1140.jpg',
        images: [
            'https://www.starland.co.uk/media/catalog/product/cache/0c92e6dfd61d23dc08ddae5a4abff5f4/p/p/pp1140.jpg',
            'https://figures.academia-assets.com/61345706/figure_005.jpg',
            'https://theghanareport.com/wp-content/uploads/2025/03/Talking-Drums.jpg'
        ],
        desc: 'Traditional West African talking drums with brass detailing.',
        artisan: 'Yaw Ofori',
        specs: ['Material: Wood & hide', 'Finish: Brass rings', 'Set of 2'],
        photoNote: 'African musical instruments'
    },
    {
        id: 10,
        title: 'Embossed Leather Satchel',
        price: 310,
        category: 'leather',
        image: 'https://m.media-amazon.com/images/I/71FfytsS3lL._AC_SL1500_.jpg',
        images: [
            'https://m.media-amazon.com/images/I/71FfytsS3lL._AC_SL1500_.jpg',
            'https://tiffanyandfred.com/cdn/shop/files/7569PURPLEBACK.jpg?v=1693234242&width=1946',
            'https://www.wards.com/dw/image/v2/BBVM_PRD/on/demandware.static/-/Sites-colony-master-catalog/default/dwaf32d6b9/DIS/FH24_SU_6316936_259649_WP001.png?sw=680&sh=680&sm=fit'
        ],
        desc: 'Hand-tooled leather satchel with traditional African motifs.',
        artisan: 'Kwame Mensah',
        specs: ['Material: Full-grain leather', 'Strap: Adjustable', 'Lined interior'],
        photoNote: 'African leatherwork'
    },
    {
        id: 11,
        title: 'Senufo Rhythm Rattle',
        price: 95,
        category: 'instruments',
        image: 'https://guru-shop.de/images/product_images/500_images/kokosnuss-rassel-14592.jpg',
        images: [
            'https://guru-shop.de/images/product_images/500_images/kokosnuss-rassel-14592.jpg',
            'https://i.etsystatic.com/26132326/r/il/4a74fe/6025860458/il_fullxfull.6025860458_2s8i.jpg',
            'https://img.lakeshorelearning.com/is/image/OCProduction/re106?wid=500&hei=375&fmt=pjpeg&pscan=auto&qlt=90,1&op_sharpen=0&resMode=bilin&op_usm=2,0.25,7,0'
        ],
        desc: 'Traditional percussion rattles used in Senufo cultural ceremonies.',
        artisan: 'Ama Serwaa',
        specs: ['Material: Gourd & seeds', 'Set: 3 pieces', 'Woven handle'],
        photoNote: 'African rhythm instruments'
    },
    {
        id: 12,
        title: 'Oware Game Board (Ebony)',
        price: 175,
        category: 'decor',
        image: 'https://africaheartwoodproject.org/wp-content/uploads/2016/09/OWAC_1.jpg',
        images: [
            'https://africaheartwoodproject.org/wp-content/uploads/2016/09/OWAC_1.jpg',
            'https://africaheartwoodproject.org/wp-content/uploads/2016/01/2667_1L-1.jpg',
            'https://successbl.com/wp-content/uploads/2013/09/oware-ghana.jpg'
        ],
        desc: 'Hand-carved ebony oware (mancala) board with traditional design.',
        artisan: 'Kojo Antwi',
        specs: ['Material: Ebony', 'Counters: Included', 'Finish: Beeswax'],
        photoNote: 'Traditional African game'
    },
    {
        id: 13,
        title: 'Cowrie Choker & Bangle',
        price: 132,
        category: 'jewelry',
        image: 'https://i.etsystatic.com/6426018/r/il/feac5d/1852340536/il_570xN.1852340536_hb0e.jpg',
        images: [
            'https://i.etsystatic.com/6426018/r/il/feac5d/1852340536/il_570xN.1852340536_hb0e.jpg',
            'https://i.ebayimg.com/images/g/VdEAAOSwJsJmvH2R/s-l400.jpg',
            'https://vivazs.com/cdn/shop/files/VivazsCowrieset_22.jpg?v=1738301446&width=1445'
        ],
        desc: 'Elegant cowrie shell jewelry drawing from historical African adornment.',
        artisan: 'Nana Kyei',
        specs: ['Material: Cowrie & brass', 'Adjustable closure', 'Set: 2 items'],
        photoNote: 'African cowrie jewelry'
    },
    {
        id: 14,
        title: 'Korai Mat',
        price: 210,
        category: 'Textile',
        image: 'https://m.media-amazon.com/images/I/91rhiOxZp1S.jpg',
        images: [
            'https://m.media-amazon.com/images/I/91rhiOxZp1S.jpg',
            'https://m.media-amazon.com/images/I/815hFk3dJYL._AC_UF350,350_QL80_.jpg',
            'https://m.media-amazon.com/images/I/610oF8u3OnL._AC_UF1000,1000_QL80_.jpg'
        ],
        desc: 'Large floor mat using traditional African weaving methods.',
        artisan: 'Fatima Abubakar',
        specs: ['Material: Sorghum grass', 'Diameter: 120 cm', 'Indigo trim'],
        photoNote: 'African mat'
    },
    {
        id: 15,
        title: 'Lost-Wax Bronze Miniature',
        price: 640,
        category: 'sculpture',
        image: 'https://cdn.sanity.io/images/cctd4ker/production/afa2dd2f0b0f0f09308aedb107b8035200998cf5-1240x775.jpg?w=3840&q=75&fit=clip&auto=format',
        images: [
            'https://cdn.sanity.io/images/cctd4ker/production/afa2dd2f0b0f0f09308aedb107b8035200998cf5-1240x775.jpg?w=3840&q=75&fit=clip&auto=format',
            'https://cdn.sanity.io/images/cctd4ker/production/2342704e95277545f2b0816afe7d2d99f47d3a5b-1520x1922.jpg?w=3840&q=75&fit=clip&auto=format',
            'https://sacredart.caaar.duke.edu/wp-content/uploads/2023/03/JDB_0101-1.jpg'
        ],
        desc: 'Lost-wax cast bronze miniature inspired by Benin Kingdom artistry.',
        artisan: 'Bisi Adeyemi',
        specs: ['Material: Bronze', 'Height: 18 cm', 'Signed base'],
        photoNote: 'African bronze sculpture'
    },
    {
        id: 16,
        title: 'Painted Clay Water Vessels',
        price: 155,
        category: 'pottery',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/CI/JB/OI/137096637/clay-water-pot-500x500.jpg',
        images: [
            'https://5.imimg.com/data5/SELLER/Default/2022/8/CI/JB/OI/137096637/clay-water-pot-500x500.jpg',
            'https://5.imimg.com/data5/VW/LD/RD/SELLER-58815387/designer-terracotta-water-pot.jpg',
            'https://i.etsystatic.com/iap/7144d0/6713202451/iap_640x640.6713202451_q0bcwpc9.jpg?version=0'
        ],
        desc: 'Set of painted clay water vessels with traditional African decoration.',
        artisan: 'Ama Serwaa',
        specs: ['Material: Clay', 'Set: 3', 'Food-safe glaze'],
        photoNote: 'African clay pottery'
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || []
let currentProduct = null
const reviewsByProduct = {}

let artisans = [
    {
        name: 'Ama Serwaa',
        country: 'Ghana',
        craft: 'Terracotta pottery and symbolic carving',
        avatar: 'https://i.pinimg.com/736x/12/16/8e/12168ecee73d053d03542cb42813d265.jpg'   
    },
    {
        name: 'Kwame Mensah',
        country: 'Ghana',
        craft: 'Krobo bead jewelry and custom bead sets',
        avatar: 'https://pulitzercenter.org/sites/default/files/styles/510x315/public/02-03-20/brandonrogers4.jpg.webp?h=000240c6&itok=F8Msmtuw'  // Young African man
    },
    {
        name: 'Fatima Abubakar',
        country: 'Nigeria',
        craft: 'Wall textiles and stitched decor panels',
        avatar: 'https://image.okayafrica.com/192218.webp?imageId=192218&width=960&height=1440&format=jpg' // Elegant woman with headwrap
    },
    {
        name: 'Yaw Ofori',
        country: 'Ghana',
        craft: 'Kente weaving and ceremonial fabrics',
        avatar: 'https://media.istockphoto.com/id/646851392/nl/foto/african-american-man-die-zich-voordeed-in-zwarte-jas-en-hoed.jpg?s=612x612&w=0&k=20&c=LWAD_nilIcprB-iII-8Ew3EamAHfzRrFJtR7f6T1Apg='   // Mature craftsman
    },
    {
        name: 'Kojo Antwi',
        country: 'Ghana',
        craft: 'Wood carving and ceremonial masks',
        avatar: 'https://c8.alamy.com/comp/CR4EFX/a-studio-portrait-of-a-young-south-african-man-CR4EFX.jpg'    // Focused artisan
    },
    {
        name: 'Nana Kyei',
        country: 'Ghana',
        craft: 'Raffia weaving and baskets',
        avatar: 'https://www.shutterstock.com/image-photo/ho-volta-ghana-september-14-260nw-1731259189.jpg' // Smiling woman artisan
    },
    {
        name: 'Aisha Bello',
        country: 'Niger',
        craft: 'Silver cuffs and etched metal ornaments',
        avatar: 'https://louis.pressbooks.pub/app/uploads/sites/51/2023/01/f4a31ce3f05c96fc1fc801b337187056.jpg'  // Professional woman
    },
    {
        name: 'Bisi Adeyemi',
        country: 'Nigeria',
        craft: 'Adire indigo dyeing and scarf finishing',
        avatar: 'https://www.shutterstock.com/image-photo/portrait-real-black-african-man-260nw-509414941.jpg'   // Warm, creative woman
    }
];

let auctionItems = JSON.parse(localStorage.getItem('auctions')) || []

let designCanvasReady = false
let designDraw = { active: false, lastX: 0, lastY: 0 }
let designResizeTimer = null

function normalizeName(s) {
    return (s || '').trim().toLowerCase()
}

function productImageUrls(p) {
    if (!p) return []
    if (Array.isArray(p.images) && p.images.length) return p.images
    if (p.image) return [p.image]
    return []
}

function ensureProductMedia(p) {
    if (!Array.isArray(p.images) || !p.images.length) {
        p.images = p.image ? [p.image] : []
    }
    if (!p.image && p.images.length) p.image = p.images[0]
    return p
}

function migrateProductsList(arr) {
    return (arr || []).map((p) => ensureProductMedia({ ...p }))
}

function migrateArtisansList(saved, defaults) {
    const merged = []
    const defs = defaults || artisans
    ;(saved || []).forEach((s) => {
        const d = defs.find((x) => normalizeName(x.name) === normalizeName(s.name))
        merged.push({
            name: s.name,
            country: s.country || d?.country || '',
            craft: s.craft || d?.craft || '',
            avatar: s.avatar || d?.avatar || genericAvatar(s.name)
        })
    })
    defs.forEach((d) => {
        if (!merged.some((m) => normalizeName(m.name) === normalizeName(d.name))) merged.push({ ...d })
    })
    return merged
}

function syncArtisansFromProducts() {
    products.forEach((p) => {
        const n = p.artisan && p.artisan.trim()
        if (!n) return
        if (!artisans.some((a) => normalizeName(a.name) === normalizeName(n))) {
            artisans.push({
                name: n,
                country: 'Africa',
                craft: `${p.category} crafts`,
                avatar: genericAvatar(n)
            })
        }
    })
}

function persistAuctions() {
    localStorage.setItem('auctions', JSON.stringify(auctionItems))
}

function resizeDesignCanvasPreserving() {
    const canvas = document.getElementById('design-canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const wrap = canvas.parentElement
    if (!wrap) return
    const rect = wrap.getBoundingClientRect()
    const rawW = wrap.clientWidth || rect.width || window.innerWidth - 32
    const cssW = Math.max(280, Math.min(640, Math.floor(rawW)))
    const cssH = Math.min(320, Math.max(200, Math.round(window.innerHeight * 0.34)))

    let snapshot = null
    if (canvas.width > 0 && designCanvasReady) {
        try {
            snapshot = canvas.toDataURL('image/png')
        } catch (e) {
            snapshot = null
        }
    }

    canvas.width = Math.floor(cssW * dpr)
    canvas.height = Math.floor(cssH * dpr)
    canvas.style.width = `${cssW}px`
    canvas.style.height = `${cssH}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, cssW, cssH)

    if (snapshot) {
        const img = new Image()
        img.onload = () => {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            ctx.drawImage(img, 0, 0, cssW, cssH)
        }
        img.onerror = () => {}
        img.src = snapshot
    }
}

function initDesignCanvas() {
    const canvas = document.getElementById('design-canvas')
    if (!canvas || designCanvasReady) return

    const ctx = canvas.getContext('2d')

    resizeDesignCanvasPreserving()
    designCanvasReady = true

    const onResize = () => {
        clearTimeout(designResizeTimer)
        designResizeTimer = setTimeout(() => resizeDesignCanvasPreserving(), 80)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)

    function pointerPos(e) {
        const r = canvas.getBoundingClientRect()
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        const clientY = e.touches ? e.touches[0].clientY : e.clientY
        return { x: clientX - r.left, y: clientY - r.top }
    }

    function startDraw(e) {
        e.preventDefault()
        designDraw.active = true
        const p = pointerPos(e)
        designDraw.lastX = p.x
        designDraw.lastY = p.y
    }

    function moveDraw(e) {
        if (!designDraw.active) return
        e.preventDefault()
        const colorEl = document.getElementById('sketch-color')
        const brushEl = document.getElementById('sketch-brush')
        const p = pointerPos(e)
        const dpr = window.devicePixelRatio || 1
        ctx.save()
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        ctx.strokeStyle = colorEl ? colorEl.value : '#1a1a1a'
        ctx.lineWidth = brushEl ? parseInt(brushEl.value, 10) : 3
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.beginPath()
        ctx.moveTo(designDraw.lastX, designDraw.lastY)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()
        ctx.restore()
        designDraw.lastX = p.x
        designDraw.lastY = p.y
    }

    function endDraw(e) {
        if (e) e.preventDefault()
        designDraw.active = false
    }

    canvas.addEventListener('mousedown', startDraw)
    window.addEventListener('mousemove', moveDraw)
    window.addEventListener('mouseup', endDraw)

    canvas.addEventListener('touchstart', startDraw, { passive: false })
    canvas.addEventListener('touchmove', moveDraw, { passive: false })
    canvas.addEventListener('touchend', endDraw)
    canvas.addEventListener('touchcancel', endDraw)
}

function clearDesignCanvas() {
    const canvas = document.getElementById('design-canvas')
    if (!canvas || !designCanvasReady) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const w = canvas.width / dpr
    const h = canvas.height / dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, w, h)
}

function cancelAuctionEdit() {
    document.getElementById('editing-auction-id').value = ''
    document.getElementById('sketch-submit-btn').textContent = 'Submit for auction'
    document.getElementById('sketch-cancel-edit-btn').classList.add('hidden')
    const a = document.getElementById('sketch-artisan')
    const t = document.getElementById('sketch-title')
    const b = document.getElementById('sketch-bid')
    if (a) a.value = ''
    if (t) t.value = ''
    if (b) b.value = '50'
    clearDesignCanvas()
    showToast('Edit cancelled.')
}

function loadAuctionForEdit(id) {
    const item = auctionItems.find((a) => a.id === id)
    if (!item) return
    showSection('artisans')
    setTimeout(() => {
        initDesignCanvas()
        document.getElementById('sketch-artisan').value = item.artisan
        document.getElementById('sketch-title').value = item.title
        document.getElementById('sketch-bid').value = item.startBid
        document.getElementById('editing-auction-id').value = String(id)
        document.getElementById('sketch-submit-btn').textContent = 'Save changes'
        document.getElementById('sketch-cancel-edit-btn').classList.remove('hidden')
        const canvas = document.getElementById('design-canvas')
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const dpr = window.devicePixelRatio || 1
        const img = new Image()
        img.onload = () => {
            const w = canvas.width / dpr
            const h = canvas.height / dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            ctx.fillStyle = '#ffffff'
            ctx.fillRect(0, 0, w, h)
            ctx.drawImage(img, 0, 0, w, h)
        }
        img.src = item.image
        showToast('Sketch loaded — edit and tap Save changes.')
    }, 100)
}

function deleteAuctionItem(id, artisanConfirm) {
    const item = auctionItems.find((a) => a.id === id)
    if (!item) return
    const typed = (artisanConfirm || '').trim()
    if (normalizeName(typed) !== normalizeName(item.artisan)) {
        showToast('Artisan name must match to delete this listing.')
        return
    }
    auctionItems = auctionItems.filter((a) => a.id !== id)
    persistAuctions()
    renderAuctionList()
    closeModal()
    showToast('Auction listing removed.')
}

function submitSketchAuction() {
    const canvas = document.getElementById('design-canvas')
    const artisan = (document.getElementById('sketch-artisan') && document.getElementById('sketch-artisan').value.trim()) || ''
    const title =
        (document.getElementById('sketch-title') && document.getElementById('sketch-title').value.trim()) || 'Untitled design'
    const bidRaw = document.getElementById('sketch-bid') ? parseInt(document.getElementById('sketch-bid').value, 10) : 50
    const editIdRaw = document.getElementById('editing-auction-id').value
    const editId = editIdRaw ? parseInt(editIdRaw, 10) : null

    if (!canvas || !artisan) {
        showToast('Add your artisan name to list this design.')
        return
    }

    syncArtisansFromProducts()
    if (!artisans.some((a) => normalizeName(a.name) === normalizeName(artisan))) {
        artisans.unshift({ name: artisan, country: 'Africa', craft: 'Sketch & visual design', avatar: genericAvatar(artisan) })
        localStorage.setItem('artisans', JSON.stringify(artisans))
        renderArtisans()
    }

    const dataUrl = canvas.toDataURL('image/png')

    if (editId && auctionItems.some((a) => a.id === editId)) {
        const idx = auctionItems.findIndex((a) => a.id === editId)
        if (normalizeName(auctionItems[idx].artisan) !== normalizeName(artisan)) {
            showToast('Keep the same artisan name when editing your listing.')
            return
        }
        auctionItems[idx] = {
            ...auctionItems[idx],
            title,
            image: dataUrl,
            startBid: Number.isNaN(bidRaw) ? 50 : Math.max(1, bidRaw)
        }
        persistAuctions()
        renderAuctionList()
        document.getElementById('editing-auction-id').value = ''
        document.getElementById('sketch-submit-btn').textContent = 'Submit for auction'
        document.getElementById('sketch-cancel-edit-btn').classList.add('hidden')
        clearDesignCanvas()
        showToast('Auction listing updated.')
        return
    }

    const item = {
        id: Date.now(),
        title,
        artisan,
        image: dataUrl,
        startBid: Number.isNaN(bidRaw) ? 50 : Math.max(1, bidRaw)
    }
    auctionItems.unshift(item)
    persistAuctions()
    renderAuctionList()
    document.getElementById('editing-auction-id').value = ''
    document.getElementById('sketch-submit-btn').textContent = 'Submit for auction'
    document.getElementById('sketch-cancel-edit-btn').classList.add('hidden')
    clearDesignCanvas()
    showToast('Design submitted for auction.')
}

function carouselMarkup(trackId, urls, options = {}) {
    const { tall } = options
    const hCls = tall ? 'min-h-[200px] h-[38vh] sm:h-[420px]' : 'aspect-[4/5] sm:aspect-square'
    if (!urls.length) urls = ['']
    const multi = urls.length > 1
    return `
        <div class="relative w-full ${hCls} rounded-2xl overflow-hidden bg-gray-100">
            <div id="${trackId}" class="carousel-track no-scrollbar flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
                ${urls
                    .map(
                        (src) =>
                            `<img src="${src}" alt="" class="min-w-full h-full object-cover snap-center snap-always shrink-0">`
                    )
                    .join('')}
            </div>
            ${
                multi
                    ? `<p class="pointer-events-none absolute bottom-2 left-2 rounded-lg bg-black/55 text-white text-[10px] px-2 py-0.5">Swipe for more</p>
            <button type="button" class="carousel-nav absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow text-gray-800 hidden sm:block" aria-label="Previous photo" onclick="carouselNav('${trackId}',-1)"><i class="fa-solid fa-chevron-left text-xs"></i></button>
            <button type="button" class="carousel-nav absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow text-gray-800 hidden sm:block" aria-label="Next photo" onclick="carouselNav('${trackId}',1)"><i class="fa-solid fa-chevron-right text-xs"></i></button>`
                    : ''
            }
        </div>
    `
}

function carouselNav(trackId, dir) {
    const el = document.getElementById(trackId)
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
}

function renderAuctionList() {
    const el = document.getElementById('auction-list')
    if (!el) return
    if (auctionItems.length === 0) {
        el.innerHTML =
            '<p class="text-sm text-gray-500 snap-start shrink-0">No sketch auctions yet. Draw above to list one.</p>'
        return
    }
    el.innerHTML = auctionItems
        .map(
            (item) => `
        <article class="snap-start shrink-0 w-[min(82vw,300px)] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <button type="button" onclick="viewAuctionSketch(${item.id})" class="block w-full aspect-[4/3] bg-gray-50">
                <img src="${item.image}" alt="" class="w-full h-full object-cover">
            </button>
            <div class="p-3 text-left flex-1 flex flex-col">
                <p class="font-medium text-sm line-clamp-2">${escapeHtml(item.title)}</p>
                <p class="text-xs text-[#9C6644] mt-1">${escapeHtml(item.artisan)}</p>
                <p class="text-xs text-gray-600 mt-1">From GHS ${item.startBid}</p>
                <button type="button" onclick="viewAuctionSketch(${item.id})" class="mt-2 w-full py-2 rounded-xl bg-gray-900 text-white text-xs font-medium">View</button>
                <div class="grid grid-cols-2 gap-2 mt-2">
                    <button type="button" onclick="loadAuctionForEdit(${item.id})" class="py-2 rounded-xl border border-gray-200 text-xs font-medium hover:bg-gray-50">Edit</button>
                    <button type="button" onclick="promptDeleteAuction(${item.id})" class="py-2 rounded-xl border border-red-200 text-red-600 text-xs font-medium hover:bg-red-50">Delete</button>
                </div>
            </div>
        </article>
    `
        )
        .join('')
}

function promptDeleteAuction(id) {
    const name = window.prompt('Type your artisan name exactly as on the listing to delete:')
    if (name === null) return
    deleteAuctionItem(id, name)
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
}

function viewAuctionSketch(numericId) {
    const item = auctionItems.find((a) => a.id === numericId)
    if (!item) return
    currentProduct = {
        id: `auction-${item.id}`,
        title: item.title,
        price: item.startBid,
        category: 'decor',
        image: item.image,
        images: [item.image],
        desc: `Original hand-drawn design by ${item.artisan}. Listed for auction — starting bid GHS ${item.startBid}.`,
        artisan: item.artisan,
        specs: ['Type: Sketch auction', 'Medium: Hand-drawn digital export']
    }
    openProductModal(currentProduct, true)
}

function openProductModal(product, isAuction) {
    const wrap = document.getElementById('modal-image-wrap')
    const urls = productImageUrls(product)
    wrap.innerHTML = carouselMarkup('modal-carousel', urls, { tall: true })

    document.getElementById('modal-title').textContent = product.title + (isAuction ? ' · Auction' : '')
    document.getElementById('modal-price').textContent = isAuction ? `From GHS ${product.price}` : `GHS ${product.price}`
    document.getElementById('modal-price-btn').textContent = isAuction ? `Bid from GHS ${product.price}` : `GHS ${product.price}`
    document.getElementById('modal-desc').textContent = product.desc
    document.getElementById('modal-artisan').textContent = `by ${product.artisan}`

    const creditEl = document.getElementById('modal-photo-credit')
    if (creditEl) {
        if (!isAuction && product.photoNote) {
            creditEl.textContent = 'Reference imagery: ' + product.photoNote
            creditEl.classList.remove('hidden')
        } else {
            creditEl.textContent = ''
            creditEl.classList.add('hidden')
        }
    }

    const specBox = document.getElementById('spec-color') && document.getElementById('spec-color').closest('.bg-gray-50')
    if (specBox) specBox.classList.toggle('hidden', !!isAuction)

    document.getElementById('spec-color').value = 'Natural Earth'
    document.getElementById('spec-beads').value = 50
    document.getElementById('spec-name').value = ''

    const reviewId = typeof product.id === 'string' ? product.id : product.id
    renderReviews(reviewId)
    resetChat()
    document.getElementById('product-modal').classList.remove('hidden')
    document.getElementById('product-modal').classList.add('flex')
}

function renderProducts(filteredProducts = products) {
    const container = document.getElementById('products-grid')
    if (!container) return
    container.innerHTML = ''

    filteredProducts.forEach((product) => {
        const urls = productImageUrls(product)
        const trackId = `pc-${product.id}`
        const card = document.createElement('div')
        card.className =
            'product-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-gray-100 shadow-sm'
        card.innerHTML = `
            ${carouselMarkup(trackId, urls, {})}
            <div class="p-3 sm:p-5">
                <h3 class="font-semibold text-sm sm:text-lg mb-1 line-clamp-2 leading-snug">${escapeHtml(product.title)}</h3>
                <div class="flex items-center justify-between gap-2 mt-1">
                    <span class="text-xs font-semibold text-[#9C6644]">GHS ${product.price}</span>
                    ${urls.length > 1 ? `<span class="text-[10px] text-gray-400 shrink-0">${urls.length} photos</span>` : ''}
                </div>
                <button type="button" onclick="viewProduct(${product.id}); event.stopPropagation()"
                        class="mt-3 sm:mt-4 w-full bg-gray-100 hover:bg-[#9C6644] hover:text-white transition py-2.5 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium">
                    View details
                </button>
            </div>
        `
        card.addEventListener('click', () => viewProduct(product.id))
        container.appendChild(card)
    })
}

function viewProduct(id) {
    currentProduct = products.find((p) => p.id === id)
    if (!currentProduct) return
    openProductModal(currentProduct, false)
}

function closeModal() {
    const modal = document.getElementById('product-modal')
    modal.classList.add('hidden')
    modal.classList.remove('flex')
    const specBox = document.getElementById('spec-color') && document.getElementById('spec-color').closest('.bg-gray-50')
    if (specBox) specBox.classList.remove('hidden')
    const creditEl = document.getElementById('modal-photo-credit')
    if (creditEl) {
        creditEl.textContent = ''
        creditEl.classList.add('hidden')
    }
}

function cartThumb(item) {
    const urls = productImageUrls(item)
    return urls[0] || item.image || ''
}

function addToCart(product) {
    cart.push({ ...product })
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
    showToast(`${product.title} added to cart!`)
}

function addCurrentToCart() {
    if (!currentProduct) return
    if (String(currentProduct.id).startsWith('auction-')) {
        addToCart({
            ...currentProduct,
            customizations: { color: 'Auction', beads: '—', name: 'Auction listing' }
        })
        closeModal()
        return
    }
    const customOrder = {
        ...currentProduct,
        customizations: {
            color: document.getElementById('spec-color').value,
            beads: document.getElementById('spec-beads').value,
            name: document.getElementById('spec-name').value.trim() || 'No custom name'
        }
    }
    addToCart(customOrder)
    closeModal()
}

function updateCartCount() {
    const count = document.getElementById('cart-count')
    if (count) count.textContent = cart.length
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar')
    if (!sidebar) return
    sidebar.classList.toggle('open')
    renderCart()
}

function renderCart() {
    const container = document.getElementById('cart-items')
    if (!container) return
    container.innerHTML = ''

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-400 py-12">Your cart is empty</p>`
        document.getElementById('cart-total').textContent = 'GHS 0'
        return
    }

    let total = 0
    cart.forEach((item, index) => {
        total += item.price
        const thumb = cartThumb(item)
        const div = document.createElement('div')
        div.className = 'flex gap-3 sm:gap-4'
        div.innerHTML = `
            <img src="${thumb}" alt="" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl sm:rounded-2xl shrink-0">
            <div class="flex-1 min-w-0">
                <p class="font-medium text-sm sm:text-base line-clamp-2">${escapeHtml(item.title)}</p>
                <p class="text-xs sm:text-sm text-gray-500">${escapeHtml(item.artisan)}</p>
                <p class="text-[11px] sm:text-xs text-gray-500">${item.customizations ? `${escapeHtml(String(item.customizations.color))}, ${escapeHtml(String(item.customizations.beads))} beads, ${escapeHtml(String(item.customizations.name))}` : 'Standard specification'}</p>
                <p class="font-semibold text-[#9C6644] text-sm sm:text-base">GHS ${item.price}</p>
            </div>
            <button type="button" onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-600 shrink-0 p-1" aria-label="Remove">
                <i class="fa-solid fa-trash"></i>
            </button>
        `
        container.appendChild(div)
    })

    document.getElementById('cart-total').textContent = `GHS ${total}`
}

function removeFromCart(index) {
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
    renderCart()
}

function goCustomerCare() {
    showSection('home')
    setTimeout(() => {
        document.getElementById('customer-care')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
}

function showSection(section) {
    document.getElementById('home-section')?.classList.add('hidden')
    document.getElementById('categories-section')?.classList.add('hidden')
    document.getElementById('shop-section')?.classList.add('hidden')
    document.getElementById('artisans-section')?.classList.add('hidden')
    document.getElementById('sell-section')?.classList.add('hidden')

    if (section === 'home') document.getElementById('home-section')?.classList.remove('hidden')
    else if (section === 'shop') document.getElementById('shop-section')?.classList.remove('hidden')
    else if (section === 'categories') document.getElementById('categories-section')?.classList.remove('hidden')
    else if (section === 'artisans') {
        document.getElementById('artisans-section')?.classList.remove('hidden')
        closeArtisanProfile()
        initDesignCanvas()
        renderAuctionList()
    } else if (section === 'sell') document.getElementById('sell-section')?.classList.remove('hidden')

    if (section !== 'artisans') closeArtisanProfile()
}

function closeArtisanProfile() {
    document.getElementById('artisan-profile-view')?.classList.add('hidden')
    document.getElementById('artisans-directory')?.classList.remove('hidden')
}

function showArtisanProfile(name) {
    const artisan = artisans.find((a) => a.name === name) || { name, country: '', craft: '', avatar: genericAvatar(name) }
    document.getElementById('artisans-directory')?.classList.add('hidden')
    document.getElementById('artisan-profile-view')?.classList.remove('hidden')
    const av = document.getElementById('artisan-profile-avatar')
    if (av) {
        av.src = artisan.avatar || genericAvatar(artisan.name)
        av.alt = artisan.name
    }
    document.getElementById('artisan-profile-title').textContent = artisan.name
    const parts = [artisan.country, artisan.craft].filter(Boolean)
    document.getElementById('artisan-profile-meta').textContent = parts.join(' · ')
    renderArtisanWorks(artisan.name)
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function renderArtisanWorks(artisanName) {
    const container = document.getElementById('artisan-works-grid')
    if (!container) return
    const key = normalizeName(artisanName)
    const prods = products.filter((p) => normalizeName(p.artisan) === key)
    const sketches = auctionItems.filter((a) => normalizeName(a.artisan) === key)
    container.innerHTML = ''

    if (prods.length === 0 && sketches.length === 0) {
        container.innerHTML =
            '<p class="text-sm text-gray-500 col-span-full">No published works yet for this artisan.</p>'
        return
    }

    sketches.forEach((item) => {
        const card = document.createElement('div')
        card.className =
            'product-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-200/80 shadow-sm'
        card.innerHTML = `
            <div class="relative aspect-[4/5] sm:aspect-square">
                <img src="${item.image}" alt="" class="product-card-img w-full h-full object-cover">
                <span class="absolute top-2 left-2 bg-amber-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-lg font-medium">Auction</span>
                <div class="absolute top-2 right-2 bg-white/95 px-2 py-1 rounded-xl text-xs font-semibold">From GHS ${item.startBid}</div>
            </div>
            <div class="p-3 sm:p-5">
                <h3 class="font-semibold text-sm sm:text-lg line-clamp-2">${escapeHtml(item.title)}</h3>
                <button type="button" class="mt-3 w-full py-2.5 rounded-xl bg-gray-900 text-white text-xs sm:text-sm font-medium">View</button>
            </div>
        `
        card.querySelector('button').addEventListener('click', () => viewAuctionSketch(item.id))
        container.appendChild(card)
    })

    prods.forEach((product) => {
        const urls = productImageUrls(product)
        const trackId = `pw-${product.id}-${Math.random().toString(36).slice(2, 7)}`
        const card = document.createElement('div')
        card.className =
            'product-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-gray-100 shadow-sm'
        card.innerHTML = `
            ${carouselMarkup(trackId, urls, {})}
            <div class="p-3 sm:p-5">
                <h3 class="font-semibold text-sm sm:text-lg line-clamp-2">${escapeHtml(product.title)}</h3>
                <div class="flex justify-between items-center mt-1 text-xs">
                    <span class="font-semibold text-[#9C6644]">GHS ${product.price}</span>
                    ${urls.length > 1 ? `<span class="text-gray-400">${urls.length} photos</span>` : ''}
                </div>
                <button type="button" class="mt-3 w-full py-2.5 rounded-xl bg-gray-100 hover:bg-[#9C6644] hover:text-white text-xs sm:text-sm font-medium">View details</button>
            </div>
        `
        card.addEventListener('click', () => viewProduct(product.id))
        card.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation()
            viewProduct(product.id)
        })
        container.appendChild(card)
    })
}

function filterCategory(cat) {
    showSection('shop')
    const filtered = products.filter((p) => p.category === cat)
    renderProducts(filtered.length > 0 ? filtered : products)
}

function searchProducts() {
    const input = document.getElementById('search-input')
    const query = input ? input.value.toLowerCase().trim() : ''
    if (!query) return renderProducts(products)

    const filtered = products.filter(
        (p) =>
            p.title.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query) ||
            p.artisan.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
    )
    renderProducts(filtered)
}

function showToast(msg) {
    const toast = document.createElement('div')
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const bottom = isMobile ? 'calc(4.25rem + env(safe-area-inset-bottom, 0px))' : '24px'
    toast.style.cssText = `position:fixed;bottom:${bottom};left:50%;transform:translateX(-50%);max-width:min(92vw,420px);background:#9C6644;color:white;padding:12px 20px;border-radius:9999px;z-index:9999;box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.2);font-size:14px;text-align:center`
    toast.textContent = msg
    document.body.appendChild(toast)

    setTimeout(() => {
        toast.style.transition = 'all 0.4s'
        toast.style.opacity = '0'
        setTimeout(() => toast.remove(), 400)
    }, 2800)
}

function renderReviews(productId) {
    const container = document.getElementById('reviews-container')
    if (!container) return
    const defaultReviews = [
        { author: 'Sarah A.', text: 'Beautiful quality. Looks even better in person.' },
        { author: 'Daniel K.', text: 'Fast delivery and excellent finishing on the craft.' }
    ]
    const list = reviewsByProduct[productId] || defaultReviews
    container.innerHTML = list
        .map(
            (review) => `
        <div class="border-l-4 border-[#9C6644] pl-3 sm:pl-4 bg-gray-50 py-3 pr-3 rounded-r-xl text-sm">
            <p class="italic">"${escapeHtml(review.text)}"</p>
            <p class="text-xs text-gray-500 mt-2">- ${escapeHtml(review.author)}</p>
        </div>
    `
        )
        .join('')
}

function submitReview(e) {
    e.preventDefault()
    if (!currentProduct) return
    const input = document.getElementById('review-input')
    const text = input.value.trim()
    if (!text) return

    const pid = currentProduct.id
    if (!reviewsByProduct[pid]) reviewsByProduct[pid] = []
    reviewsByProduct[pid].unshift({ author: 'You', text })
    input.value = ''
    renderReviews(pid)
}

function resetChat() {
    const box = document.getElementById('chatbox-messages')
    if (!box) return
    box.innerHTML =
        '<div class="text-sm bg-white border rounded-xl p-3">Artisan: Hello! Ask any question about this item.</div>'
}

function sendChatMessage(e) {
    e.preventDefault()
    const input = document.getElementById('chatbox-input')
    const box = document.getElementById('chatbox-messages')
    const text = input.value.trim()
    if (!text) return

    box.innerHTML += `<div class="text-sm bg-[#F3EDE8] rounded-xl p-3 ml-4 sm:ml-8">You: ${escapeHtml(text)}</div>`
    const reply =
        'Artisan: Thanks for asking. Yes, this item can be customized to your selected specifications.'
    setTimeout(() => {
        box.innerHTML += `<div class="text-sm bg-white border rounded-xl p-3 mr-4 sm:mr-8">${reply}</div>`
        box.scrollTop = box.scrollHeight
    }, 450)

    input.value = ''
    box.scrollTop = box.scrollHeight
}

function renderArtisans() {
    const grid = document.getElementById('artisans-grid')
    if (!grid) return
    grid.innerHTML = artisans
        .map(
            (artisan) => `
        <article class="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm">
            <button type="button"
                class="text-left w-full group flex items-start gap-3"
                onclick='showArtisanProfile(${JSON.stringify(artisan.name)})'>
                <img src="${artisan.avatar || genericAvatar(artisan.name)}" alt="" width="44" height="44" class="w-11 h-11 rounded-full object-cover border-2 border-[#9C6644]/25 shrink-0 bg-gray-100">
                <div class="min-w-0 flex-1">
                    <h3 class="text-base sm:text-lg font-semibold text-[#9C6644] group-hover:underline leading-snug">${escapeHtml(artisan.name)}</h3>
                    <p class="text-xs sm:text-sm text-gray-500 mt-0.5">${escapeHtml(artisan.country)}</p>
                </div>
            </button>
            <p class="text-xs sm:text-sm text-gray-600 mt-3 leading-snug pl-0 sm:pl-14">${escapeHtml(artisan.craft)}</p>
            <button type="button" onclick='showArtisanProfile(${JSON.stringify(artisan.name)})' class="mt-3 text-xs sm:text-sm font-medium text-[#9C6644] hover:underline sm:ml-14">View works →</button>
        </article>
    `
        )
        .join('')
}

function submitUpload(e) {
    e.preventDefault()
    const fileInput = document.getElementById('upload-images')
    const files = fileInput && fileInput.files ? Array.from(fileInput.files) : []
    if (!files.length) {
        showToast('Please choose at least one photo.')
        return
    }
    if (files.length > 5) {
        showToast('Maximum 5 photos. Using the first five.')
        files.length = 5
    }

    const title = document.getElementById('upload-title').value.trim()
    const price = parseInt(document.getElementById('upload-price').value, 10)
    const category = document.getElementById('upload-category').value
    const artisanName = document.getElementById('upload-artisan').value.trim()
    const desc = document.getElementById('upload-desc').value.trim()

    const readers = files.map(
        (file) =>
            new Promise((resolve) => {
                const r = new FileReader()
                r.onload = () => resolve(r.result)
                r.readAsDataURL(file)
            })
    )

    Promise.all(readers).then((urls) => {
        const newProduct = {
            id: Date.now(),
            title,
            price: Number.isNaN(price) ? 100 : price,
            category,
            image: urls[0],
            images: urls,
            desc,
            artisan: artisanName,
            specs: ['Material: Artisan submitted', 'Size: Custom', 'Finish: Handmade']
        }
        products.unshift(newProduct)
        if (!artisans.some((a) => normalizeName(a.name) === normalizeName(artisanName))) {
            artisans.unshift({
                name: artisanName,
                country: 'African Region',
                craft: `${category} craftsmanship`,
                avatar: genericAvatar(artisanName)
            })
        }
        renderProducts(products)
        renderArtisans()
        localStorage.setItem('products', JSON.stringify(products))
        localStorage.setItem('artisans', JSON.stringify(artisans))
        document.getElementById('upload-form').reset()
        showToast('Your craft has been posted for sale.')
        showSection('shop')
    })
}

window.onload = function () {
    const defaultArtisans = JSON.parse(JSON.stringify(artisans))
    const savedProducts = JSON.parse(localStorage.getItem('products') || 'null')
    const savedArtisans = JSON.parse(localStorage.getItem('artisans') || 'null')

    if (Array.isArray(savedProducts) && savedProducts.length > 0) {
        products = migrateProductsList(savedProducts)
    } else {
        products = migrateProductsList(products)
    }

    if (Array.isArray(savedArtisans) && savedArtisans.length > 0) {
        artisans = migrateArtisansList(savedArtisans, defaultArtisans)
    }

    syncArtisansFromProducts()
    auctionItems = JSON.parse(localStorage.getItem('auctions')) || []
    renderProducts()
    renderArtisans()
    renderAuctionList()
    showSection('home')
    updateCartCount()
    console.log('%cArtByAfricans Ready 🪔', 'color:#9C6644; font-size:14px; font-weight:600')
}
