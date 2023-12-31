// Imports are from the demo-util folder in the repo
// https://github.com/torch2424/wasm-by-example/blob/master/demo-util/
import { wasmBrowserInstantiate } from "./instantiateWasm.js";

import wasmUrl from './main.wasm?url'

const go = new Go(); // Defined in wasm_exec.js. Don't forget to add this in your index.html.

const runWasmAdd = async () => {
  // Get the importObject from the go instance.
  const importObject = go.importObject;

  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate(wasmUrl, importObject);

  // Allow the wasm_exec go instance, bootstrap and execute our wasm module
  go.run(wasmModule.instance);

  // Call the Add function export from wasm, save the result
  const addResult = wasmModule.instance.exports.add(2433, 24);

  const printName = wasmModule.instance.exports.printName();
  // Set the result onto the body
  document.body.textContent = `Hello World! addResult: ${addResult} -- printName: ${printName}`;
};
runWasmAdd();