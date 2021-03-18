const checkTheme = () => {
  const styleMode = document.querySelector('#mode');
  let currTheme = localStorage.getItem('mode');
  if (currTheme === null) {
    localStorage.setItem('mode', 'light');
  }
  else if(currTheme === 'light') {
    styleMode.setAttribute('href', 'css/light_theme.css')
  }
  else if(currTheme === 'dark') {
    styleMode.setAttribute('href', 'css/dark_theme.css')
  }
};

checkTheme();



document.addEventListener('DOMContentLoaded', (event) => {

  // change theme
  const changeTheme = () => {
    const styleMode = document.querySelector('#mode');
    const changeThemeBtn = document.querySelector('.theme__btn');
    let currMode = localStorage.getItem('mode');
    changeThemeBtn.addEventListener('click', () => {
      if (currMode == 'light') {
        styleMode.setAttribute('href', 'css/dark_theme.css');
        currMode = 'dark';
        localStorage.setItem('mode', 'dark');
      } else {
        styleMode.setAttribute('href', 'css/light_theme.css');
        currMode = 'light';
        localStorage.setItem('mode', 'light');
      }
    });

  };

  // 1 tab top chanels sort
  const sortTopChanels = () => {
    const topChanelsPopSortBtn = document.querySelector('.top__chanels_pop_sort');
    const topChanelsAbcSortBtn = document.querySelector('.top__chanels_abc_sort');

    topChanelsPopSortBtn.addEventListener('click', () => {

    });

    topChanelsAbcSortBtn.addEventListener('click', () => {

    });
  };

  // 1 tab top chats sort
  const sortTopChats = () => {
    const topChatsPopSortBtn = document.querySelector('.top__chats_pop_sort');
    const topChatsAbcSortBtn = document.querySelector('.top__chats_abc_sort');

    topChatsPopSortBtn.addEventListener('click', () => {

    });

    topChatsAbcSortBtn.addEventListener('click', () => {

    });
  };

  //2 tab show/hide of categories
  const showHideCats = () => {
    const chanelsCategoryOpen = document.querySelector('.chanels__category_open');
    const chanelsCategory = document.querySelector('.chanels__category');
    const chanelsCategoryClose = document.querySelector('.chanels__category_close');
    // show cats
    chanelsCategoryOpen.addEventListener('click', () => {
      chanelsCategory.classList.add("chanels__category_opened");
      chanelsCategoryOpen.style.display = "none";
      chanelsCategoryClose.style.display = "initial";
    });

    // hide cats
    chanelsCategoryClose.addEventListener('click', () => {
      chanelsCategory.classList.remove("chanels__category_opened");
      chanelsCategoryOpen.style.display = "block";
      chanelsCategoryClose.style.display = "none";
    })
  };

  // 2 tab choice chanels category
  const choiceChanelsCategory = () => {

    const chanelCategoryBtn = document.querySelectorAll('.chan__cats_btn');

    // перебираем массив кнопок категорий каналов
    for (let i = 0; i < chanelCategoryBtn.length; i++) {
      chanelCategoryBtn[i].addEventListener("click", (event) => {
        // удаление из списка для фильтрации
        if (chanelCategoryBtn[i].classList.contains("active")) {
          chanelCategoryBtn[i].classList.remove("active");
          console.log(event.currentTarget.getAttribute('data-value'));
        } else {
          //добавление в список фильтрации
          chanelCategoryBtn[i].classList.add("active");
          console.log(event.currentTarget.getAttribute('data-value'));
        }
      });
    }

  };


  // 2 tab chanels sort
  const tabChanelsSort = () => {
    const chanelsPopSortBtn = document.querySelector('.chanels_pop_sort');
    const chanelsAbcSortBtn = document.querySelector('.chanels_abc_sort');

    chanelsPopSortBtn.addEventListener('click', () => {

    });

    chanelsAbcSortBtn.addEventListener('click', () => {

    });
  };





  changeTheme();
  sortTopChanels(); // 1 tab top chanels sort
  sortTopChats(); // 1 tab top chats sort
  showHideCats(); //2 tab show/hide of categories
  choiceChanelsCategory(); // 2 tab choice chanels category
  tabChanelsSort(); // 2 tab chanels sort
});