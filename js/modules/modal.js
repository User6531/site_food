function openModalWindow(modalSelector, OpenModalTimer, lockPaddingValue) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.querySelector('body').style.paddingRight = lockPaddingValue + 'px';
    if (OpenModalTimer) {
        clearTimeout(OpenModalTimer);
    }
}

function CloseModalWindow(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = 'visible';
    document.querySelector('body').style.paddingRight = '';

}

function modal(triggerSelector, modalSelector, OpenModalTimer) {
    
    const modalBtns = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          lockPaddingValue = window.innerWidth - document.documentElement.clientWidth;

        modalBtns.forEach((btn)=> {
            btn.addEventListener('click', () => openModalWindow(modalSelector, OpenModalTimer, lockPaddingValue));
        });

        function ModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModalWindow(modalSelector, OpenModalTimer, lockPaddingValue);
                window.removeEventListener('scroll', ModalByScroll);
            }
        }

        window.addEventListener('scroll', ModalByScroll);
  
        document.addEventListener('keydown', (event)=>{
            if (event.code == 'Escape' && getComputedStyle(modal).display == 'block') {
            CloseModalWindow(modalSelector);
            }
        });

        modal.addEventListener('click', (event)=>{
            if (event.target == modal || event.target.getAttribute('data-close') == '') {
            CloseModalWindow(modalSelector);
            }
        });
}

export default modal;
export {openModalWindow, CloseModalWindow};