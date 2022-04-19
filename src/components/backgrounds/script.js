document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = ['#574052', '#8DC6BF', '#FCBC65', '#FA7B50'];
    const largeNums = [30, 35, 40, 50];
    const smallNums = [3, 4, 5, 6];

    const container = document.querySelector('#container');
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

    const addElements = () => {
        const ele = document.createElement('div');
        const { type, height, width, color } = getElementDetails();
        ele.classList.add('line', type);

        ele.style.left = `${coordinates.x}px`;
        ele.style.top = `${coordinates.y}px`;
        ele.style.height = `${height}px`;
        ele.style.width = `${width}px`;
        ele.style.backgroundColor = color;
        container.appendChild(ele);
    };

    const updateCoordinates = (x, y) => {
        if (coordinates.x === undefined || Math.abs(coordinates.x - x) > 30 || Math.abs(coordinates.y - y) > 30) {
            coordinates.x = x;
            coordinates.y = y;
            console.log('coordinates => ', coordinates);
            addElements();
        }
    };

    container.addEventListener('mousemove', (event) => {
        const { x, y } = event;
        window, requestAnimationFrame(() => updateCoordinates(x, y));
    });
});
