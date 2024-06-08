---

# 3D Model Viewer of Apple Vision Pro

This project is a 3D model viewer for the Apple Vision Pro, implemented using Three.js. The viewer allows users to interact with a 3D model of the Apple Vision Pro headset. Users can rotate, zoom, and change the ambient color of the model using the provided controls.

## Features
- Interactive 3D model of Apple Vision Pro.
- Rotate and zoom functionality for detailed viewing.
- Ambient color change options for the model.
- Custom alert for users to switch to full screen mode (F11) for the best experience.
- Shows details about the product.
- Provided links to product's webpage(Apple) and youtube video.

## Getting Started
To run this project locally, you need to set up a local server. Follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/3d-model-viewer-apple-vision-pro.git
   ```

2. Navigate to the project directory:
   ```bash
   cd applevisionpro
   ```

3. Start a local server. You can use Python's built-in HTTP server or use VS Code LiveServer extension:
   ```bash
   python -m http.server 8000
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Project Structure
- `index.html`: Main HTML file containing the structure of the viewer.
- `styles.css`: Contains the styling for the viewer.
- `viewer.js`: JavaScript file implementing the 3D model viewer functionality.

## Acknowledgements
- [Three.js](https://threejs.org/) for the 3D rendering library.
- [Sketchfab](https://sketchfab.com/) for the 3D model.

---
