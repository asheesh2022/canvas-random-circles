var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
// c.fillStyle = 'red';
// c.fillRect(100, 100, 70, 60);
// c.fillStyle = 'green';

// c.fillRect(200, 150, 70, 90);
// c.fillRect(300, 135, 70, 80);

// console.log(canvas);

// //line ke liyehggdgfhdddjdjdjdjd
// c.beginPath();
// c.moveTo(50, 200);
// c.lineTo(200, 100);
// c.strokeStyle = 'blue';
// c.stroke();



// for diiferent clor of circlr 
var color = [
  'red',
  'blue',
  'green',
  'yellow',
  'pink',
  'gray',
  'black',
  'orange',
];
var tmp = 0;
// for (var i = 0; i < 30; i++) {
//   tmp++;
//   if (tmp == color.length) {
//     tmp = 0;
//   }
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;

//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = color[tmp];
//   c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
    this.x = x

    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius


    this.draw = function () {
        c.beginPath()
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = color[tmp];
        c.stroke();
    }

    this.update = function(){
        if (x + radius > innerWidth || x - radius < 0) {
            dx = -dx;
        }
        if (y + radius > innerHeight || y - radius < 0) {
            dy = -dy;
        }
    
        // console.log('dd');
        x += dx;
        y += dy;
        this.draw()
    }

}

var circleArray = []
for (var i = 0 ; i < 100 ; i++){
var x = Math.random() * ( innerWidth - radius *2 ) + radius;
var y = Math.random() * ( innerHeight - radius * 2) + radius;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30
circleArray.push(new Circle (x,y,dx,dy,radius))

}

console.log(circleArray)
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8;;
// var dy = (Math.random() - 0.5) * 8;;

// var r = 30
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);


    // if you want to diif color of each circle  so then ths for loop with 
    // so then paas clolor temp on stroke style
    // this.draw = function () {
    //     c.beginPath()
    //     c.arc(x, y, radius, 0, Math.PI * 2, false);
    //     c.strokeStyle = color[tmp];
    //     c.stroke();
    // }


for (var i = 0; i < circleArray.length; i++) {
    for (var i = 0; i < 100; i++) {
          tmp++;
          if (tmp == color.length) {
            tmp = 0;
          }


    circleArray[i].update()
        }
}
//  if you dont want the color
// for (var i = 0; i < circleArray.length; i++) {
    


//     circleArray[i].update()
//         }
// }

//    circle.update()

    // if (x + r > innerWidth || x - r < innerWidth) {
    //   dx = -dx;
    // }
    // if (x + r > innerWidth || x - r < 0) {
    //     dx = -dx;
    // }
    // if (y + r > innerHeight || y - r < 0) {
    //     dy = -dy;
    // }

    // console.log('dd');
    // x += dx; 
    // y += dy;

    // console.log(x);
}
animate();
