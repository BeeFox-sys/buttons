var maxLum = 90
var minLum = 60
var maxSat = 100
var minSat = 90

buttons = 0
count = 0

function randomizeButtons(){
    var sheet = document.styleSheets[0]
    var container = document.getElementById("container")
    let newButtons = randomIntFromInterval(100,300)
    buttons += newButtons

    for(var i = buttons-newButtons+1; i <= buttons; i++){
        let button = document.createElement("input")
        button.type = 'button'
        button.className = 'button'
        button.onclick = (self)=>{self.target.classList.toggle('clicked'); countFunc()}
        container.appendChild(button)
        sheet.insertRule(`.button:nth-child(${i}){width: 100%; height: 100%; border: none; box-shadow: 2px 2px inset rgba(0, 0, 0, 0.185); ${randomButton()} }`, 0)
    }

    var loadMoreButton = document.getElementById("loadMore")
    loadMoreButton.style.backgroundColor = loadColour()
}

function countFunc(){
    count ++
    countLabel = document.getElementById("count")
    countLabel.innerText = count
}

function randomButton(){
    let width = randomSize()
    let height = randomSize()
    let radius = randomIntFromInterval(0,25)
    let hue = randomIntFromInterval(0,360);
    let sat = randomIntFromInterval(minSat, maxSat);
    let lum = randomIntFromInterval(minLum, maxLum);

    return(`grid-row-end: span ${height}; grid-column-end: span ${width}; border-radius: ${radius}px; background-color: hsl(${hue}, ${sat}%, ${lum}%);`)
}

function loadColour(){
    let hue = randomIntFromInterval(0,360);
    let sat = randomIntFromInterval(minSat, maxSat);
    let lum = randomIntFromInterval(minLum, maxLum);
    return `hsl(${hue}, ${sat}%, ${lum}%)`
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function randomSize(){
    let sizes = [1,1,1,1,1,1,2,2,2,3]
    return sizes[Math.floor(Math.random() * sizes.length)];
}