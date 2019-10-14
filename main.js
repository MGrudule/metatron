let Pattern = {
  coordinates: [
    "19,5", //0 top
    "33,13", //1 topRight
    "33,29", //2 bottomRight
    "19,37", //3 bottom
    "5,29", //4 bottomLeft
    "5,13", //5 topLeft
    //inner
    "19,13", //6 innerTop
    '26,17', //7 innerTopRight
    '26,25', //8 innerBottomRight
    "19,29", //9 innerBottom
    '12,25', //10 innerBottomLeft
    '12,17', //11 innerTopLeft
    //center
    "19, 21" //12 center
  ],

  plot: function(points) {
    let shape = [];
    for (const point of points) {
      shape.push(Pattern.coordinates[point])
    }
    return shape.join('L')
  },
  draw: function(plot, closed) {
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let closure = closed ? "z" : '';
    path.setAttribute("d", "M" + plot + closure);
    path.classList.add('path-hex-new');

    return path;
  }
};

window.addEventListener("DOMContentLoaded", function(event) {

});

function addShape() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([0, 1, 2, 3, 4, 5]), true);
  svg.appendChild(path);
}

function addShape2() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([1, 3, 5]), true);
  svg.appendChild(path);
}

function addShape3() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([4, 0, 2]), true);
  svg.appendChild(path);
}

function addShape4() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([3, 0]), true);
  svg.appendChild(path);
}

function addShape5() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([4, 1]), true);
  svg.appendChild(path);
}

function addShape6() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([5, 2]), true);
  svg.appendChild(path);
}

function addShape7() {
  console.log('hmms')
  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([6, 7, 8, 9, 10, 11]), true);
  svg.appendChild(path);
}

function addShape8() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([7, 5, 7, 3]), true);
  svg.appendChild(path);
}

function addShape9() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([8, 6, 10]), true);
  svg.appendChild(path);
}

function addShape10() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([9, 11, 7]), true);
  svg.appendChild(path);
}

function addShape11() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([10, 0, 2]), false);
  svg.appendChild(path);
}

function addShape12() {

  let svg = document.getElementById("svg")
  let path = Pattern.draw(Pattern.plot([11, 3, 11, 1]), false);
  svg.appendChild(path);
}

function addShape13() {

  let svg = document.getElementById("svg")
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("r", 17)
  circle.setAttribute("cx", 19)
  circle.setAttribute("cy", 21);
  circle.classList.add('path-hex-circle');
  svg.appendChild(circle);
  circle2.setAttribute("r", 19)
  circle2.setAttribute("cx", 19)
  circle2.setAttribute("cy", 21);
  circle2.classList.add('path-hex-circle');



  setTimeout(function() {
    svg.appendChild(circle2);
  }, 1000);

}