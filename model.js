alert('For the best experience, please use full screen mode (press F11).');
let scene, camera, renderer;
  let model;
  let isDragging = false;
  const minZoom = 0.7;
  const maxZoom = 1.1;
  let ambientLight;
  let directionalLight;
  let ambientColor = new THREE.Color(0x353536); // Default ambient light color
  // Initialize the scene
  function init() {
    // Create a scene
    scene = new THREE.Scene();
    // Create a camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = .95;
    camera.position.y=0.07;
    camera.position.x=-0.3;
    // Create a renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("viewer-container").appendChild(renderer.domElement);
    // Load and add your 3D model here
    const loader = new THREE.GLTFLoader();
    loader.load('source/apple.glb', (glb) => {
      model = glb.scene;
      scene.add(model);
      updateModelAmbientColor();
    });
    // Add lights (optional)
    ambientLight = new THREE.AmbientLight(ambientColor.getHex());
    scene.add(ambientLight);
    directionalLight = new THREE.DirectionalLight(0xb9b6ba); // Default directional light color
    directionalLight.position.set(1,1,1);
    scene.add(directionalLight);
    // Add mouse interaction
    let previousMouseX = 0;
    let previousMouseY = 0;
    renderer.domElement.addEventListener('mousedown', (event) => {
      isDragging = true;
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
    });
    renderer.domElement.addEventListener('mouseup', () => {
      isDragging = false;
    });
    renderer.domElement.addEventListener('mousemove', (event) => {
      if (isDragging) {
        const deltaX = (event.clientX - previousMouseX) / 100;
        const deltaY = (event.clientY - previousMouseY) / 100;
        model.rotation.x += deltaY;
        model.rotation.y += deltaX;
      }
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
    });
    // Add mouse scroll event for zooming
    renderer.domElement.addEventListener('wheel', (event) => {
      if (event.deltaY < 0 && camera.position.z > minZoom) {
        // Scrolling up (zoom in)
        camera.position.z -= 0.1;
      } else if (event.deltaY > 0 && camera.position.z < maxZoom) {
        // Scrolling down (zoom out)
        camera.position.z += 0.1;
      }
    });
  }
  // Function to update the 3D model's ambient color
  function updateModelAmbientColor() {
    if (model) {
      model.traverse((child) => {
        if (child.isMesh) {
          child.material.ambient= ambientColor;
          renderer.setPixelRatio(window.devicePixelRatio * 1.5);
        }
      });
    }
    // Update the ambient light color
    if (ambientLight) {
      ambientLight.color.set(ambientColor);
    }
  }
  // Add event listeners for color buttons
  document.getElementById('black-button').addEventListener('click', () => {
    ambientColor = new THREE.Color(0x353536); // Black
    updateModelAmbientColor();
  });
  document.getElementById('red-button').addEventListener('click', () => {
    ambientColor = new THREE.Color(0xc44b4b); // Red
    updateModelAmbientColor();
  });
  document.getElementById('green-button').addEventListener('click', () => {
    ambientColor = new THREE.Color(0x7D9668); // Green
    updateModelAmbientColor();
  });
  document.getElementById('blue-button').addEventListener('click', () => {
    ambientColor = new THREE.Color(0x5b6dc9); // Blue
    updateModelAmbientColor();
  });
  document.getElementById('violet-button').addEventListener('click', () => {
    ambientColor = new THREE.Color(0xba5bd4); // Violet
    updateModelAmbientColor();
  });
  // Create an animation loop
  function animate() {
    requestAnimationFrame(animate);
    // Render the scene
    model.rotation.y+=.001;
    renderer.render(scene, camera);
  }
  // Handle window resize
  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });
  // Start the app
  init();
  animate();