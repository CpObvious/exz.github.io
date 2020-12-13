class Orden {
    #_src;
    #_alt;
    #_titleProduct;
    #_descr;
    #_parent;
    
    constructor(src, alt, titleProduct, descr, parent) {
        this.src = src;
        this.alt = alt;
        this.titleProduct = titleProduct;
        this.descr = descr;
        this.parent = document.querySelector(parent);
    }

    get src() {
        return this.#_src;
    }

    set src(srcVal) {
        this.#_src = srcVal;
    }

    get alt() {
        return this.#_alt;
    }

    set alt(altVal) {
        this.#_alt = altVal;
    }

    get titleProduct() {
        return this.#_titleProduct;
    }

    set titleProduct(titleVal) {
        this.#_titleProduct = titleVal;
    }

    get descr() {
        return this.#_descr;
    }

    set descr(descrVal) {
        this.#_descr = descrVal;
    }

    get parent() {
        return this.#_parent;
    }

    set parent(parentVal) {
        this.#_parent = parentVal;
    }

    createOrden() {
        let elem = document.createElement('div');
        elem.classList.add('orden__item');
        // elem.setAttribute('data-loyality', `${this.loyality['name']}`);
        elem.innerHTML = `
        <img class='orden__item-image' src='${this.src}' alt='${this.alt}'>
        <h2 class='orden__item-title'>${this.titleProduct}</h2>
        <p class='orden__item-descr'>${this.descr}</p>
         `;

        this.parent.append(elem);
    }
}


let Orden = [
    {
        src: 'img/volk.jpg',
        alt: 'loyality',
        title: 'Космические волки',
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptatem?',
        // loyality: {
        //     id: 'loyality',
        //     name: 'loyality'
        // }
    }
]

let orden;

for(let i = 0; i < ordens.length; i++) {
    Ordens = new Orden(ordens[i]['src'],
    Ordens[i]['alt'],
    Ordens[i]['title'],
    Ordens[i]['descr'],
    // Ordens[i]['loyality'],
        '.Ordens .container').createOrden();
}

// let listCategories = document.querySelector('.filters__loyality-list');
// let listCards = document.querySelectorAll('.orden__item');
// let buttonShow = document.querySelector('.filters-button');

// minPrice.addEventListener('change', function() {
//     if (+minPrice.value <= +minPrice.dataset.min) {
//         minPrice.classList.add('filters-error');
//     }
//     else {
//         minPrice.classList.remove('filters-error');
//     }
// });

// maxPrice.addEventListener('change', function () {
//     if (+maxPrice.value >= +maxPrice.dataset.max) {
//         maxPrice.classList.add('filters-error');
//     }
//     else {
//         maxPrice.classList.remove('filters-error');   
//     }
// });

// buttonShow.addEventListener('click', () => { filterCards(); });

// function showAllCards() {
//     for (let listcard of listCards) {
//         listcard.classList.remove('card__item_hidden');
//     }
// }

// function filterCards() {
    
//     showAllCards();

//     for (let listcard of listCards) {
//         if (listcard.dataset.category != listCategories.value && listCategories.value !== 'Vse' && minPrice.value == "" && maxPrice.value == "") {
//             listcard.classList.add('card__item_hidden');
//         }
//         else if (listcard.dataset.category != listCategories.value && listCategories.value !== 'Vse' && minPrice.value != "" && maxPrice.value != "" && !minPrice.classList.contains('filters-error') && !maxPrice.classList.contains('filters-error'))
//         {
//             if (+listcard.dataset.price >= +minPrice.value && +listcard.dataset.price <= +maxPrice.value) {
//                 listcard.classList.add('card__item_hidden');
//             }
//         }
//     }
// }

// listCategories.addEventListener('input', function () {
//     for (let listcard of listCards) {
//         if (listcard.dataset.category !== listCategories.value && listCategories.value !== 'Vse') {
//             listcard.classList.add('card__item_hidden');
//         }
//         else {
//             listcard.classList.remove('card__item_hidden');
//         }
//     }
// });