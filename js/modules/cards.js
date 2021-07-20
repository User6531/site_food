import {getResource} from '../services/services';

function cards() {
    

    class Menu {
        constructor(img, alt, title, descr, price, selector, ...classes) {
            this.img = img; 
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.selector = document.querySelector(selector);
            this.classes = classes;
        }

        render(){
            const element = document.createElement('div');

            if( this.classes.length == 0 ) {
                element.classList.add('menu__item');
            } else {
                this.classes.forEach( item => {
                    element.classList.add(item);
                });
            }
            
            element.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.selector.append(element);
        }
    }

    const transfer = +27;

    getResource('/db.json')
        .then (data=> {
            data.menu.forEach(({img, alt, title, descr, price}) => {
                price *= transfer;
                new Menu(img, alt, title, descr, price, '.menu .container').render();
            });
        });


    // axios.get('http://localhost:3000/menu')
    //     .then(data=> {
    //         data.data.forEach(({img, alt, title, descr, price}) => {
    //             price *= transfer;
    //             new Menu(img, alt, title, descr, price, '.menu .container').render();
    //         });
    //     });

}

export default cards;