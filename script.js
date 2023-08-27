/*
vamos  colocar input de arquivo é pegar arquivo de audio 
de boa 
*/

const inputFile = document.querySelector('#arquivoAudio');
const audioSelection = document.querySelector('.audioSelection')
const divContainer =  document.createElement('div')
const divAudio = document.createElement('div')
 
inputFile.addEventListener("change",()=>{

    let selectAudio = inputFile.files[0]
    if(selectAudio){
    const audioUrl = URL.createObjectURL(selectAudio)
      const p = document.createElement('p')

      const audio  = document.createElement('audio')
        audio.setAttribute('controls','audio')
        audioSelection.appendChild(divContainer)
        divAudio.setAttribute('class','divContainer')
        divContainer.appendChild(divAudio)
        divAudio.appendChild(p)
        divAudio.appendChild(audio)
       
        p.innerHTML = selectAudio.name
        audio.src = audioUrl
       
        
        
}

})

