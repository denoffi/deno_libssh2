export const libssh2_SYMBOLS = {
  libssh2_init: {
    name: "libssh2_init",
    parameters: ["i32"],
    result: "i32",
  },
  libssh2_exit: {
    name: "libssh2_exit",
    parameters: [],
    result: "void",
  },
  libssh2_free: {
    name: "libssh2_free",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  libssh2_session_supported_algs: {
    name: "libssh2_session_supported_algs",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  libssh2_session_init_ex: {
    name: "libssh2_session_init_ex",
    parameters: ["function", "function", "function", "pointer"],
    result: "pointer",
  },
  libssh2_session_abstract: {
    name: "libssh2_session_abstract",
    parameters: ["pointer"],
    result: "pointer",
  },
  libssh2_session_callback_set: {
    name: "libssh2_session_callback_set",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  libssh2_session_banner_set: {
    name: "libssh2_session_banner_set",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  libssh2_banner_set: {
    name: "libssh2_banner_set",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  libssh2_session_startup: {
    name: "libssh2_session_startup",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  libssh2_session_handshake: {
    name: "libssh2_session_handshake",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  libssh2_session_disconnect_ex: {
    name: "libssh2_session_disconnect_ex",
    parameters: ["pointer", "i32", "pointer", "pointer"],
    result: "i32",
  },
  libssh2_session_free: {
    name: "libssh2_session_free",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_hostkey_hash: {
    name: "libssh2_hostkey_hash",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  libssh2_session_hostkey: {
    name: "libssh2_session_hostkey",
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  libssh2_session_method_pref: {
    name: "libssh2_session_method_pref",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  libssh2_session_methods: {
    name: "libssh2_session_methods",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  libssh2_session_last_error: {
    name: "libssh2_session_last_error",
    parameters: ["pointer", "pointer", "pointer", "i32"],
    result: "i32",
  },
  libssh2_session_last_errno: {
    name: "libssh2_session_last_errno",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_session_set_last_error: {
    name: "libssh2_session_set_last_error",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  libssh2_session_block_directions: {
    name: "libssh2_session_block_directions",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_session_flag: {
    name: "libssh2_session_flag",
    parameters: ["pointer", "i32", "i32"],
    result: "i32",
  },
  libssh2_session_banner_get: {
    name: "libssh2_session_banner_get",
    parameters: ["pointer"],
    result: "pointer",
  },
  libssh2_userauth_list: {
    name: "libssh2_userauth_list",
    parameters: ["pointer", "pointer", "u32"],
    result: "pointer",
  },
  libssh2_userauth_authenticated: {
    name: "libssh2_userauth_authenticated",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_userauth_password_ex: {
    name: "libssh2_userauth_password_ex",
    parameters: ["pointer", "pointer", "u32", "pointer", "u32", "function"],
    result: "i32",
  },
  libssh2_userauth_publickey_fromfile_ex: {
    name: "libssh2_userauth_publickey_fromfile_ex",
    parameters: ["pointer", "pointer", "u32", "pointer", "pointer", "pointer"],
    result: "i32",
  },
  libssh2_userauth_publickey: {
    name: "libssh2_userauth_publickey",
    parameters: ["pointer", "pointer", "pointer", "usize", "function", "pointer"],
    result: "i32",
  },
  libssh2_userauth_hostbased_fromfile_ex: {
    name: "libssh2_userauth_hostbased_fromfile_ex",
    parameters: ["pointer", "pointer", "u32", "pointer", "pointer", "pointer", "pointer", "u32", "pointer", "u32"],
    result: "i32",
  },
  libssh2_userauth_publickey_frommemory: {
    name: "libssh2_userauth_publickey_frommemory",
    parameters: ["pointer", "pointer", "usize", "pointer", "usize", "pointer", "usize", "pointer"],
    result: "i32",
  },
  libssh2_userauth_keyboard_interactive_ex: {
    name: "libssh2_userauth_keyboard_interactive_ex",
    parameters: ["pointer", "pointer", "u32", "function"],
    result: "i32",
  },
  libssh2_poll: {
    name: "libssh2_poll",
    parameters: ["pointer", "u32", "i64"],
    result: "i32",
  },
  libssh2_channel_open_ex: {
    name: "libssh2_channel_open_ex",
    parameters: ["pointer", "pointer", "u32", "u32", "u32", "pointer", "u32"],
    result: "pointer",
  },
  libssh2_channel_direct_tcpip_ex: {
    name: "libssh2_channel_direct_tcpip_ex",
    parameters: ["pointer", "pointer", "i32", "pointer", "i32"],
    result: "pointer",
  },
  libssh2_channel_forward_listen_ex: {
    name: "libssh2_channel_forward_listen_ex",
    parameters: ["pointer", "pointer", "i32", "pointer", "i32"],
    result: "pointer",
  },
  libssh2_channel_forward_cancel: {
    name: "libssh2_channel_forward_cancel",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_channel_forward_accept: {
    name: "libssh2_channel_forward_accept",
    parameters: ["pointer"],
    result: "pointer",
  },
  libssh2_channel_setenv_ex: {
    name: "libssh2_channel_setenv_ex",
    parameters: ["pointer", "pointer", "u32", "pointer", "u32"],
    result: "i32",
  },
  libssh2_channel_request_pty_ex: {
    name: "libssh2_channel_request_pty_ex",
    parameters: ["pointer", "pointer", "u32", "pointer", "u32", "i32", "i32", "i32", "i32"],
    result: "i32",
  },
  libssh2_channel_request_pty_size_ex: {
    name: "libssh2_channel_request_pty_size_ex",
    parameters: ["pointer", "i32", "i32", "i32", "i32"],
    result: "i32",
  },
  libssh2_channel_x11_req_ex: {
    name: "libssh2_channel_x11_req_ex",
    parameters: ["pointer", "i32", "pointer", "pointer", "i32"],
    result: "i32",
  },
  libssh2_channel_process_startup: {
    name: "libssh2_channel_process_startup",
    parameters: ["pointer", "pointer", "u32", "pointer", "u32"],
    result: "i32",
  },
  libssh2_channel_read_ex: {
    name: "libssh2_channel_read_ex",
    parameters: ["pointer", "i32", "pointer", "usize"],
    result: "i64",
  },
  libssh2_poll_channel_read: {
    name: "libssh2_poll_channel_read",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  libssh2_channel_window_read_ex: {
    name: "libssh2_channel_window_read_ex",
    parameters: ["pointer", "pointer", "pointer"],
    result: "u64",
  },
  libssh2_channel_receive_window_adjust: {
    name: "libssh2_channel_receive_window_adjust",
    parameters: ["pointer", "u64", "u8"],
    result: "u64",
  },
  libssh2_channel_receive_window_adjust2: {
    name: "libssh2_channel_receive_window_adjust2",
    parameters: ["pointer", "u64", "u8", "pointer"],
    result: "i32",
  },
  libssh2_channel_write_ex: {
    name: "libssh2_channel_write_ex",
    parameters: ["pointer", "i32", "pointer", "usize"],
    result: "i64",
  },
  libssh2_channel_window_write_ex: {
    name: "libssh2_channel_window_write_ex",
    parameters: ["pointer", "pointer"],
    result: "u64",
  },
  libssh2_session_set_blocking: {
    name: "libssh2_session_set_blocking",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  libssh2_session_get_blocking: {
    name: "libssh2_session_get_blocking",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_channel_set_blocking: {
    name: "libssh2_channel_set_blocking",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  libssh2_session_set_timeout: {
    name: "libssh2_session_set_timeout",
    parameters: ["pointer", "i64"],
    result: "void",
  },
  libssh2_session_get_timeout: {
    name: "libssh2_session_get_timeout",
    parameters: ["pointer"],
    result: "i64",
  },
  libssh2_channel_handle_extended_data: {
    name: "libssh2_channel_handle_extended_data",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  libssh2_channel_handle_extended_data2: {
    name: "libssh2_channel_handle_extended_data2",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  libssh2_channel_flush_ex: {
    name: "libssh2_channel_flush_ex",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  libssh2_channel_get_exit_status: {
    name: "libssh2_channel_get_exit_status",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_channel_get_exit_signal: {
    name: "libssh2_channel_get_exit_signal",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "i32",
  },
  libssh2_channel_send_eof: {
    name: "libssh2_channel_send_eof",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_channel_eof: {
    name: "libssh2_channel_eof",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_channel_wait_eof: {
    name: "libssh2_channel_wait_eof",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_channel_close: {
    name: "libssh2_channel_close",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_channel_wait_closed: {
    name: "libssh2_channel_wait_closed",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_channel_free: {
    name: "libssh2_channel_free",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_scp_recv: {
    name: "libssh2_scp_recv",
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  libssh2_scp_recv2: {
    name: "libssh2_scp_recv2",
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  libssh2_scp_send_ex: {
    name: "libssh2_scp_send_ex",
    parameters: ["pointer", "pointer", "i32", "usize", "i64", "i64"],
    result: "pointer",
  },
  libssh2_scp_send64: {
    name: "libssh2_scp_send64",
    parameters: ["pointer", "pointer", "i32", "i64", "i64", "i64"],
    result: "pointer",
  },
  libssh2_base64_decode: {
    name: "libssh2_base64_decode",
    parameters: ["pointer", "pointer", "pointer", "pointer", "u32"],
    result: "i32",
  },
  libssh2_version: {
    name: "libssh2_version",
    parameters: ["i32"],
    result: "pointer",
  },
  libssh2_knownhost_init: {
    name: "libssh2_knownhost_init",
    parameters: ["pointer"],
    result: "pointer",
  },
  libssh2_knownhost_add: {
    name: "libssh2_knownhost_add",
    parameters: ["pointer", "pointer", "pointer", "pointer", "usize", "i32", "pointer"],
    result: "i32",
  },
  libssh2_knownhost_addc: {
    name: "libssh2_knownhost_addc",
    parameters: ["pointer", "pointer", "pointer", "pointer", "usize", "pointer", "usize", "i32", "pointer"],
    result: "i32",
  },
  libssh2_knownhost_check: {
    name: "libssh2_knownhost_check",
    parameters: ["pointer", "pointer", "pointer", "usize", "i32", "pointer"],
    result: "i32",
  },
  libssh2_knownhost_checkp: {
    name: "libssh2_knownhost_checkp",
    parameters: ["pointer", "pointer", "i32", "pointer", "usize", "i32", "pointer"],
    result: "i32",
  },
  libssh2_knownhost_del: {
    name: "libssh2_knownhost_del",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  libssh2_knownhost_free: {
    name: "libssh2_knownhost_free",
    parameters: ["pointer"],
    result: "void",
  },
  libssh2_knownhost_readline: {
    name: "libssh2_knownhost_readline",
    parameters: ["pointer", "pointer", "usize", "i32"],
    result: "i32",
  },
  libssh2_knownhost_readfile: {
    name: "libssh2_knownhost_readfile",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32",
  },
  libssh2_knownhost_writeline: {
    name: "libssh2_knownhost_writeline",
    parameters: ["pointer", "pointer", "pointer", "usize", "pointer", "i32"],
    result: "i32",
  },
  libssh2_knownhost_writefile: {
    name: "libssh2_knownhost_writefile",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32",
  },
  libssh2_knownhost_get: {
    name: "libssh2_knownhost_get",
    parameters: ["pointer", "pointer", "pointer"],
    result: "i32",
  },
  libssh2_agent_init: {
    name: "libssh2_agent_init",
    parameters: ["pointer"],
    result: "pointer",
  },
  libssh2_agent_connect: {
    name: "libssh2_agent_connect",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_agent_list_identities: {
    name: "libssh2_agent_list_identities",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_agent_get_identity: {
    name: "libssh2_agent_get_identity",
    parameters: ["pointer", "pointer", "pointer"],
    result: "i32",
  },
  libssh2_agent_userauth: {
    name: "libssh2_agent_userauth",
    parameters: ["pointer", "pointer", "pointer"],
    result: "i32",
  },
  libssh2_agent_disconnect: {
    name: "libssh2_agent_disconnect",
    parameters: ["pointer"],
    result: "i32",
  },
  libssh2_agent_free: {
    name: "libssh2_agent_free",
    parameters: ["pointer"],
    result: "void",
  },
  libssh2_agent_set_identity_path: {
    name: "libssh2_agent_set_identity_path",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  libssh2_agent_get_identity_path: {
    name: "libssh2_agent_get_identity_path",
    parameters: ["pointer"],
    result: "pointer",
  },
  libssh2_keepalive_config: {
    name: "libssh2_keepalive_config",
    parameters: ["pointer", "i32", "u32"],
    result: "void",
  },
  libssh2_keepalive_send: {
    name: "libssh2_keepalive_send",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  libssh2_trace: {
    name: "libssh2_trace",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  libssh2_trace_sethandler: {
    name: "libssh2_trace_sethandler",
    parameters: ["pointer", "pointer", "function"],
    result: "i32",
  },
} as const;
