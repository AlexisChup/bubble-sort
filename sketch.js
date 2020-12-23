let height = 400
let lineWidth = 20

let values = []
let valuesColor = []

let i = 0
let j = 0

let slider;
let button;

function startSorting () {
  loop()
}

function initVar() {
  i = 0
  j = 0

  values = []
  valuesColor = []
}

function createLines() {
  for (let index = 0; index < (width / lineWidth); index++) {
    values[index] = random(height)
    r = random(255)
    g = random(255)
    b = random(255)
    valuesColor[index] = [r, g, b]
  }
}
 
function setup() {
  frameRate(20)
  createCanvas(windowWidth, height);
  strokeCap(SQUARE);
  
  createLines()

  // create slider
  slider = createSlider(10, 50, lineWidth, 1)
  slider.position(10, 10)
  slider.input(changeLineWidth)

  // create button
  button = createButton("Start sorting")
  button.position(180, 10)
  button.mousePressed(startSorting)

  noLoop()
}

function changeLineWidth() {
  noLoop()
  lineWidth = slider.value()
  console.log(lineWidth)
  initVar()
  createLines()
  redraw()
}

function draw() {
  background(0)
  lineWidth = slider.value()

  if(i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j]
      let b = values[j + 1]

      if(a > b) {
        swap(values, j , j + 1)
        swap(valuesColor, j , j + 1)
      }
    }
  } else {
    console.log("finished")
    noLoop()
  }

  i++;

  for (let i = 0; i < values.length; i++) {
    r = valuesColor[i]
    g = valuesColor[i]
    b = valuesColor[i]
    stroke(r, g, b)
    strokeWeight(lineWidth)

    line(i*lineWidth, height, i*lineWidth, height - values[i])
    
  }
}

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
