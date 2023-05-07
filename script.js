function spawnTriangle() {
    const triangles1 = document.querySelector('.triangles1');
    const triangles2 = document.querySelector('.triangles2');

    let height = '7';

    // create 19 triangles
    for (let i = 0; i < 12; i++) {
        const triangle1 = document.createElement('div');
        const triangle2 = document.createElement('div');
        
        let b = height / 1.75;
        
        //style triangle1
        triangle1.style.height = 0;
        triangle1.style.width = 0;
        triangle1.style.borderTop = '0px';
        triangle1.style.borderRight = b + 'vmax solid transparent';
        triangle1.style.borderBottom = height + 'vmax solid red';
        triangle1.style.borderLeft = b + 'vmax solid transparent';

        triangle1.style.transform = 'rotate(' + randNum(0, 360) + 'deg)';

        //style triangle2
        triangle2.style.height = 0;
        triangle2.style.width = 0;
        triangle2.style.borderTop = '0px';
        triangle2.style.borderRight = b + 'vmax solid transparent';
        triangle2.style.borderBottom = height + 'vmax solid red';
        triangle2.style.borderLeft = b + 'vmax solid transparent';

        triangle2.style.transform = 'rotate(' + randNum(0, 360) + 'deg)';
        
        triangles1.appendChild(triangle1);
        triangles2.appendChild(triangle2);
        height -= 0.5;

    }
}

function randNum(min, max) {
    return Math.random() * (max - min + 1) + min;
}

spawnTriangle();