import { libssh2 } from "./types.ts";
import { libssh2_SYMBOLS } from "./symbols.ts";

export * from "./safe-ffi.ts";
export type { libssh2 };

export function loadlibssh2(path: string): typeof libssh2 {
  const lib = Deno.dlopen(path, libssh2_SYMBOLS);

  return { ...lib.symbols, $$close: () => lib.close() } as never;
}
