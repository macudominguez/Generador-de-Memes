const $ = (id) => document.getElementById(id)
//funciones//
const cambiarOscuro = () =>{
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
}
const cambiarClaro = () =>{
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
}
const cambiarImagen=(evento)=>{
    $('image-meme').style.backgroundImage = `url("${evento.target.value}")`

}
const mostrarPanelImg=()=>{
    $(`panel-img`).classList.remove('oculto')
    $(`panel-text`).classList.add('oculto')
}
const mostrarPanelTexto=()=>{
    $(`panel-text`).classList.remove('oculto')
    $(`panel-img`).classList.add('oculto')    
}

const actualizarTextos=()=>{
    $('top-text').textContent=$('top-text-input').value
    $('bottom-text').textContent=$('bottom-text-input').value
    }


const actualizarFuente=()=>{/* cambio de fuentes*/
    const fuente = $('text-font-select').value

    $('top-text').style.fontFamily= fuente
    $('bottom-text').style.fontFamily= fuente

}


const alignText = (align) => {  /*alineacion de texto*/
    $('top-text').style.textAlign = align
    $('bottom-text').style.textAlign = align
}

/*const contorno = (contornoTexto) =>{
    $('top-text').style.outlineColor = contornoTexto
    $('bottom-text').style.outlineColor = contornoTexto
}    REVISAR!!!!!!!!!!*/ 


const MezclaImagen=(evento)=>{ //AGREGUE ESTA FUNCION PARA LA MEZCLA DE IMAGEN, REVISAR) lineas 38 hasta 41
    $('blend-mode-color').innerText = evento.target.value.toUpperCase()
    $('image-meme').style.backgroundColor = evento.target.value

}

const sinTextoSup=()=>{
    if ($('no-top-text-checkbox').checked){
        $('top-text').classList.add('oculto')
    } 
    
    else {

     $('top-text').classList.remove('oculto')
    }
    if ($('no-bottom-text-checkbox').checked){
        $('bottom-text').classList.add('oculto')
    } 
    
    else {

     $('bottom-text').classList.remove('oculto')
    }

}

/*const fondoTrans=()=>{
    if($('text-no-background-checkbox').checked){
        $('panel-text').classList.remove('oculto')

    }
} REVISAR!!!!!*/

const actFiltros=()=>{
    const brightness=$('brightness-slider').value
    $('image-meme').style.filter=`brightness(${brightness})`
    /*const contrast=$('contrast-slider').value
    $('image-meme').style.filter=`contrast(${contrast})` - INTENTAMOS AGREGAR TODO DENTRO DE UNA FUNCION PERO SE PISABAN LOS VALORES*/ 
}

const actOpacity=()=>{
    const opacity=$('opacity-slider').value
    $('image-meme').style.filter=`opacity(${opacity})`


}

const actContrast=()=>{
    const contrast=$('contrast-slider').value
    $('image-meme').style.filter=`contrast(${contrast}%)`

}

const actBlur=()=>{
    const blur=$('blur-slider').value
    $('image-meme').style.filter=`blur(${blur}px)`

}



const colorFondo = document.getElementById('text-color-input')/*REVISAR*/ 
const imagen_cargada = document.getElementById("image-meme")
const boton_img_cargada = document.getElementById("download-meme-button")
const urlInput = document.getElementById("url-img-input")


//eventos//
let iniciarTemas= ()=>{
    $('dark-theme-button').addEventListener('click', cambiarClaro)
    $('light-theme-button').addEventListener('click', cambiarOscuro)
}
let comenzarImagen=()=>{  //esta funcion sirve para que se agregue la imagen al colocar la url sin necesidad de apretar un boton//
    $('url-img-input').addEventListener('input',cambiarImagen)
    $('blend-mode-color-input').addEventListener('input',MezclaImagen)
    $('brightness-slider').addEventListener('change', actFiltros)
    $('opacity-slider').addEventListener('change', actOpacity)
    $('contrast-slider').addEventListener('change', actContrast)
    $('blur-slider').addEventListener('change', actBlur)
    /*$('text-no-background-checkbox').addEventListener('change',fondoTrans) REVISAR!!!!!!*/
    
}
let cambiarPanel=()=>{
    $('panel-img-button').addEventListener('click', () => {
        mostrarPanelImg()
      })
      $('text-panel-button').addEventListener('click', () => {
        mostrarPanelTexto()
      })
    }
    const inicializarTexto=()=>{
        $('top-text-input').addEventListener('input',actualizarTextos)
        $('bottom-text-input').addEventListener('input',actualizarTextos)
        $('text-font-select').addEventListener('change',actualizarFuente)  
        $('no-top-text-checkbox').addEventListener('change',sinTextoSup)
        $('no-bottom-text-checkbox').addEventListener('change',sinTextoSup)
       

    }

    $('text-left-align-button').addEventListener('click', () => /*eventos alineacion de textos*/
        alignText('left')
      )
    $('text-center-align-button').addEventListener('click', () =>
        alignText('center')
      )
    $('text-right-align-button').addEventListener('click', () =>
        alignText('right')
    )
    /* REVISAR
    $('no-outline-button').addEventListener('click', () =>
    contorno('none')
    )
    $('light-outline-button').addEventListener('click', () =>
    contorno('white')
    )
    $('dark-outline-button').addEventListener('click', () =>
    contorno('black')
    )*/

    
urlInput.oninput = () => {
    imagen_cargada.style.backgroundImage = `url("${urlInput.value}")`
    console.log("imagen_URL")
    }
        
boton_img_cargada.onclick = () => {
    domtoimage.toBlob(imagen_cargada).then((blob) => {
     window.saveAs(blob, "imagen_descargada.jpg");
        });
    };

/*colorFondo.addEventListener('input',e =>{
    const background = document.getElementById('canvas-meme')
    background.style.background =e.target.value
        
    }) REVISARR!"""""*/ 



//llamador de funciones//
const inicializar =()=>{
    iniciarTemas()
    comenzarImagen()
    cambiarPanel()
    inicializarTexto()
    MezclaImagen()   //reveer esto //
    sinTextoSup()
    actFiltros()
    actOpacity()
    actContrast()
    actBlur()

   /* fondoTrans() REVISAR*/ 
}


window.onload=inicializar
// modo claro/modo oscuro//



    
    

