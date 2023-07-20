import { useEffect } from "react";
import init, { render } from "rust-wasm-template";

function App() {
  const CANVAS_ID = "canvas";

  useEffect(() => {
    init().then(() => {
      render(CANVAS_ID);
    });
  }, []);

  return (
    <div className="flex flex-col items-center bg-zinc-100 min-h-screen">
      <h1 className="text-3xl font-bold">Vite + React + Tailwind + Wasm</h1>
      <canvas id={CANVAS_ID} className="bg-blue-100" width={400} height={400} />
    </div>
  );
}

export default App;
