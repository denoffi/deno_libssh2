import { cstr, loadlibssh2 } from "../mod.ts";

const libName = {
  darwin: "libssh2.dylib",
  linux: "libssh2.so",
  windows: "ssh2.dll",
}[Deno.build.os];

const lib = loadlibssh2(libName);

const ptr = lib.libssh2_version(0);
const version = Deno.UnsafePointerView.getCString(ptr);
console.log("version %s", version);

const rc = lib.libssh2_init(0);
if (rc !== 0) {
  console.error("libssh2_init failedlibssh2 initialization failed (%d)", rc);
  Deno.exit(rc);
}

const session = lib.libssh2_session_init_ex(null, null, null, null);
if (session === null) {
  console.error("libssh2_session_init failed");
  Deno.exit(1);
}

lib.libssh2_session_set_blocking(session, 0);

// rc = lib.libssh2_session_handshake(session, 0);
// if (rc !== 0) {
//   console.error("libssh2_session_handshake failed");
//   Deno.exit(1);
// }

const nh = lib.libssh2_knownhost_init(session);
if (!nh) {
  /* eeek, do cleanup here */
  console.log("eeek, do cleanup here");
  Deno.exit(1);
}

const userauthlist = lib.libssh2_userauth_list(session, cstr("root"), 4);
if (userauthlist === null) {
  console.error("libssh2_userauth_list failed");
  Deno.exit(1);
}

console.log("userauthlist %s", userauthlist);
