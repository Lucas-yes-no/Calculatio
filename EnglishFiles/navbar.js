import { inHTML } from "./inHTML.js";
let customHTML = ``
inHTML.forEach((thing)=>{

  let liHTML = ``
  thing.innerStuff.forEach((thin)=>{
    liHTML += `
    <li class="li"><a href="${thin.link}">${thin.name}</a></li>
    <br>
    `
  })
  customHTML += `
  



      <div class="ul-title">
        ${thing.name}
      <ul class="ul">
        
        ${liHTML}
        
      </ul>
      </div>
  `



})
  document.querySelector('.navbar').innerHTML = `
       <a href="english-assignment.html">
      <img class="home" src="/Images/white-home.png">
    </a>
    <div class="select-container">
      ${customHTML}
    </div>
  `
/**
     <a href="english-assignment.html">
      <img class="home" src="/Images/white-home.png">
    </a>



    <div class="select-container">


      <div class="ul-title">
        Writing
      <ul class="ul">
        
        <li><a href="author-note.html">Boo</a></li>
        
      </ul>
      </div>


      <div class="ul-title">
        Writing
      <ul class="ul">
        
        <li><a href="author-note.html">Boo</a></li>
        
      </ul>
      </div>


    </div>
 */