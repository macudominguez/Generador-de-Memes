const $ = (id) => document.getElementById(id)

//////////     FUNCIONES     //////////

// MODO CLARO-MODO OSCURO //
const cambiarOscuro = () =>{
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
}

const cambiarClaro = () =>{
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
}

// DESCARGAR MEME //
const imagen_cargada = document.getElementById("image-meme")
const boton_img_cargada = document.getElementById("download-meme-button")
const urlInput = document.getElementById("url-img-input")

// PANEL IMAGEN // 
const cambiarImagen=(evento)=>{
    $('image-meme').style.backgroundImage = `url("${evento.target.value}")`
}

const mostrarPanelImg=()=>{
    $(`panel-img`).classList.remove('oculto')
    $(`panel-text`).classList.add('oculto')
}

const actualizarTextos=()=>{
    $('top-text').textContent=$('top-text-input').value
    $('bottom-text').textContent=$('bottom-text-input').value
<<<<<<< HEAD
}

/*const MezclaImagen=(evento)=>{  // NO FUNCIONA !!!!! //
    $('blend-mode-color').innerText = evento.target.value.toUpperCase()
    $('image-meme').style.backgroundColor = evento.target.value

}*/


const actFiltros=()=>{
    const brightness=$('brightness-slider').value
    const opacity=$('opacity-slider').value
    const contrast=$('contrast-slider').value
    const blur=$('blur-slider').value
    const grayscale=$('grayscale-slider').value
    const sepia=$('sepia-slider').value
    const hue=$('hue-slider').value
    const saturate=$('saturate-slider').value
    const invert=$('invert-slider').value
    $('image-meme').style.filter=`brightness(${brightness}) opacity(${opacity}) contrast(${contrast}%) blur(${blur}px) grayscale(${grayscale}%) sepia(${sepia}%) hue-rotate(${hue}deg) saturate(${saturate}%) invert(${invert})`
}

/*const reset = document.getElementById('default-filters-button')
let count=0;*/

/*const restablecer =()=>{
    $('brightness-slider').value=100
    $('opacity-slide').value=100
    actFiltros()
}*/


=======
}

const MezclaImagen=(evento)=>{  // NO FUNCIONA !!!!! //
    $('blend-mode-color').innerText = evento.target.value.toUpperCase()
    $('image-meme').style.backgroundColor = evento.target.value

}

const actFiltros=()=>{ // NO FUNCIONA !!!!! //
    const brightness=$('brightness-slider').value
    const opacity = $('opacity-slider').value
    const contrast = $('contrast-slider').value
    const blur = $('blur-slider').value
    const grayscale = $('grayscale-slider').value
    const hue = $('hue-slider').value
    const sepia = $('sepia-slider').value
    const saturate = $('saturate-slider').value
    const invert = $('invert-slider').value
    $('image-meme').style.filter=`brightness(${brightness})`
    $('image-meme').style.filter=`opacity(${opacity}%)`
    $('image-meme').style.filter=`contrast(${contrast}%)`
    $('image-meme').style.filter=`blur(${blur}px)`
    $('image-meme').style.filter=`grayscale(${grayscale}%)`
    $('image-meme').style.filter=`hue(${hue}deg)`
    $('image-meme').style.filter=`sepia(${sepia}%)`
    $('image-meme').style.filter=`saturate(${saturate}%)`
    $('image-meme').style.filter=`invert(${invert}%)`
}
>>>>>>> 5eeb673969298d65ca438f880134c0347a360a67

// PANEL TEXTO // 
const mostrarPanelTexto=()=>{
    $(`panel-text`).classList.remove('oculto')
    $(`panel-img`).classList.add('oculto')    
}

const sinTextoSup=()=>{
    if ($('no-top-text-checkbox').checked){
        $('top-text').classList.add('oculto')
    } 
    else {$('top-text').classList.remove('oculto')
    }
    if ($('no-bottom-text-checkbox').checked){
        $('bottom-text').classList.add('oculto')
    } 
    else {$('bottom-text').classList.remove('oculto')
    }
}

<<<<<<< HEAD
/*const fondTrans=()=>{  REVEER!


}*/

const actFuente=()=>{
    const fuente = $('text-font-select').value
    $('top-text').style.fontFamily= fuente
    $('bottom-text').style.fontFamily= fuente
}

=======
const actFuente=()=>{
    const fuente = $('text-font-select').value
    $('top-text').style.fontFamily= fuente
    $('bottom-text').style.fontFamily= fuente
}

>>>>>>> 5eeb673969298d65ca438f880134c0347a360a67
const actTamFuente=()=>{
    const tamfuente = $('text-size-input').value
    $('top-text').style.fontSize = `${tamfuente}px`
    $('bottom-text').style.fontSize = `${tamfuente}px`
<<<<<<< HEAD
}

const actColFuente=()=>{
    const colfuente = $('text-color-input').value
    $('top-text').style.color = colfuente
    $('bottom-text').style.color = colfuente
}

const actFonFuente = () => {
      const colfondo = $('text-background-color-input').value
      $('top-text').style.backgroundColor = colfondo
      $('bottom-text').style.backgroundColor = colfondo
}

