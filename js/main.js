document.addEventListener('DOMContentLoaded', (event) => {
  
  const chanelsCategoryOpen = document.querySelector('.chanels__category_open');
  const chanelsCategory = document.querySelector('.chanels__category')
  
  chanelsCategoryOpen.addEventListener('click', () => {
    chanelsCategory.classList.add("chanels__category_opened");
    chanelsCategoryOpen.style.display = "none";
  });

  const chanelsCategoryClose = document.querySelector('.chanels__category_close');
  chanelsCategoryClose.addEventListener('click', () => {
    chanelsCategory.classList.remove("chanels__category_opened");
    chanelsCategoryOpen.style.display = "block";
  })


});