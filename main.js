const menuEmail = document.querySelector('.navbar-email');//creo una variable 
const desktopMenu = document.querySelector('.desktop-menu');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);/* toggleDesktopMenu es una funcion */

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {//si el aside(carrito) no esta cerrado
        aside.classList.toggle('inactive');//cierro el aside(carrito) con este metodo
    }
    desktopMenu.classList.toggle('inactive');
}

/* Para que aparezca y desaparezca el menu hamburguesa */
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {//si el aside no esta cerrado
        aside.classList.toggle('inactive');//cierro el aside con este metodo
    }
    mobileMenu.classList.toggle('inactive');
}

/* Para que aparezca o desaparezca el Carrito de Compras */

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleCarritoAside(){
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');

    if(!isMenuMobileClosed){ //si el MenuMobile esta abierto
        mobileMenu.classList.toggle('inactive');//cierro el menu mobile
    }
    if(!isDesktopMenu){
        desktopMenu.classList.toggle('inactive');//cierro el desktop menu
    }

    aside.classList.toggle('inactive');

}

/* Lista de productos */

const productList = [];//Array
productList.push({//Agrego un producto al Array 
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({//Agrego un producto al Array 
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({//Agrego un producto al Array 
    name:'Computadora',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});


//Insertar el Array en HTML y para eso debemos recorrer el Arrays


function renderProducts(arr){
    for(product of productList){//product es el objeto que tengamos de nuestro arrays
    
        //unimoso con productCard que es div principal el cual esta contenido por cards-container
       
        
        const productCard = document.createElement('div');//creamos un div
        productCard.classList.add('product-card');//creamos la clase de div class='product-card'
           
        const productImg = document.createElement('img');//creamos una imagen
        productImg.setAttribute('src', product.image);//le asignamos una imagen
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
         
        const productInfoDiv = document.createElement('div');//div sin clase
    
        const productPrice = document.createElement('p');//creamos los parrafos
        productPrice.innerText='$' + product.price;//Le asignamos el texto al parrafo
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigures = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        //Le agregamos a productInfoFigures la productImgCart
        productInfoFigures.appendChild(productImgCart);
        
        //agregamos los parrafos a el segundo div
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        //agregamos el div y el figure al contenedor principal div
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigures);
        
        productCard.appendChild(productInfo);
        productCard.appendChild(productImg);
        
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);//Llamo a la funcion



