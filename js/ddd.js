/*global $, document, THREE, animate, requestAnimationFrame */

var container, camera, scene, renderer;
var geo_high, geo_low;
var row_1 = 0,
    row_2 = 60,
    row_3 = 120;
var cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9;

function init() {
    'use strict';
    container = document.getElementById("frame");

    renderer = new THREE.WebGLRenderer();
    renderer.setSize($("#frame").width(), $("#frame").height());
    container.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, $("#frame").width() / $("#frame").height(), 0.1, 1000);
    scene = new THREE.Scene();

    scene.add(camera);
    camera.position.z = 400;
    camera.position.y = 100;
    camera.position.x = 250;
    camera.rotateY(0.5);

    geo_high = new THREE.CubeGeometry(50, 70, 50);
    geo_low = new THREE.CubeGeometry(50, 40, 50);
/*    var material = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        transparent: false,
        opacity: 0.5
    });*/
    var material = new THREE.MeshNormalMaterial();

    cube1 = new THREE.Mesh(geo_high, material);
    cube1.position.z = row_1;
    cube1.position.y = 0;
    cube1.position.x = 0;
    scene.add(cube1);

    cube2 = new THREE.Mesh(geo_low, material);
    cube1.position.z = row_1;
    cube2.position.y = 0;
    cube2.position.x = 60;
    scene.add(cube2);

    cube3 = new THREE.Mesh(geo_low, material);
    cube3.position.z = row_1;
    cube3.position.y = 0;
    cube3.position.x = 120;
    scene.add(cube3);

    cube4 = new THREE.Mesh(geo_low, material);
    cube4.position.z = row_2;
    cube4.position.y = 0;
    cube4.position.x = 40;
    scene.add(cube4);

    cube5 = new THREE.Mesh(geo_low, material);
    cube5.position.z = row_2;
    cube5.position.y = 0;
    cube5.position.x = 100;
    scene.add(cube5);

    cube6 = new THREE.Mesh(geo_high, material);
    cube6.position.z = row_2;
    cube6.position.y = 0;
    cube6.position.x = 160;
    scene.add(cube6);

    cube7 = new THREE.Mesh(geo_low, material);
    cube7.position.z = row_3;
    cube7.position.y = 0;
    cube7.position.x = 0;
    scene.add(cube7);

    cube8 = new THREE.Mesh(geo_high, material);
    cube8.position.z = row_3;
    cube8.position.y = 0;
    cube8.position.x = 60;
    scene.add(cube8);

    cube9 = new THREE.Mesh(geo_low, material);
    cube9.position.z = row_3;
    cube9.position.y = 0;
    cube9.position.x = 120;
    scene.add(cube9);

    requestAnimationFrame(animate);
}

function animate() {
    'use strict';
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}

init();
animate();
