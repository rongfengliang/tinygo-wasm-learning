package main

//go:wasm-module
//export add
func add(x, y uint32) uint32 {
	return x + y + 100
}

//go:wasm-module
//export printName
func printName() int {
	return 1111
}

// main is required for the `wasi` target, even if it isn't used.
func main() {}
