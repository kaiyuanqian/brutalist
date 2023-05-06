function spawnTriangle() {
    const triangles = document.querySelector('.triangles');

    let x = 20;
    let y = 20;
    // create 15 triangles
    for (let i = 0; i < 15; i++) {
        const triangle = document.createElement('div');
        triangle.style.height = 0;
        triangle.style.width = 0;
        triangle.style.borderTop = '0px';
        triangle.style.borderRight = '5px solid transparent';
        triangle.style.borderBottom = '10px solid red';
        triangle.style.borderLeft = '5px solid transparent';
        triangles.appendChild(triangle);
    }
}

spawnTriangle();