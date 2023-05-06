function spawnTriangle() {
    const triangles = document.querySelector('.triangles');

    let x = 20;
    let y = 20;
    let height = '100';

    // create 15 triangles
    for (let i = 0; i < 15; i++) {
        const triangle = document.createElement('div');

        let b = height / 1.75;
        
        //style triangles
        triangle.style.height = 0;
        triangle.style.width = 0;
        triangle.style.borderTop = '0px';
        triangle.style.borderRight = b + 'px solid transparent';
        triangle.style.borderBottom = height + 'px solid red';
        triangle.style.borderLeft = b + 'px solid transparent';
        
        triangles.appendChild(triangle);
        height -= 5;

    }
}

spawnTriangle();