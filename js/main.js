const checkTheme = () => {
  const styleMode = document.querySelector('#mode');
  let currTheme = localStorage.getItem('mode');

  const changeThemeBtn = document.querySelector('.change_planet');
  const planet = document.querySelector('.planet');
  const triangle = document.querySelector('.triangle');

  if (currTheme === null) {
    localStorage.setItem('mode', 'light');

  }
  else if(currTheme === 'light') {
    //включаем светлую тему
    styleMode.setAttribute('href', 'css/light_theme.css');

    changeThemeBtn.classList.remove("change_planet_dark");
    changeThemeBtn.classList.add("change_planet_light");

    planet.classList.remove("planet_dark");
    planet.classList.add("planet_light");
    changeThemeBtn.classList.remove("planet_dark");

    triangle.classList.remove("triangle_dark");
    triangle.classList.add("triangle_light");

  }
  else if(currTheme === 'dark') {
    styleMode.setAttribute('href', 'css/dark_theme.css');

    changeThemeBtn.classList.remove("change_planet_light");
    changeThemeBtn.classList.add("change_planet_dark");

    planet.classList.remove("planet_light");
    planet.classList.add("planet_dark");
    

    triangle.classList.remove("triangle_light");
    triangle.classList.add("triangle_dark");
    
  }
};
checkTheme();


document.addEventListener('DOMContentLoaded', (event) => {

  // change theme
  const changeTheme = () => {
    const styleMode = document.querySelector('#mode');
    const changeThemeBtn = document.querySelector('.change_planet');
    const planet = document.querySelector('.planet');
    const triangle = document.querySelector('.triangle');

    let currMode = localStorage.getItem('mode');
    changeThemeBtn.addEventListener('click', () => {
      if (currMode == 'light') {
        styleMode.setAttribute('href', 'css/dark_theme.css');
        currMode = 'dark';
        localStorage.setItem('mode', 'dark');

        changeThemeBtn.classList.remove("change_planet_light");
        changeThemeBtn.classList.add("change_planet_dark");

        planet.classList.remove("planet_light");
        planet.classList.add("planet_dark");
        

        triangle.classList.remove("triangle_light");
        triangle.classList.add("triangle_dark");


      } else {
        styleMode.setAttribute('href', 'css/light_theme.css');
        currMode = 'light';
        localStorage.setItem('mode', 'light');

        changeThemeBtn.classList.remove("change_planet_dark");
        changeThemeBtn.classList.add("change_planet_light");

        planet.classList.remove("planet_dark");
        planet.classList.add("planet_light");
        changeThemeBtn.classList.remove("planet_dark");

        triangle.classList.remove("triangle_dark");
        triangle.classList.add("triangle_light");


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

  //3 tab show/hide of categories
  const showHideCats2 = () => {
    const chatsCategoryOpen = document.querySelector('.chats__category_opened');
    const chatsCategory = document.querySelector('.chats__category');
    const chatsCategoryClose = document.querySelector('.chats__category_close');
    // show cats
    chatsCategoryOpen.addEventListener('click', () => {
      chatsCategory.classList.add("chats__category_opened");
      chatsCategoryOpen.style.display = "none";
      chatsCategoryClose.style.display = "initial";
    });

    // hide cats
    chatsCategoryClose.addEventListener('click', () => {
      chatsCategory.classList.remove("chats__category_opened");
      chatsCategoryOpen.style.display = "block";
      chatsCategoryClose.style.display = "none";
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

  // 3 tab choice chanels category
  const choiceChatsCategory = () => {

    const chatCategoryBtn = document.querySelectorAll('.chat__cats_btn');

    // перебираем массив кнопок категорий каналов
    for (let i = 0; i < chatCategoryBtn.length; i++) {
      chatCategoryBtn[i].addEventListener("click", (event) => {
        // удаление из списка для фильтрации
        if (chatCategoryBtn[i].classList.contains("active")) {
          chatCategoryBtn[i].classList.remove("active");
          console.log(event.currentTarget.getAttribute('data-value'));
        } else {
          //добавление в список фильтрации
          chatCategoryBtn[i].classList.add("active");
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

  // 3 tab chats sort
  const tabChatsSort = () => {
    const chatsPopSortBtn = document.querySelector('.chats_pop_sort');

    chatsPopSortBtn.addEventListener('click', () => {

    });
  };
  let isInputResultsOpen = false;

  // 1 tab 
  const inputResults = () => {
    const inputWrapper = document.querySelector('.input__wrapper');
    const inputResults = document.querySelector('.input__results');
    const input = document.querySelector('.input');

    input.addEventListener('click', () => {
      input.style.borderBottomLeftRadius = '0px';
      input.style.borderBottomRightRadius = '0px';
      input.style.borderBottom = '0px';
      if (window.innerWidth <= 425) {
        inputWrapper.style.width = "100%";
        inputWrapper.style.margin = "0";
      }
      inputResults.style.display = 'block';
      isInputResultsOpen = true;
      // setTimeout(closeInputResults, 1);
    });
  }

    // todo: закрытие
    const closeInputResults = () => {
      document.addEventListener('click', function(event) {
        const inputResults = document.querySelector('.input__results');
        const input = document.querySelector('.input');

        if (!event.target.classList.contains('input__results') 
            && !event.target.classList.contains('input') 
            && isInputResultsOpen
            && !event.target.classList.contains('results__sum')
            && !event.target.classList.contains('results__title')
            && !event.target.classList.contains('chanels__results')
            && !event.target.classList.contains('tg__card')
            && !event.target.classList.contains('card__header_wrapper')
            && !event.target.classList.contains('card__header')
            && !event.target.classList.contains('img__wrapper')
            && !event.target.classList.contains('card__img')
            && !event.target.classList.contains('card__info')
            && !event.target.classList.contains('card__title')
            && !event.target.classList.contains('card__followers')
            && !event.target.classList.contains('card__login')
            && !event.target.classList.contains('card__btn')
            // && !event.target.classList.contains('input')
            ) {
          console.log(event.target);
          inputResults.style.display='none';
          input.style.borderBottomLeftRadius = '30px';
          input.style.borderBottomRightRadius = '30px';
          input.style.borderBottom = '1px solid #9A9A9A';
          isInputResultsOpen = false;
        }

        
        // if (!event.target.classList.contains('input_results') && isInputResultsOpen != true ) {
        //   inputResults.style.display='none';
        //   input.style.borderBottomLeftRadius = '30px';
        //   input.style.borderBottomRightRadius = '30px';
        //   input.style.borderBottom = '1px';
        //   isInputResultsOpen = false;
        // }
      });
    }



  changeTheme();
  inputResults(); // show/hide input results
  closeInputResults();
  sortTopChanels(); // 1 tab top chanels sort
  sortTopChats(); // 1 tab top chats sort
  showHideCats(); //2 tab show/hide of chanels categories
  showHideCats2(); //3 tab show/hide of chats categories
  choiceChanelsCategory(); // 2 tab choice chanels category
  choiceChatsCategory(); // 3 tab choice chanels category
  tabChanelsSort(); // 2 tab chanels sort
  tabChatsSort(); // 3 tab chanels sort
});
