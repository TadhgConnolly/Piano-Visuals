import React, {useState} from 'react'
import Sketch from 'react-p5'

function Effect() {

    const [p5, setP5] = useState(null);
    const [canvas, setCanvas] = useState(null);
    
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var fillColor;
    var fade;

    var bubbles = []

    const setup = (p5, canvasParentRef) => {
        p5.noStroke();
        fade = 255

        setP5(p5);
        setCanvas(p5.createCanvas(width, height).parent(canvasParentRef));
        //rectWidth = 100 / 4;
        p5.background(0, 0, 0)
        fillColor = p5.color(200, 10, 25, fade)
    }

    const draw = p5 => {
        for (const bubble of bubbles) {            
            if (bubble.startFade === true) {
                p5.background(0, 0, 0)
                if (bubble.fade > 0) {
                    bubble.fade = bubble.fade - 20;
                } else if (bubble.fade <= 0) {
                    bubble.fade = 0;
                } 
            }
            p5.fill(p5.color(bubble.red, bubble.green, bubble.blue, bubble.fade))
            //p5.ellipse(bubble.x, bubble.y, bubble.radius)
            p5.translate(500, 300)
            p5.noStroke()
            for (let i = 0; i < 10; i ++) {
                p5.ellipse(0, 30, 20, 80);
                p5.rotate(Math.PI/5);
              }

        }
        if (bubbles.length > 4) {
            bubbles.shift()
        }

    }

    const onKeyPressed = (e) => {
        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255);
        let bubble = new Bubble(Math.round(Math.random() * (width - 100)), Math.round(Math.random() * (height - 100)), (Math.random() * 80 + 20), red, green, blue, e.keyCode, false)
        bubbles.push(bubble)
        console.log(bubbles)
        //console.log(e.keyCode)
        //p5.ellipse(bubble.x, bubble.y, bubble.radius)
        //p5.fill(bubble.fill)
        
    };

    const onKeyUp = (e) => { // p5.background(100,100,0);
        //console.log(e.keyCode)
        for (const bubble of bubbles) {
            if (bubble.keyCode === e.keyCode) {
                bubble.startFade = true;
            }
        }
        //bubbles.shift.startFade = true;
        //p5.background(Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100))
        //p5.ellipse(Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100))
        //fillColor = p5.color(Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255), fade)
        //p5.fill(fillColor)
        //p5.ellipse(Math.round(Math.random() * (width - 100)), Math.round(Math.random() * (height - 100)), 100)
        //console.log(e)
    };

    return <Sketch setup={setup} draw={draw} keyPressed={onKeyPressed} keyReleased={onKeyUp} />
}

class Bubble {

    constructor(x, y, radius, red, green, blue, keyCode, startFade) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        
        this.fade = 255;
        this.red = red;
        this.green = green;
        this.blue = blue;

        this.startFade = startFade;
        this.keyCode = keyCode;
    }
}


export default Effect
