document.addEventListener('DOMContentLoaded', (event) => {
  
  // 1 tab top chanels sort
  const sortTopChanels = () =>{
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
    
    // show cats
    chanelsCategoryOpen.addEventListener('click', () => {
      chanelsCategory.classList.add("chanels__category_opened");
      chanelsCategoryOpen.style.display = "none";
    });
  
    // hide cats
    const chanelsCategoryClose = document.querySelector('.chanels__category_close');
    chanelsCategoryClose.addEventListener('click', () => {
      chanelsCategory.classList.remove("chanels__category_opened");
      chanelsCategoryOpen.style.display = "block";
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








  

  sortTopChanels();// 1 tab top chanels sort
  sortTopChats();// 1 tab top chats sort
  showHideCats();//2 tab show/hide of categories
  choiceChanelsCategory();// 2 tab choice chanels category
  tabChanelsSort();// 2 tab chanels sort
});