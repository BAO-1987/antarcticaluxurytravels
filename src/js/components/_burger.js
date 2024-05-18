const navigation = document.querySelector('.nav');
const page = document.querySelector('.page');
const header = document.querySelector('.header');

navigation ?.addEventListener('click', onBurgerBtnClick);

function onBurgerBtnClick(e) {
  if (!e.target.parentNode.matches('.burger') && !e.target.matches('.burger')) {
    return;
  }

  this ?.classList.remove('closed');
  page ?.classList.add('open');
  header ?.classList.add('active');

  if (this ?.matches('.opened')) {
    this ?.classList.add('closed');
    page ?.classList.remove('open');
    header ?.classList.remove('active');

    setTimeout(() => {
      this ?.classList.remove('opened');
    }, 100);
  }

  this ?.classList.add('opened');
}