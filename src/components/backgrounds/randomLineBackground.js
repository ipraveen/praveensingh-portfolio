import './style.css';

export default function buildBackgroundPattern(selector) {
    let pause = false;
    const backgrounds = ['#574052', '#8DC6BF', '#FCBC65', '#FA7B50'];
    const largeNums = [30, 35, 40, 50];
    const smallNums = [3, 4, 5, 6];

    const container = document.querySelector(selector);
    const coordinates = {
        x: undefined,
        y: undefined,
    };

    const getRandomNo = (sample = 4) => Math.floor(Math.random() * sample);

    const getElementDetails = () => {
        const tall = getRandomNo(2);
        const type = tall ? 'tall' : 'wide';
        const height = tall ? largeNums[getRandomNo()] : smallNums[getRandomNo()];
        const width = tall ? smallNums[getRandomNo()] : largeNums[getRandomNo()];
        const color = backgrounds[getRandomNo()];
        return { type, height, width, color };
    };

    const addElements = (position) => {
        const ele = document.createElement('div');
        const { type, height, width, color } = getElementDetails();
        ele.classList.add('line', type);

        ele.style.left = `${position.x}px`;
        ele.style.top = `${position.y}px`;
        ele.style.height = `${height}px`;
        ele.style.width = `${width}px`;
        ele.style.backgroundColor = color;
        container.appendChild(ele);
        setTimeout(() => container.removeChild(ele), 10000);
    };

    const updateCoordinates = (x, y) => {
        if (coordinates.x === undefined || Math.abs(coordinates.x - x) > 30 || Math.abs(coordinates.y - y) > 30) {
            coordinates.x = x;
            coordinates.y = y;
            // console.log('coordinates => ', coordinates);
            addElements(coordinates);
        }
    };

    setInterval(() => {
        const { x, y, height, width } = container.getBoundingClientRect();
        const iX = getRandomNo(Math.abs(width));
        const iY = getRandomNo(Math.abs(height));

        addElements({ x: x + iX, y: y + iY });
    }, 50);

    // container.addEventListener('mousemove', (event) => {
    //     const { x, y } = event;
    //     // interval.clearInterval();
    //     window.requestAnimationFrame(() => updateCoordinates(x, y));
    // });
}
