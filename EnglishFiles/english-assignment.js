import {inHTML} from './inHTML.js'


let innerContainerHTML = ''
inHTML.forEach((thing)=>{

  innerContainerHTML += `

  <button class="page-buttons" onclick="popupHTML('${thing.name}')">${thing.name}</button>


  `
  
})

window.popupHTML = function (name){
let popHTML = ``
popHTML += `
<h1 class="popup-title">${name}</h1>
`
inHTML.forEach((thin)=>{
  if (name === thin.name){
    thin.innerStuff.forEach((thing)=>{
    popHTML +=`
    <a href="${thing.link}">
    <button class="popup-buttons">${thing.name}</button>
    </a>
    <br>
    `
    })
  }
})
document.querySelector('.info-buttons').innerHTML = popHTML;
document.querySelector('.popup').classList.remove('popup-hide')
}
document.querySelector('.js-page-container').innerHTML = innerContainerHTML









