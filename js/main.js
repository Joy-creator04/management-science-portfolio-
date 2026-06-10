function setTheme(theme){

document.body.classList.remove(
'dark-theme',
'trade-theme'
);

if(theme==='dark'){
document.body.classList.add('dark-theme');
}

if(theme==='trade'){
document.body.classList.add('trade-theme');
}

localStorage.setItem('theme',theme);
}

window.addEventListener('load',function(){

const savedTheme=
localStorage.getItem('theme');

if(savedTheme){
setTheme(savedTheme);
}

});
