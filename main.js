const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideCarritoInfo = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleAsideCarritoInfo);


function toggleDesktopMenu() {
    const isAsideCarritoInfoClosed = asideCarritoInfo.classList.contains('inactive');

    desktopMenu.classList.toggle('inactive');

    if (!isAsideCarritoInfoClosed) {
        asideCarritoInfo.classList.add('inactive');
    }
}


function toggleMobileMenu() {
    const isAsideCarritoInfoClosed = asideCarritoInfo.classList.contains('inactive');
    


    mobileMenu.classList.toggle('inactive');

    if (!isAsideCarritoInfoClosed) {
        asideCarritoInfo.classList.add('inactive');
    }  
}


function toggleAsideCarritoInfo() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    asideCarritoInfo.classList.toggle('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
}


const productList = [];
productList.push({
    name: 'Astronaut suit',
    price: 550,
    image: 'https://images.pexels.com/photos/8474701/pexels-photo-8474701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'TV',
    price: 420,
    image: 'https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Soccer ball',
    price: 30,
    image: 'https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Camera',
    price: 490,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Steel watch',
    price: 80,
    image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Makeup box',
    price: 0,
    image: 'https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=400'
});

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoFigure, productInfoDiv);
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)