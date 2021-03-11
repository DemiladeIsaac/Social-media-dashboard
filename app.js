const logo = document.querySelector('#logo');
const toggler = document.querySelector('input');
const header = document.querySelector('.header');
const navBar = document.querySelector('.nav-bar');
const totalFollowers = document.querySelector('#totalFollowers');
const mode = document.querySelector('#mode');
const cards = document.querySelectorAll('.header .card-dark');
const user = document.querySelectorAll('.user');
const followers = document.querySelectorAll('.followers');
const follow = document.querySelectorAll('.follow');
const overview = document.querySelector('.overview h1');
const overviewCards = document.querySelectorAll('.overview .card-dark');
const overviews = document.querySelectorAll('.overviews');
const stats = document.querySelectorAll('.stats');

toggler.addEventListener('click',function(){
    document.body.classList.toggle('light-mode');
    logo.classList.toggle('main-title');
    navBar.classList.toggle('light-nav');
    if(header.classList.contains('header')){
        header.classList.remove('header');
        header.classList.add('light-header');
    }else {
        header.classList.add('header');
        header.classList.remove('light-header');
    }
    totalFollowers.classList.toggle('gray-text');
    mode.classList.toggle('gray-text');
    for(let i = 0;i < cards.length;i++){
        cards[i].classList.toggle('card-light');
        cards[i].style.marginTop = '2em';
    }
    for(let i = 0;i < user.length;i++){
        user[i].classList.toggle('gray-text');
        user[i].style.marginLeft = '0.5em';
    }
    for(let i = 0;i < follow.length;i++){
        follow[i].classList.toggle('light-gray-text');
    }
    for(let i = 0;i < followers.length;i++){
        if(followers[i].classList.contains('followers')){
            followers[i].classList.remove('followers');
            followers[i].classList.add('dark-gray');
        }else{
            followers[i].classList.remove('dark-gray');
            followers[i].classList.add('followers');
        }    
    }
    if(overview.classList.contains('overviewTitle')){
        overview.classList.add('light-overview');
        overview.classList.remove('overviewTitle');
    }else{
        overview.classList.remove('light-overview');
        overview.classList.add('overviewTitle');
    }
    
    for(let i = 0;i < overviewCards.length;i++){
        overviewCards[i].classList.toggle('card-light');
    }
    for(let i = 0;i < overviews.length;i++){
        if(overviews[i].classList.contains('overviews')){
            overviews[i].classList.remove('overviews');
            overviews[i].classList.add('light-overviews');
        }else {
            overviews[i].classList.add('overviews');
            overviews[i].classList.remove('light-overviews');
        }   
    }
    for(let i = 0;i < stats.length;i++){
        stats[i].classList.toggle('gray-text');
    }
})