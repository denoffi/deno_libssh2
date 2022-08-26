import { loadlibssh2 } from "../mod.ts";

const libName = {
  darwin: "libssh2.dylib",
  linux: "libssh2.so",
  windows: "ssh2.dll",
}[Deno.build.os];

export function init() {
  return loadlibssh2(libName);
}
