import { assert } from "./deps.ts";
import { init } from "./util.ts";

Deno.test("libssh2_version is not null", function () {
  const lib = init();
  const version = lib.libssh2_version(0);
  assert(version !== null);
  assert(version);
  lib.$$close();
});

Deno.test("libssh2_version is a valid string", function () {
  const lib = init();
  const version = lib.libssh2_version(0);

  assert(typeof Deno.UnsafePointerView.getCString(version) === "string");
  lib.$$close();
});
