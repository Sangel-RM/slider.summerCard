const backgroundFigure = document.querySelector('.logo');
const arrowLeft = document.querySelector('.fa-arrow-left');
const arrowRigth = document.querySelector('.fa-arrow-right');
arrowLeft.addEventListener('click', cambiarBackground_Left);
arrowRigth.addEventListener('click', cambiarBackground_Rigth);
const imagenes = {
    1: 'url(./images/1.jpg)',
    2: 'url(./images/2.jpg)',
    3: 'url(./images/3.jpg)',
    4: 'url(./images/4.svg)'
}
let img;
let i = 1;
function cambiarBackground_Rigth (){
    console.log(imagenes[i])
    if(i < 4){
        i++;
        img = imagenes[i];
        backgroundFigure.style.backgroundImage = img;
    }else if(i == 4){
        i = 1;
        img = imagenes[i];
        backgroundFigure.style.backgroundImage = img;
    }
}
function cambiarBackground_Left (){
    console.log(imagenes[i])
    if(i > 1){
        i--;
        img = imagenes[i];
        backgroundFigure.style.backgroundImage = img;
    }else if(i == 1){
        i = 4;
        img = imagenes[i];
        backgroundFigure.style.backgroundImage = img;
    }
}