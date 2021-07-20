function calc() {

    const resultCalc = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', "female");
    }

    if (localStorage.getItem('height') >= 1) {
        height = localStorage.getItem('height');
        document.querySelector('#height').value = height;
    } else {
        height = 0;
        localStorage.setItem('height', 0);
    }

    if (localStorage.getItem('weight') >= 1) {
        weight = localStorage.getItem('weight');
        document.querySelector('#weight').value = weight;
    } else {
        weight = 0;
        localStorage.setItem('weight', 0);
    }

    if (localStorage.getItem('age') >= 1) {
        age = localStorage.getItem('age');
        document.querySelector('#age').value = age;
    } else {
        age = 0;
        localStorage.setItem('age', 0);
    }

    if (localStorage.getItem(`ratio`)) {
        ratio = localStorage.getItem(`ratio`);
    } else {
        ratio = 1.375;
        localStorage.setItem(`ratio`, 1.375);
    }

    function initialLocalSettings(selector, classActive) {
        const parent = document.querySelectorAll(selector);

        parent.forEach(item=>{
            item.classList.remove(classActive);
            if(item.getAttribute('id') == localStorage.getItem('sex')) {
                item.classList.add(classActive);
            }
            if (item.dataset.ratio == localStorage.getItem('ratio')) {
                item.classList.add(classActive);
            }
        });
    }
    initialLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    initialLocalSettings('#gender div', 'calculating__choose-item_active');


    function calcResult() {
        // console.log(sex, height, weight, age, ratio);
        if (!sex || !height || !weight || !age || !ratio) {
            resultCalc.innerHTML = '____';
            return;
        }

        if (sex == 'female') {
            resultCalc.innerHTML = Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        } 
        if (sex == 'male'){ 
            resultCalc.innerHTML = Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (4.3*  age)) * ratio);
        }
    }
    calcResult();

    function getGender() {
        const gender = document.querySelectorAll('#gender div');

        gender.forEach(item=>{
            item.addEventListener('click', (e)=> {
                sex = e.target.getAttribute('id');
                localStorage.setItem("sex", e.target.getAttribute('id'));

                gender.forEach(item=>{
                    item.classList.remove('calculating__choose-item_active');
                });
                e.target.classList.add('calculating__choose-item_active');
                calcResult();
            });
        });
    }
    getGender();

    function getFizActivity() {
        const fizActivity = document.querySelectorAll('.calculating__choose_big div');

        fizActivity.forEach(item => {
            item.addEventListener('click', e => {
                if (e.target.getAttribute('id') == "low") {
                    ratio = 1.2;
                    localStorage.setItem('ratio', 1.2);
                } else if (e.target.getAttribute('id') == "small") {
                    ratio = 1.375;
                    localStorage.setItem('ratio', 1.375);
                } else if (e.target.getAttribute('id') == "medium") {
                    ratio = 1.55;
                    localStorage.setItem('ratio', 1.55);
                } else if (e.target.getAttribute('id') == "high") {
                    ratio = 1.725;
                    localStorage.setItem('ratio', 1.725);

                }

                fizActivity.forEach(item=>{
                    item.classList.remove('calculating__choose-item_active');
                });
                e.target.classList.add('calculating__choose-item_active');
                calcResult();
            });          
        });
    }
    getFizActivity();

    function getInputValue(selector) {
        const inputItem = document.querySelector(selector);

        inputItem.addEventListener('input', ()=>{

            if (inputItem.value.match(/\D/g)) {
                inputItem.style.border = '1px solid red';
            } else {
                inputItem.style.border = 'none';
            }

            switch(inputItem.getAttribute('id')) {
                case 'height':
                    height = +inputItem.value;
                    localStorage.setItem("height", +inputItem.value);
                    break;
                case 'weight':
                    weight = +inputItem.value;
                    localStorage.setItem("weight", +inputItem.value);
                    break;
                case "age":
                    age = +inputItem.value;
                    localStorage.setItem("age", +inputItem.value);
                    break;
            }
            calcResult();
        });
    }   
    getInputValue('#age');
    getInputValue('#height');
    getInputValue('#weight');

}


export default calc;