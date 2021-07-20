import {postData} from '../services/services';
import {openModalWindow, CloseModalWindow} from './modal';


function forms(OpenModalTimer) {
    const statusMessage = {
        loading: "img/form/spinner.svg",
        successful: "successful",
        error: "ERROR"
    };

    const forms = document.querySelectorAll('form');

    forms.forEach(item=>{
        sendForm(item);
    });

    function sendForm(form){
        form.addEventListener('submit', event =>{
            event.preventDefault();

            const spinner = document.createElement('img');
            spinner.src = statusMessage.loading;
            spinner.classList.add('spinner-form');

            form.insertAdjacentElement('afterend', spinner);

            const formData = new FormData(form);


            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/requests', json)
            .then((data)=>{
                console.log(data);
                showThnxModal(statusMessage.successful);
            }).catch(()=>{
                console.error("Error!");
                showThnxModal(statusMessage.error);
            }).finally(()=>{
                form.reset();
                spinner.remove();
            });
        });
    }

    function showThnxModal(message) {
        const modal = document.querySelector('.modal__dialog');

        modal.classList.add('hide');
        openModalWindow('.modal', OpenModalTimer);

        const thnxModal = document.createElement('div');
        thnxModal.classList.add('modal__dialog');
        thnxModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').insertAdjacentElement('afterbegin', thnxModal);

        setTimeout(()=>{
            thnxModal.remove();
            CloseModalWindow('.modal');
            modal.classList.add('show');
            modal.classList.remove('hide');
        }, 2000);
    }

    // axios('http://localhost:3000/requests')
    //     .then(data => console.log(data.data));
}

export default forms;