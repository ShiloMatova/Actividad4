import _ from 'lodash';
import './estilo.scss';
import Banner from './images/banner.jpg';
import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Datos from './datos.csv';

if ('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration =>{
            console.log("SW registrado", registration);
        }) .catch(err=>{
            console.log("SW no registrado", err)
        });
    });
}

function componente(){
    const elemento = document.createElement('div');
    //Para usar esta linea de comando se necesita la biblioteca lodash
    
    const miImagen = new Image();
    miImagen.src = Banner;
    elemento.appendChild(miImagen);

    //Tarjeta 01
    const tarjeta = document.createElement('div');
    const titulo = document.createElement('div');

    elemento.append(tarjeta);
    elemento.append(titulo);
    const miImg1 = new Image();
    miImg1.src = Img1;
    tarjeta.appendChild(miImg1);

    titulo.innerHTML = _.join(['', Datos[0][0]],' ');
    titulo.classList.add('tarjeta');

    //Tarjeta 02
    const tarjeta2 = document.createElement('div');
    const titulo2 = document.createElement('div');

    elemento.append(tarjeta2);
    elemento.append(titulo2);
    const miImg2 = new Image();
    miImg2.src = Img2;
    tarjeta2.appendChild(miImg2);

    titulo2.innerHTML = _.join(['', Datos[0][1]],' ');
    titulo2.classList.add('tarjeta');

    //Tarjeta 03
    const tarjeta3 = document.createElement('div');
    const titulo3 = document.createElement('div');

    elemento.append(tarjeta3);
    elemento.append(titulo3);
    const miImg3 = new Image();
    miImg3.src = Img3;
    tarjeta3.appendChild(miImg3);

    titulo3.innerHTML = _.join(['', Datos[0][2]],' ');
    titulo3.classList.add('tarjeta');


    console.log(Datos);
    return elemento;
}

document.body.appendChild(componente());