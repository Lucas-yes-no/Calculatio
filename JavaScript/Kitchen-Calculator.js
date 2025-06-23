let calculate = {}
let clientName;
let clientCity;
let clientMoreInfo;
let contractorOption;
let ceilingIn;
let ceilingDoubleLayerOption;
let wallAmount;
let cornerAmount;
let islandAmount;
let wallIn = []
let islandIn = []
let cookOption;
let cookIn;
let hoodOption;
let fridgeIn;
let pantryIn;
let window1WidthIn;
let window2Option;
let window2WidthIn;
let dishwasherOption;
let underCounterWineFridgeOption;
let underCounterWineFridgeIn;
let longDistanceOption;
let hourDriveOption;
let downtown;
let condo;
let city;
let ceiling;
let numberOfWalls;
let wallHTML;
let numberOfCorners;
let numberOfIslands;
let islandHTML;



if (document.querySelector('.js-kitchen-calculator')){
  calculate = {}
document.querySelector('.js-enter-button').addEventListener('click', ()=>{
  calculate.clientName = document.querySelector('.js-client-name').value
  calculate.clientCity = document.querySelector('.js-client-city').value
  calculate.clientMoreInfo = document.querySelector('.js-client-more-info').value
  if (document.querySelector('.js-contractor-maybe').checked){
    calculate.contractorOption = 'Yes'
  } else {
    calculate.contractorOption = 'No'
  }
  if (document.querySelector('.js-ceiling-in').value){
  calculate.ceilingIn = eval(document.querySelector('.js-ceiling-in').value)
  } else{
  calculate.ceilingIn = 0
  }
  if (document.querySelector('.js-ceiling-double-layer-maybe').checked){
    calculate.ceilingDoubleLayerOption = 'Yes'
  } else{
    calculate.ceilingDoubleLayerOption = 'No'
  }
  calculate.wallAmount = document.querySelector('.js-wall-amount').value
  calculate.wallIn=[]
  if (calculate.wallAmount > 0){
  document.querySelectorAll('.js-wall-in').forEach((input, index)=>{

    calculate.wallIn.push({
    wallNumber: index+1,
    wallIn: eval(input.value),
    })
  })
} else{
  calculate.wallIn.push({
    wallNumber: 0,
    wallIn: 0,
  })
}
  calculate.cornerAmount = eval(document.querySelector('.js-corner-amount').value)
  calculate.islandAmount = eval(document.querySelector('.js-island-amount').value)
  calculate.islandIn = []
  document.querySelectorAll('.js-island-length').forEach((input, index)=>{
    calculate.islandIn.push({
      islandNumber: index+1,
      islandLengthIn: eval(input.value),

    })
  })
  document.querySelectorAll('.js-island-width').forEach((input, index)=>{
    calculate.islandIn.forEach((array, aindex)=>{
    if (aindex == index){
      array.islandWidthIn = eval(input.value)
    }})})
  document.querySelectorAll('.js-waterfall-maybe').forEach((select, index)=>{
    calculate.islandIn.forEach((array, aindex)=>{
      if (aindex == index){
        if (select.value == 'Yes'){
          array.waterfall = 'Yes'
          array.waterfallDimension = {}
        }
        else if (select.value == 'No'){
          array.waterfall = 'No'
        }
      }
    })
  })
  document.querySelectorAll('.js-waterfall-amount').forEach((select)=>{
    calculate.islandIn.forEach((array)=>{
      if (array.islandNumber == select.id){
        array.waterfallDimension.waterfallAmount = eval(select.value)
      }
    })
  })
  document.querySelectorAll('.js-sitting-area-in').forEach((input)=>{
    calculate.islandIn.forEach((array)=>{
      if (array.islandNumber == input.id){
        array.waterfallDimension.sittingAreaIn = eval(input.value)
      }
    })
  })
  calculate.cookOption = document.querySelector('.js-cook-option').value
  calculate.cookIn = eval(document.querySelector('.js-cook-in').value)
  calculate.hoodOption = document.querySelector('.js-hood-option').value
  if (document.querySelector('.js-fridge-in').value){
  calculate.fridgeIn = eval(document.querySelector('.js-fridge-in').value)
  } else {
    calculate.fridgeIn = 0
  }
  if (document.querySelector('.js-pantry-width-in').value){
  calculate.pantryWidthIn = eval(document.querySelector('.js-pantry-width-in').value)
  } else{
    calculate.pantryWidthIn = 0
  }
  if (document.querySelector('.js-pantry-height-in')){
    calculate.pantryHeightIn = eval(document.querySelector('.js-pantry-height-in').value)
  }else{
    calculate.pantryHeightIn
  }
  if (document.querySelector('.js-window-1-width-in').value){
  calculate.window1WidthIn = eval(document.querySelector('.js-window-1-width-in').value)
  } else{
    calculate.window1WidthIn = 0
  }
  if (document.querySelector('.js-window-2-maybe').checked){
    calculate.window2Option = 'Yes'
    calculate.window2WidthIn = eval(document.querySelector('.js-window-2-width-in').value)
  } else {
    calculate.window2Option = 'No'
    calculate.window2WidthIn = 0
  }
  if (document.querySelector('.js-dishwasher-maybe').checked){
    calculate.dishwasherOption = 'Yes'
  } else {
    calculate.dishwasherOption = 'No'
  }
  if (document.querySelector('.js-crown-molding-maybe').checked){
    calculate.moldingOption = 'Yes'
  } else{
    calculatio.moldingOption = 'No'
  }
  if (document.querySelector('.js-under-counter-wine-fridge-maybe').checked){
    calculate.underCounterWineFridgeOption = 'Yes'
    calculate.underCounterWineFridgeIn = eval(document.querySelector('.js-wine-fridge-width-in').value)
  } else {
    calculate.underCounterWineFridgeOption = 'No'
    calculate.underCounterWineFridgeIn = 0
  }
  if (document.querySelector('.js-long-distance-maybe').checked){
    calculate.longDistanceOption = 'Yes'
    calculate.hourDriveOption = eval(document.querySelector('.js-hour-drive-option').value)
  } else {
    calculate.longDistanceOption = 'No'
  }
  if (document.querySelector('.js-downtown-maybe').checked){
    calculate.downtown = 'Yes'
  } else {
    calculate.downtown = 'No'
  }
  if (document.querySelector('.js-condo-maybe').checked){
    calculate.condo = 'Yes'
  } else {
    calculate.condo = 'No'
  }
  localStorage.setItem("calculatee", JSON.stringify(calculate))
 setTimeout(()=>{
    window.location.href = "Kitchen-Calculator-result.html"
 },1 )

  })





















  //Event Listener for Windows

  document.querySelector('.js-window-2-maybe').addEventListener('click', ()=>{
    let window2HTML = `
    <p class="right">Window 2 Width (in): <input class="js-window-2-width-in"></p>
    `
    if (document.querySelector('.js-window-2-maybe').checked){
      document.querySelector('.js-window-2-container').innerHTML = window2HTML
    } else{
      document.querySelector('.js-window-2-container').innerHTML = ''
    }
  })

  //Event Listener for Wine Fridge
  document.querySelector('.js-under-counter-wine-fridge-maybe').addEventListener('click', (checkbox)=>{

    if (document.querySelector('.js-under-counter-wine-fridge-maybe').checked){

      document.querySelector('.js-under-counter-wine-fridge-container').innerHTML = `
      <p class="right">Under Counter Wine Fridge Width (in): <input class="js-wine-fridge-width-in"></p>
      `
    } else {
      document.querySelector('.js-under-counter-wine-fridge-container').innerHTML = ''
    }
  })


  //Event Listener for long distances
  document.querySelector('.js-long-distance-maybe').addEventListener('click', (checkbox)=>{

    if (document.querySelector('.js-long-distance-maybe').checked){

      document.querySelector('.js-hour-drive-container').innerHTML = `
      <select class="js-hour-drive-option">
        <option value="1">1</option>
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        <option value="2.5">2.5</option>
        <option value="3">3</option>
        <option value="3.5">3.5</option>
        <option value="4">4</option>
        </select>
      `
    }else{
      document.querySelector('.js-hour-drive-container').innerHTML = ''
    }

  })


document.querySelector('.js-amount-of-islands').addEventListener('change', (select)=>{
  numberOfIslands = document.querySelector('.js-amount-of-islands').value
  islandHTML=''
  for(let i = 0; i < numberOfIslands; i++){
    
    
    islandHTML+=`
     <p class="js-bold">Island ${i+1}</p>
    <p>Lenghth (in): <input class="js-island-length" id="${i+1}"></p>
    <p>Width (in): <input class="js-island-width" id="${i+1}"></p>
    <p>Waterfall: <select type="radio" class="js-waterfall-select js-waterfall-maybe" id="${i+1}">
      <option value="No">No</option>
      <option value="Yes">Yes</option>
      </select></p>
      <div class="right waterfall-container" id="waterfall-${i+1}"></div>
    
    `
  }
  document.querySelector('.js-islands-container').innerHTML = islandHTML   
  waterSelect()   
})


document.querySelector('.js-wall').addEventListener('change', (select)=>{
  numberOfWalls = document.querySelector('.js-wall').value
  if (numberOfWalls ==  1){
    wallHTML = `
    <p class="right">Wall 1 (in): <input class="js-wall-in"></p>
    `
  } else if (numberOfWalls == 2){
    wallHTML=`
    <p class="right">Wall 1 (in): <input class="js-wall-in"></p>
    <p class="right">Wall 2 (in): <input class="js-wall-in"></p>
    `
  } else if (numberOfWalls == 3){
    wallHTML=`
    <p class="right">Wall 1 (in): <input class="js-wall-in"></p>
    <p class="right">Wall 2 (in): <input class="js-wall-in"></p>
    <p class="right">Wall 3 (in): <input class="js-wall-in"></p>
    `
  } else if (numberOfWalls == 4){
    wallHTML=`
    <p class="right">Wall 1 (in): <input class="js-wall-in"></p>
    <p class="right">Wall 2 (in): <input class="js-wall-in"></p>
    <p class="right">Wall 3 (in): <input class="js-wall-in"></p>
    <p class="right">Wall 4 (in): <input class="js-wall-in"></p>
    `
  }
  document.querySelector('.js-wall-length-container').innerHTML = wallHTML
})

//Event Listener for WaterFall Select
function waterSelect(){
  document.querySelectorAll(`.js-waterfall-select`).forEach((select)=>{
    select.addEventListener('change', ()=>{
      if (select.value == "Yes")
      document.getElementById(`waterfall-${select.id}`).innerHTML+=`
      <p># of Waterfall <select class="js-waterfall-amount" id="${select.id}" type="radio">
        <option value="1">1</option>
        <option value="2">2</option>
        </select></p>
      <p>Sitting Area (in): <input class="js-sitting-area-in" id="${select.id}"></p>
      `
    })
  })
}
}