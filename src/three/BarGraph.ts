import * as THREE from 'three';

interface BarGraphConstructor {
  new (height: number);
}

export default class BarGraph implements BarGraphConstructor {
  private _scene: THREE.Scene;
  //private _canvas: HTMLCanvasElement;
  private _camera: THREE.PerspectiveCamera;
  private _renderer: THREE.WebGLRenderer;
  // private _axis: THREE.AxisHelper;
  private _light: THREE.DirectionalLight;
  private _light2: THREE.DirectionalLight;
  private _material: THREE.MeshBasicMaterial;
  private _box: THREE.Mesh;

  constructor(h: number) {
    this._scene = new THREE.Scene();
    this._camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this._renderer = new THREE.WebGLRenderer();
    // this._axis = new THREE.AxisHelper(10);
    this._light = new THREE.DirectionalLight(0xffffff, 1.0);
    this._light2 = new THREE.DirectionalLight(0xffffff, 1.0);
    this._material = new THREE.MeshBasicMaterial({
      color: 0xaaaaaa,
      wireframe: true
    });
    this._box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, h), this._material);
  }

  public createScene(): void {
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this._renderer.domElement);
    // this._scene.add(this._axis);
    this._light.position.set(100, 100, 100);
    this._scene.add(this._light);
    this._light2.position.set(-100, 100, -100);
    this._scene.add(this._light2);
    this._box.position.x = 0.5;
    this._box.rotation.y = 0.5;

    this._camera.position.x = 5;
    this._camera.position.y = 5;
    this._camera.position.z = 5;

    this._camera.lookAt(this._scene.position);
  }

  public animate(): void {
    requestAnimationFrame(this.animate);
    this._render();
  }

  private _render(): void {
    let timer = 0.002 * Date.now();
    this._box.position.y = 0.5 + 0.5 * Math.sin(timer);
    this._box.rotation.x += 0.1;
    this._renderer.render(this._scene, this._camera);
  }
}
