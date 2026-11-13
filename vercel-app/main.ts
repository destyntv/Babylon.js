import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, MeshBuilder } from "@babylonjs/lite";
import "./style.css";

const canvas = document.querySelector<HTMLCanvasElement>("#render-canvas");
const status = document.querySelector<HTMLElement>("#runtime-status");
const message = document.querySelector<HTMLElement>("#runtime-message");

if (!canvas || !status || !message) {
    throw new Error("Workspace elements are missing.");
}

try {
    const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera("workspace-camera", Math.PI / 4, Math.PI / 3, 6, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    new HemisphericLight("workspace-light", new Vector3(0, 1, 0), scene);
    const testObject = MeshBuilder.CreateBox("engine-smoke-test", { size: 1 }, scene);
    testObject.position.y = 0.5;

    status.textContent = "Engine ready";
    status.dataset.state = "ready";
    message.textContent = "Babylon.js initialized successfully. This neutral test object only verifies rendering; no game style has been selected.";

    engine.runRenderLoop(() => scene.render());
    window.addEventListener("resize", () => engine.resize());
} catch (error) {
    status.textContent = "Engine error";
    status.dataset.state = "error";
    message.textContent = error instanceof Error ? error.message : "Unknown engine initialization error.";
    console.error(error);
}
