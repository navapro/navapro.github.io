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

function init(){
scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(55, windowWidth/windowHeight,45, 30000);
camera.position.set(-900,-200,-900);

renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(windowWidth,windowHeight);
document.body.appendChild(renderer.domElement);


control = new THREE.OrbitControls(camera);
control.addEventListener('change',renderer);

let materialArray = [];

textureFt = new THREE.TextureLoader().load("assets/met_ft.tga");
textureBk = new THREE.TextureLoader().load("assets/met_bk.tga");
textureRt = new THREE.TextureLoader().load("assets/met_rt.tga");
textureLf = new THREE.TextureLoader().load("assets/met_lf.tga");
textureUp = new THREE.TextureLoader().load("assets/met_up.tga");
textureDn = new THREE.TextureLoader().load("assets/met_dn.tga");



materialArray.push(new THREE.MeshBasicMaterial({map: textureFt}));
materialArray.push(new THREE.MeshBasicMaterial({map: textureBk}));
materialArray.push(new THREE.MeshBasicMaterial({map: textureUp}));
materialArray.push(new THREE.MeshBasicMaterial({map: textureDn}));
materialArray.push(new THREE.MeshBasicMaterial({map: textureRt}));
materialArray.push(new THREE.MeshBasicMaterial({map: textureLf}));

skyBoxGeo = new THREE.BoxGeometry(10000,10000,10000);
let skyBox = new THREE.Mesh(skyBoxGeo,materialArray);
scene.add(skyBox);

animate();
}

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
init();