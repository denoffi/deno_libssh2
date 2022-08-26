import { libssh2 } from "./types.ts";
import { libssh2_SYMBOLS } from "./symbols.ts";

export * from "./safe-ffi.ts";
export type { libssh2 };

export function loadlibssh2(): typeof libssh2 {
  const libName = {
    darwin: "libssh2.dylib",
    linux: "libssh2.so",
    windows: "ssh2.dll",
  }[Deno.build.os];

  const lib = Deno.dlopen(libName, libssh2_SYMBOLS);

  return { ...lib.symbols, $$close: () => lib.close() } as never;
}
