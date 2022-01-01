const toggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbar');

toggler.addEventListener('click', () => {
  const activeClass = 'navbar--active';
  navbarMenu.classList.toggle(activeClass);

  const isActive = navbarMenu.classList.contains(activeClass);
  const togglerIcon = toggler.getElementsByTagName('img')[0];

  togglerIcon.setAttribute(
    'src',
    `./assets/icons/menu${isActive ? '-close' : ''}.svg`
  );
});
