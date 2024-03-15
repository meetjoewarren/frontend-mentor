const accordian = document.querySelectorAll('.accordian');

for (let i = 0; i < accordian.length; i++){
  accordian[i].addEventListener('click', e => {
    const panel = e.target.nextElementSibling;
    panel.classList.toggle('hide');
    panel.classList.toggle('divider');
    e.target.classList.toggle('divider');
    e.target.classList.toggle('active');
    e.target.classList.toggle('open');
    e.target.classList.toggle('closed');
  })
}