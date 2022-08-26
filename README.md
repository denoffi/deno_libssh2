# deno_libssh2

Deno bindings for [libssh2](https://www.libssh2.org), using Deno FFI.

## Usage

flags:

- `--allow-ffi`: Requires ffi access to "ssh2.dll", "libssh2.so", "libssh2.dylib"
- `--unstable`: FFI is unstable feature

```ts
import { loadlibssh2 } from "https://deno.land/x/libssh2/mod.ts";

const lib = loadlibssh2("libssh2.so");

const ptr = lib.libssh2_version(0); // return type `const char *`
// output: 4396015458

const version = Deno.UnsafePointerView.getCString(ptr);
// output: 1.10.0
```

## Examples

```bash
deno run --allow-ffi --unstable https://deno.land/x/libssh2/examples/basic.ts
```

## License

[deno_libssh2](https://github.com/denoffi/deno_libssh2) is released under the MIT License. See the bundled
[LICENSE](./LICENSE) file for details.
