console.log('Hammam');

let cv = document.querySelector('canvas'),
    c  = cv.getContext('2d');


    cv.width = window.innerWidth - 5;
    cv.height = window.innerHeight - 7.1;


    window.addEventListener('resize' , function() {
    cv.width = window.innerWidth - 5;
    cv.height = window.innerHeight - 7.1;
    });

    const mouse = {x: innerWidth/2 , y: innerHeight/2};


    window.addEventListener('mousemove' , function(e) {
        mouse.x = e.x;
        mouse.y = e.y;
    })

    function randomInRange(min , max) {
        return Math.floor(Math.random() *  (max - min + 1) + min);
    }


    function Particles(x , y , r , color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.radian = Math.random() * Math.PI * 2;
        this.velocity = .05;
        this.distance = randomInRange(50 , 120);
        this.lastMouse = {x: x , y: y};

        this.update = () => {
            const lastPoint = {x: this.x , y: this.y};
            this.radian += this.velocity;

            this.lastMouse.x += (mouse.x - this.lastMouse.x) * .05;
            this.lastMouse.y += (mouse.y - this.lastMouse.y) * .05;
            this.x = this.lastMouse.x + Math.cos(this.radian) * this.distance;
            this.y = this.lastMouse.y +  Math.sin(this.radian) * this.distance;
            this.draw(lastPoint);
        };



        this.draw = lastPoint => {
            c.beginPath();
            c.strokeStyle = this.color;
            c.moveTo(lastPoint.x , lastPoint.y);
            c.lineTo(this.x , this.y);
            c.stroke();
            c.closePath();
        };

    };

let particles,
        colorArray = [
            '#D74177',
            '#A890FE',
            '#D8B5FF',
            '#6FD6FF',
            '#CD295A',
            '#1BFFFF',
            '#15678D',
            '#130CB7',
            "#00B7C5",
            "#CE9FF0",
            "#FFF687",
            "#623AA2",
            "#28C76F",
            "#52ESE7",
            "#622774",
        ];
    function init () {
        particles = [];
        for (let i = 0; i < 200; i++) {
            let x = innerWidth/2,
                y = innerHeight/2,
                r = Math.random() * 5,
                color = colorArray[Math.floor(Math.random() * colorArray.length)];
                particles.push(new Particles(x , y , r , color));
        }
    }


    function animate () {
        requestAnimationFrame(animate);
        c.fillStyle = 'rgba(255 , 255 , 255 , .05)';
        c.fillRect(0 , 0 , innerWidth , innerHeight);
        particles.forEach(particle => {
            particle.update();
        })
    }







    init();
    animate();