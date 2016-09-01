var canvas = document.createElement( 'canvas' ),
    ctx = canvas.getContext( '2d' ),
    width = 400,
    height = 100,
    loaded = 0,
    loaderSpeed = 0.3,
    loaderWidth = 310,
    loaderHeight = 16,
    loaderX = width / 2 - loaderWidth / 2,
    loaderY = height / 2 - loaderHeight / 2,
    particles = [],
    particleLift = 180,
    particleXSpeedRange = 100,
    particleXAccelerationRange = 10,
    particleColorRange = 40,
    particleRate = 4,
    hueStart = 0,
    hueEnd = 120,
    hue = 0,
    gravity = 0.1;

document.body.appendChild( canvas );
canvas.width = width;
canvas.height = height;
ctx.globalCompositeOperation = 'lighter';


function rand( rMi, rMa ) {
    return (Math.random() * (rMa - rMi + 1)) + rMi;
}

function updateLoader() {
    if( loaded < 100 ) {
        loaded += loaderSpeed;
    }
    else {
        //是否开启循环
        //loaded = 0;
    }
}

function renderLoader() {
    ctx.fillStyle = '#000';
    ctx.fillRect( loaderX, loaderY, loaderWidth, loaderHeight );//初始化填充进度条为黑色

    hue = hueStart + ( loaded / 100 ) * ( hueEnd - hueStart );//计算当前位置对应颜色

    var newWidth = ( loaded / 100 ) * loaderWidth;
    ctx.fillStyle = 'hsla(' + hue + ', 100%, 40%, 1)';
    ctx.fillRect( loaderX, loaderY, newWidth, loaderHeight );

    ctx.fillStyle = '#222';
    ctx.fillRect( loaderX, loaderY, newWidth, loaderHeight / 2 );//将进度条上半层添加亮色以形成立体效果
}

function Particle() {
    this.x = loaderX + ( ( loaded / 100 ) * loaderWidth ) - rand( 0, 1 );
    this.y = height / 2 + rand( 0, loaderHeight ) - loaderHeight / 2;
    this.vx = ( rand( 0, particleXSpeedRange ) - particleXSpeedRange / 2 ) / 100;
    this.vy = ( rand( 0, particleLift ) - particleLift * 2 ) / 100;
    this.width = rand( 1, 4 ) / 2;
    this.height = rand( 1, 4 ) / 2;
    this.hue = hue;
}

Particle.prototype.update = function( i ) {
    this.vx += ( rand( 0, particleXAccelerationRange ) - particleXAccelerationRange / 2 ) / 100;
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;

    if( this.y > height ) { //销毁超出边界的particle
        particles.splice( i, 1 );
    }
};

Particle.prototype.render = function() {
    //可以修正为根据存在时间变色
    ctx.fillStyle = 'hsla(' + (this.hue + rand(0, particleColorRange) - particleColorRange / 2) + ', 100%, ' + rand( 50, 70 ) + '%, ' + rand( 20, 100 ) / 100 + ')';
    ctx.fillRect( this.x, this.y, this.width, this.height );
};

function createParticles() {
    var i = particleRate;
    while( i-- ) {
        this.particles.push( new Particle() );
    }
}

function updateParticles() {
    var i = particles.length;
    while( i-- ) {
        var p = particles[ i ];
        p.update( i );
    }
}

function renderParticles() {
    var i = particles.length;
    while( i-- ) {
        var p = particles[ i ];
        p.render();
    }
}

function clearCanvas() {
    ctx.clearRect( 0, 0, width, height );
}


function loop() {
    if (loaded < 100) {
        requestAnimationFrame(loop);
    }
    else{
        particleLoop();
    }

    clearCanvas();
    createParticles();
    updateLoader();
    updateParticles();
    renderLoader();
    renderParticles();
}

function particleLoop(){
    requestAnimationFrame(particleLoop);
    clearCanvas();
    updateLoader();
    updateParticles();
    renderLoader();
    renderParticles();
}

loop();