const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
let orbs = [];

function init() {
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
    });
    window.addEventListener('touchmove', (e) => {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
    });
    
    // Create 3 abstract orbs
    orbs = [
        { x: width/2, y: height/2, r: 250, color: 'rgba(255, 255, 255, 0.08)', vx: 0, vy: 0, speed: 0.03 },
        { x: width/2 + 100, y: height/2 - 100, r: 150, color: 'rgba(150, 150, 150, 0.05)', vx: 0, vy: 0, speed: 0.05 },
        { x: width/2 - 150, y: height/2 + 50, r: 200, color: 'rgba(200, 200, 200, 0.03)', vx: 0, vy: 0, speed: 0.02 }
    ];
    
    // Initial mouse pos in center
    mouse.x = width / 2;
    mouse.y = height / 2;
    mouse.targetX = width / 2;
    mouse.targetY = height / 2;
    
    loop();
}

function resize() {
    const hero = document.querySelector('.hero');
    width = hero.offsetWidth;
    height = hero.offsetHeight;
    canvas.width = width;
    canvas.height = height;
}

function loop() {
    ctx.clearRect(0, 0, width, height);
    
    // Ease mouse
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;
    
    orbs.forEach((orb, i) => {
        // Move towards mouse with slight parallax
        let dx = (mouse.x - orb.x) * orb.speed;
        let dy = (mouse.y - orb.y) * orb.speed;
        
        // Add some organic floating
        orb.x += dx + Math.sin(Date.now() * 0.001 + i) * 0.5;
        orb.y += dy + Math.cos(Date.now() * 0.001 + i) * 0.5;
        
        // Draw orb
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
    });
    
    requestAnimationFrame(loop);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('hero-canvas')) {
        init();
    }
});

// Intro Loader Logic
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('intro-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }, 2500); // Wait 2.5s before fading out
    }
});
