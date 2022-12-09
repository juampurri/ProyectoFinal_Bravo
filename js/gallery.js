const galeria = document.getElementById("galeria")
const listaGaleria = "/js/gallery.json";

fetch(listaGaleria)
    .then( respuesta => respuesta.json())
    .then( datos => {
        datos.forEach( foto => {
            galeria.innerHTML += `
            
            <div> <h3> ${foto.name} </h3> </div>
            <br>
            <div> <img src="${foto.image}"  class="img-fluid"> </div>
            `
        });
    })
    


