$(document).ready(function(){
    $('.Lang.navtext').click(function(){
        $('.langbg').toggle(0);
    });
});


//nav transparent
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navb');
    if (window.scrollY > 0) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });
