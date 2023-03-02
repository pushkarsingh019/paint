const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');

const ctx = canvas.getContext('2d');

const canvasOffSetX = canvas.offsetLeft;
const canvasOffSetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffSetX;
canvas.height = window.innerHeight - canvasOffSetY;

let isPainting = false;
let lineWidth = 5;
let startX, startY;

// event listeners

toolbar.addEventListener('click', event => event.target.id === 'clear' ? ctx.clearRect(0,0, canvas.width, canvas.height) : "");

toolbar.addEventListener('change', event => event.target.id === 'stroke' ? ctx.strokeStyle = event.target.value : lineWidth = event.target.value);

canvas.addEventListener('mousedown', event => {
    isPainting = true;
    startX = event.clientX;
    startX = event.clientY;
});

canvas.addEventListener('mouseup', event => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffSetX, e.clientY);
    ctx.stroke();
};

canvas.addEventListener('mousemove', draw);


