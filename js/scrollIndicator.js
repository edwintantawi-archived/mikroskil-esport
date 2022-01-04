const indicatorLeft = document.getElementById('indicator-left');
const indicatorRight = document.getElementById('indicator-right');

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const windowScroll = document.body.scrollTop || scrollTop;
  const height = scrollHeight - clientHeight;
  const scrolled = (windowScroll / height) * 100;

  const indicatorLineHeight = window.innerHeight - 300;

  const total = (indicatorLineHeight * scrolled) / 100;

  indicatorLeft.style.top = 150 + total + 'px';
  indicatorRight.style.bottom = 150 + total + 'px';
});
