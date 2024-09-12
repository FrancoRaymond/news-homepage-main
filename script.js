const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const nav = document.querySelector('.nav')
const ulContainer = document.querySelector('.ulContainer')

openMenu.addEventListener('click', function(){
    document.body.style.overflow = 'hidden'
    ulContainer.classList.toggle('active')
   
})

closeMenu.addEventListener('click', function(){
    document.body.style.overflow = 'auto'
    ulContainer.classList.toggle('active')
});

