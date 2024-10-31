const products = [
    {
        id: 1,
        name: "Jordan 1 Mid Black",
        price: "119,99€",
        sizes: ["36", "37", "38", "39", "40", "41", "42","43", "44", "45", "46"],
        images: [
            "/media/AIR+JORDAN+1+LOW1.jpg",
            "/media/AIR+JORDAN+1+LOW2.jpg",
            "/media/AIR+JORDAN+1+LOW3.jpg"
        ]
    },
    {
        id: 2,
        name: "Jordan Tatum 31",
        price: "129,99€",
        sizes: ["36", "37", "38", "39", "40", "41", "42","43", "44", "45", "46"],
        images: [
            "/media/JORDAN+TATUM+31.jpg",
            "/media/JORDAN+TATUM+32.jpg",
            "/media/JORDAN+TATUM+33.jpg"
        ]
    },
    {
        id: 3,
        name: "Jordan Luka 31",
        price: "139,99€",
        sizes: ["36", "37", "38", "39", "40", "41", "42","43", "44", "45", "46"],
        images: [
            "/media/JORDAN+LUKA+31.jpg",
            "/media/JORDAN+LUKA+32.jpg",
            "/media/JORDAN+LUKA+33.jpg"
        ]
    },
    {
        id: 4,
        name: "Jordan 14 Retro",
        price: "159,99€",
        sizes: ["36", "37", "38", "39", "40", "41", "42","43", "44", "45", "46"],
        images: [
            "/media/AIR+JORDAN+14+RETRO.jpg",
            "/media/AIR+JORDAN+14+RETRO2.jpg",
            "/media/AIR+JORDAN+14+RETRO3.jpg"
        ]
    },
    {
        id: 5,
        name: "Jordan Spizike Low",
        price: "129,99€",
        sizes: ["36", "37", "38", "39", "40", "41", "42","43", "44", "45", "46"],
        images: [
            "/media/JORDAN+SPIZIKE+LOW.jpg",
            "/media/JORDAN+SPIZIKE+LOW2.jpg",
            "/media/JORDAN+SPIZIKE+LOW3.jpg"
        ]
    },
    {
        id: 6,
        name: "Jordan MVP",
        price: "149,99€",
        sizes: ["36", "37", "38", "39", "40", "41", "42","43", "44", "45", "46"],
        images: [
            "/media/JORDAN+MVP.jpg",
            "/media/JORDAN+MVP2.jpg",
            "/media/JORDAN+MVP3.jpg"
        ]
    },
    {
        id: 7,
        name: "Jordan Post Slide",
        price: "99,99€",
        sizes: ["36", "37", "38", "39", "40", "41", "42","43", "44", "45", "46"],
        images: [
            "/media/JORDAN+POST+SLIDE.png",
            "/media/JORDAN+POST+SLIDE2.png",
            "/media/JORDAN+POST+SLIDE3.png"
        ]
    },
    {
        id: 8,
        name: "Jordan Heir",
        price: "109,99€",
        sizes: ["36", "37", "38", "39", "40", "41", "42","43", "44", "45", "46"],
        images: [
            "/media/JORDAN+HEIR.png",
            "/media/JORDAN+HEIR (1).png",
            "/media/JORDAN+HEIR (2).png"
        ]
    },
    {
        id: 9,
        name: "WMNS Air Jordan 1 Mid",
        price: "119,99€",
        sizes: ["36", "37", "38", "39", "40", "41", "42","43", "44", "45", "46"],
        images: [
            "/media/WMNS+AIR+JORDAN+1+MID.png",
            "/media/WMNS+AIR+JORDAN+1+MID2.png",
            "/media/WMNS+AIR+JORDAN+1+MID3.png"
        ]
    }
];

const productList = document.getElementById('productList');

products.forEach(product => {
    const productCard = `
        <div class="col-lg-4 col-md-6 col-12 mb-4">
            <div id="carouselExample${product.id}" class="carousel slide">
                <div class="carousel-inner">
                    ${product.images.map((img, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${img}" class="d-block w-100" alt="foto${index + 1}">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample${product.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample${product.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
            <div class="mt-2 text-center">
                <h5>${product.name}</h5>
                <h6>${product.price}</h6>
            </div>
            <button class="btn btn-primary mt-2 w-100 btn-comprar" data-bs-toggle="modal" data-bs-target="#productModal" data-product='${JSON.stringify(product)}'>Comprar</button>
        </div>
    `;
    productList.innerHTML += productCard;
});

document.addEventListener('click', (event) => {
    if (event.target.matches('.btn-comprar')) {
        const product = JSON.parse(event.target.getAttribute('data-product'));
        document.getElementById('productModalLabel').innerText = `${product.name} - ${product.price}`;
        const modalCarouselInner = document.getElementById('modalCarouselInner');
        modalCarouselInner.innerHTML = product.images.map((img, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100" alt="foto${index + 1}">
            </div>
        `).join('');

        const sizeButtonsContainer = document.getElementById('sizeButtonsContainer');
        sizeButtonsContainer.innerHTML = product.sizes.map(size => `
            <button type="button" class="btn btn-outline-primary mx-1 size-button">${size}</button>
        `).join('');

        // Añadir evento a los botones de talla
        const sizeButtons = document.querySelectorAll('.size-button');
        sizeButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
            });
        });

       // Añadir evento al botón "Añadir al carrito"
const addToCartButton = document.getElementById('addToCartButton');
addToCartButton.onclick = () => {
    const selectedSizeButton = Array.from(sizeButtons).find(button => button.classList.contains('active'));
    const selectedSize = selectedSizeButton ? selectedSizeButton.innerText : null;

    if (!selectedSize) {
        alert("No se puede añadir al carrito sin seleccionar una talla");
    } else {
        alert(`Añadido al carrito:\nModelo: ${product.name}\nTalla: ${selectedSize}`);
    }
};

    }
});
