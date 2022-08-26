import {
  type BindingsOptions,
  extractSymbolDefinitions,
  generateSources,
  introspect,
  printSources,
  readJson,
} from "https://deno.land/x/ffigen@v0.2.1/mod.ts";

import type { CSymbol } from "https://deno.land/x/ffigen@v0.2.1/ffigen/types.ts";

/**
 * Generates the following files in `outputFolder`:
 * - `mod.ts` - Bindings entry that also dlopens the shared lib
 * - `types.ts` - Namespace with all type/enum/function definitions
 * - `symbols.ts` - Exports object with lib definition for `Deno.dlopen`
 * - `safe-ffi.ts` - Type utils for making pointer typesafe
 */
export async function generateBindings(opts: BindingsOptions) {
  const ffiInfo = introspect({
    ...opts,
    symbols: await readJson(opts.symbolsFile),
    exposedFunctions: await getFunctionNames(opts.symbolsFile),
  });

  const sources = generateSources(ffiInfo);

  await printSources(sources, opts.outputFolder);
}

async function getFunctionNames(symbolsFile: string): Promise<string[]> {
  const symbols = await readJson(symbolsFile) as CSymbol[];
  return symbols
    .filter((x) => x.tag === "function")
    .filter((x) => x.location.startsWith("/data/input/libssh2.h"))
    .map((x) => x.name);
}

if (Deno.args.includes("-d")) {
  await extractSymbolDefinitions({
    input: "input/libssh2.h",
    output: "input/libssh2.json",
  });
}

await generateBindings({
  libName: "libssh2",
  libPrefix: "",
  symbolsFile: "input/libssh2.json",
  exposedSymbolsFile: "input/libssh2_symbols.txt",
  headersBaseUrl: ".",
  outputFolder: ".",
});
