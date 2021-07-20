function tabs({tabsSelector, tabsContentSelector, tabsParentSelector, classActive}) {

    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', event =>{
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i)=>{
                if (item == target){
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item =>{
            item.classList.remove(classActive.slice(1));
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

        tabs[i].classList.add(classActive.slice(1));
    }
}

export default tabs;