const alignText = (align) => {  /*alineacion de texto*/
    $('top-text').style.textAlign = align
    $('bottom-text').style.textAlign = align
}

const contorno = (contornoTexto) =>{
    let grosor = '2px'
    if (contornoTexto=='ninguno'){
        $('top-text').style.textShadow = 'none'
        $('bottom-text').style.textShadow = 'none'
    }
    else if (contornoTexto=='claro'){
        $('top-text').style.textShadow =  `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`
        $('bottom-text').style.textShadow =  `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`
    }
    else if (contornoTexto=='oscuro'){
        $('top-text').style.textShadow =  `${grosor} ${grosor} #000000, -${grosor} ${grosor} #000000, ${grosor} -${grosor} #000000, -${grosor} -${grosor} #000000`
        $('bottom-text').style.textShadow =  `${grosor} ${grosor} #000000, -${grosor} ${grosor} #000000, ${grosor} -${grosor} #000000, -${grosor} -${grosor} #000000`

    }
} 
=======
}

const actColFuente=()=>{
    const colfuente = $('text-color-input').value
    $('top-text').style.color = colfuente
    $('bottom-text').style.color = colfuente
}

const actFonFuente = () => {
      const colfondo = $('text-background-color-input').value
      $('top-text').style.backgroundColor = colfondo
      $('bottom-text').style.backgroundColor = colfondo
}
>>>>>>> 5eeb673969298d65ca438f880134c0347a360a67

//////////          EVENTOS          //////////

<<<<<<< HEAD


//////////          EVENTOS          //////////

=======
>>>>>>> 5eeb673969298d65ca438f880134c0347a360a67
let iniciarTemas= ()=>{
    $('dark-theme-button').addEventListener('click', cambiarClaro)
    $('light-theme-button').addEventListener('click', cambiarOscuro)
}

urlInput.oninput = () => {
    imagen_cargada.style.backgroundImage = `url("${urlInput.value}")`
<<<<<<< HEAD
=======
    console.log("imagen_URL")
>>>>>>> 5eeb673969298d65ca438f880134c0347a360a67
}
        
boton_img_cargada.onclick = () => {
    domtoimage.toBlob(imagen_cargada).then((blob) => {
     window.saveAs(blob, "imagen_descargada.jpg");
});
};

let comenzarImagen=()=>{  //esta funcion sirve para que se agregue la imagen al colocar la url sin necesidad de apretar un boton//
    $('url-img-input').addEventListener('input',cambiarImagen)
  //  $('blend-mode-color-input').addEventListener('input',MezclaImagen)//
    $('brightness-slider').addEventListener('change', actFiltros)
    $('opacity-slider').addEventListener('change', actFiltros)
    $('contrast-slider').addEventListener('change', actFiltros)
    $('blur-slider').addEventListener('change', actFiltros)
    $('grayscale-slider').addEventListener('change', actFiltros)
<<<<<<< HEAD
    $('sepia-slider').addEventListener('change', actFiltros)
    $('hue-slider').addEventListener('change', actFiltros)
=======
    $('hue-slider').addEventListener('change', actFiltros)
    $('sepia-slider').addEventListener('change', actFiltros)
>>>>>>> 5eeb673969298d65ca438f880134c0347a360a67
    $('saturate-slider').addEventListener('change', actFiltros)
    $('invert-slider').addEventListener('change', actFiltros)
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
    $('text-font-select').addEventListener('change',actFuente)  
    $('no-top-text-checkbox').addEventListener('change',sinTextoSup)
    $('no-bottom-text-checkbox').addEventListener('change',sinTextoSup)
    $('text-size-input').addEventListener('input',actTamFuente)  
    $('text-color-input').addEventListener('input',actColFuente)  
    $('text-background-color-input').addEventListener('input', actFonFuente)
 }
<<<<<<< HEAD
 $('text-left-align-button').addEventListener('click', () => /*eventos alineacion de textos*/
 alignText('left')
)
$('text-center-align-button').addEventListener('click', () =>
 alignText('center')
)
$('text-right-align-button').addEventListener('click', () =>
 alignText('right')
)

$('no-outline-button').addEventListener('click', () =>
    contorno('ninguno')
    )
$('light-outline-button').addEventListener('click', () =>
    contorno('claro')
    )
$('dark-outline-button').addEventListener('click', () =>
    contorno('oscuro')
    )  
=======
>>>>>>> 5eeb673969298d65ca438f880134c0347a360a67
    
//////////     LLAMADOR DE FUNCIONES     //////////

const inicializar =()=>{
    iniciarTemas()
    comenzarImagen()
    cambiarPanel()
    inicializarTexto()
  //  MezclaImagen()   //reveer esto //
    sinTextoSup()
    actFiltros()
    actTamFuente()
    actColFuente()
    actFonFuente()
<<<<<<< HEAD
    restablecer()
}

window.onload=inicializar

    
    

=======
}

window.onload=inicializar
>>>>>>> 5eeb673969298d65ca438f880134c0347a360a67
