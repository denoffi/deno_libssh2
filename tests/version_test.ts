import { assert } from "./deps.ts";
import { init } from "./util.ts";
import * as semver from "https://deno.land/std@0.153.0/semver/mod.ts";

Deno.test("libssh2_version is not null", function () {
  const lib = init();
  const version = lib.libssh2_version(0);
  assert(version !== null);
  assert(version);
  lib.$$close();
});

Deno.test("libssh2_version is a valid semver", function () {
  const lib = init();
  const version = lib.libssh2_version(0);
  assert(semver.valid(Deno.UnsafePointerView.getCString(version)));
  lib.$$close();
});
