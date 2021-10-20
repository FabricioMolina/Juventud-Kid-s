//*Nav Responsive!*
addEventListener('DOMContentLoaded', () =>{
    const btn = document.querySelector('.nav__btn-menu');
    if(btn){
        btn.addEventListener('click', () =>{
            const menu_items = document.querySelector('.nav__ul');
            menu_items.classList.toggle('nav__responsive');
        })
    }
    
})
//Aca termina xd*
var img = [];
    img[0] = '../img/ej1.jpg';
    img[1] = '../img/ej2.jpeg';
    img[2] = '../img/ej3.jpeg';
    img[3] = '../img/ej4.jpeg';
var subtitulos = [];
    subtitulos[0] = "Categoria 2011";
    subtitulos[1] = "Categoria 2008?";
    subtitulos[2] = "Categoria 2009?";
    subtitulos[3] = "Yago Valentin";
var i = 0;
    function cambiarImg(){
        document.carrusel.src = img[i];
        document.getElementById("subt").innerHTML = subtitulos[i]
        if(i<3){
            i++
        }else{
            i = 0;
        }
        
    }
     window.addEventListener("DOMContentLoaded", function(){
        setInterval(cambiarImg,2000);
 })