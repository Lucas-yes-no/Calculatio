let websiteList = [{
  name: 'Kitchen Calculator',
  pathName: 'Kitchen-Calculator.html'
}, {
  name: 'Point Counter',
  pathName: 'Point-Counter.html',
},

]
/*Just copy this

 {
  name: '',
  pathName: '',
},

*/
function DOM(){
  let containerHTML = ``
  websiteList.forEach((bracket)=>{
    containerHTML += `
    <div class="js-link-box">

    <a class="js-link js-inner-link-box" href="${bracket.pathName}">${bracket.name}</a>

    </div> <br>
    `
  })
  document.querySelector('.js-website-links-container').innerHTML = containerHTML
}
DOM()