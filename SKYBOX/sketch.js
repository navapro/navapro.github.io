// Line art demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scene;
let camera;
let renderer;
let control;
let textureFt,textureBk,textureRt,textureLf,textureUp,textureDn;
let skyBoxGeo;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let cameraX = -900;
let cameraY = -200;
let cameraZ = -900;
let crossHair;

function preload(){
crossHair = loadImage('assets/Crosshair.png')
}

function init(){
scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(55, windowWidth/windowHeight,45, 300000);
camera.position.set(cameraX,cameraY,cameraZ);


renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(windowWidth,windowHeight);
document.body.appendChild(renderer.domElement);


control = new THREE.OrbitControls(camera);
control.addEventListener('change',renderer);

let materialArray = [];
let texture_ft = new THREE.TextureLoader().load( 'assets/met_ft.jpg');
let texture_bk = new THREE.TextureLoader().load( 'assets/met_bk.jpg');
let texture_up = new THREE.TextureLoader().load( 'assets/met_up.jpg');
let texture_dn = new THREE.TextureLoader().load( 'assets/met_dn.jpg');
let texture_rt = new THREE.TextureLoader().load( 'assets/met_rt.jpg');
let texture_lf = new THREE.TextureLoader().load( 'assets/met_lf.jpg');
  
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));

for (let i = 0; i < 6; i++)
materialArray[i].side = THREE.BackSide;
let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
let skybox = new THREE.Mesh( skyboxGeo, materialArray );
scene.add( skybox );  
animate();
}
function animate() {
renderer.render(scene,camera);
requestAnimationFrame(animate);
}
init();