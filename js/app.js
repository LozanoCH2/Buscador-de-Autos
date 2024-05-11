const resultado=document.querySelector('#resultado');
const marca=document.querySelector('#marca');
const year=document.querySelector('#year');
const puertas=document.querySelector('#puertas')
const precio_min=document.querySelector('#minimo');
const precio_max=document.querySelector('#maximo');
const transmi=document.querySelector('#transmision');
const color=document.querySelector('#color');


const max=new Date().getFullYear();
const min=max-10;

const datosBusqueda={
    marca:'',
    year:'',
    p_min:'',
    p_max:'',
    puertas:'',
    transmision:'',
    color:''

}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos );

   llenarSelect();

})

marca.addEventListener('change', e=>{
    datosBusqueda.marca=e.target.value;
    filtrarAuto();

})

year.addEventListener('change', e=>{
    datosBusqueda.year=parseInt(e.target.value);
    filtrarAuto();
})

puertas.addEventListener('change', e=>{
    datosBusqueda.puertas=parseInt(e.target.value);
    filtrarAuto();
})

precio_min.addEventListener('change', e=>{
    datosBusqueda.p_min=e.target.value;
    filtrarAuto();
})

precio_max.addEventListener('change', e=>{
    datosBusqueda.p_max=e.target.value;
    filtrarAuto();
})

transmi.addEventListener('change', e=>{
    datosBusqueda.transmision=e.target.value;
    filtrarAuto();
})

color.addEventListener('change', e=>{
    datosBusqueda.color=e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
})


function limpiarHTML(){
while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild)
}
}





function mostrarAutos(autos){
    limpiarHTML();
    autos.forEach(auto=>{
        const {marca, modelo, year, precio, puertas, color, transmision}=auto;
        const autoHTML=document.createElement('P');
        

        autoHTML.textContent=
        `${marca}-
        ${modelo}-
        ${year}-
        ${precio}-
        ${puertas}-
        ${color}-
        ${transmision}
        `;

        resultado.appendChild(autoHTML);
      
    })

}

function llenarSelect(){

    for(let i=max;i>min;i--){
        const opcion= document.createElement('option');
        opcion.value=i;
        opcion.textContent=i;
        year.appendChild(opcion)
    }
}

function filtrarAuto(){
    const resultado=autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarColor).filter(filtrarModelo).filter(filtrarPuertas).filter(filtrarTransmicion);
    
    if(resultado.length){
        mostrarAutos(resultado);
    }
    else{
        noResultado();
    }
   
}

function noResultado(){
    limpiarHTML();
    const noResult=document.createElement('div');
    noResult.classList.add('alerta','error');
    noResult.textContent='No se encuentran carros con esas caracteristicas';
    resultado.appendChild(noResult);

}

function filtrarMarca(auto){
    const {marca}=datosBusqueda;
    if(marca)
    {
        return auto.marca===marca;
    }
    return auto;
}

function filtrarYear(auto){
    const {year}=datosBusqueda;
    if(year)
    {
        return auto.year===year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const {p_min}=datosBusqueda;
    if(p_min)
    {
        return auto.precio>=p_min;
    }
    return auto;
}

function filtrarMaximo(auto){
    const {p_max}=datosBusqueda;
    if(p_max)
    {
        return auto.precio<=p_max;
    }
    return auto;
}

function filtrarModelo(auto){
    const {modelo}=datosBusqueda;
    if(modelo)
    {
        return auto.modelo===year;
    }
    return auto;
}

function filtrarTransmicion(auto){
    const {transmision}=datosBusqueda;
    if(transmision)
    {
        return auto.transmision===transmision;
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas}=datosBusqueda;
    if(puertas)
    {
        return auto.puertas===puertas;
    }
    return auto;
}

function filtrarColor(auto){
    const {color}=datosBusqueda;
    if(color)
    {
        return auto.color===color;
    }
    return auto;
}


