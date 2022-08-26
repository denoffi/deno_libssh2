// deno-lint-ignore-file
import { FnPointer, Pointer, StructPointer } from "./safe-ffi.ts";

export namespace libssh2 {
  /** /usr/lib/clang/14.0.6/include/stddef.h#L35 */
  export type ptrdiff_t = bigint;

  /** /usr/lib/clang/14.0.6/include/stddef.h#L46 */
  export type size_t = bigint;

  /** /usr/lib/clang/14.0.6/include/stddef.h#L74 */
  export type wchar_t = number;

  /** /usr/lib/clang/14.0.6/include/__stddef_max_align_t.h#L24 */
  export type max_align_t = StructPointer<"max_align_t">;

  /** .bits/types/__locale_t.h#L41 */
  export type __locale_t = Pointer<"__locale_t">;

  /** .bits/types/locale_t.h#L24 */
  export type locale_t = libssh2.__locale_t;

  /** .bits/types.h#L31 */
  export type __u_char = number;

  /** .bits/types.h#L32 */
  export type __u_short = number;

  /** .bits/types.h#L33 */
  export type __u_int = number;

  /** .bits/types.h#L34 */
  export type __u_long = bigint;

  /** .bits/types.h#L37 */
  export type __int8_t = number;

  /** .bits/types.h#L38 */
  export type __uint8_t = number;

  /** .bits/types.h#L39 */
  export type __int16_t = number;

  /** .bits/types.h#L40 */
  export type __uint16_t = number;

  /** .bits/types.h#L41 */
  export type __int32_t = number;

  /** .bits/types.h#L42 */
  export type __uint32_t = number;

  /** .bits/types.h#L44 */
  export type __int64_t = bigint;

  /** .bits/types.h#L45 */
  export type __uint64_t = bigint;

  /** .bits/types.h#L52 */
  export type __int_least8_t = libssh2.__int8_t;

  /** .bits/types.h#L53 */
  export type __uint_least8_t = libssh2.__uint8_t;

  /** .bits/types.h#L54 */
  export type __int_least16_t = libssh2.__int16_t;

  /** .bits/types.h#L55 */
  export type __uint_least16_t = libssh2.__uint16_t;

  /** .bits/types.h#L56 */
  export type __int_least32_t = libssh2.__int32_t;

  /** .bits/types.h#L57 */
  export type __uint_least32_t = libssh2.__uint32_t;

  /** .bits/types.h#L58 */
  export type __int_least64_t = libssh2.__int64_t;

  /** .bits/types.h#L59 */
  export type __uint_least64_t = libssh2.__uint64_t;

  /** .bits/types.h#L63 */
  export type __quad_t = bigint;

  /** .bits/types.h#L64 */
  export type __u_quad_t = bigint;

  /** .bits/types.h#L72 */
  export type __intmax_t = bigint;

  /** .bits/types.h#L73 */
  export type __uintmax_t = bigint;

  /** .bits/types.h#L145 */
  export type __dev_t = bigint;

  /** .bits/types.h#L146 */
  export type __uid_t = number;

  /** .bits/types.h#L147 */
  export type __gid_t = number;

  /** .bits/types.h#L148 */
  export type __ino_t = bigint;

  /** .bits/types.h#L149 */
  export type __ino64_t = bigint;

  /** .bits/types.h#L150 */
  export type __mode_t = number;

  /** .bits/types.h#L151 */
  export type __nlink_t = bigint;

  /** .bits/types.h#L152 */
  export type __off_t = bigint;

  /** .bits/types.h#L153 */
  export type __off64_t = bigint;

  /** .bits/types.h#L154 */
  export type __pid_t = number;

  /** .bits/types.h#L155 */
  export type __fsid_t = StructPointer<"__fsid_t">;

  /** .bits/types.h#L156 */
  export type __clock_t = bigint;

  /** .bits/types.h#L157 */
  export type __rlim_t = bigint;

  /** .bits/types.h#L158 */
  export type __rlim64_t = bigint;

  /** .bits/types.h#L159 */
  export type __id_t = number;

  /** .bits/types.h#L160 */
  export type __time_t = bigint;

  /** .bits/types.h#L161 */
  export type __useconds_t = number;

  /** .bits/types.h#L162 */
  export type __suseconds_t = bigint;

  /** .bits/types.h#L163 */
  export type __suseconds64_t = bigint;

  /** .bits/types.h#L165 */
  export type __daddr_t = number;

  /** .bits/types.h#L166 */
  export type __key_t = number;

  /** .bits/types.h#L169 */
  export type __clockid_t = number;

  /** .bits/types.h#L172 */
  export type __timer_t = Pointer<"__timer_t">;

  /** .bits/types.h#L175 */
  export type __blksize_t = bigint;

  /** .bits/types.h#L180 */
  export type __blkcnt_t = bigint;

  /** .bits/types.h#L181 */
  export type __blkcnt64_t = bigint;

  /** .bits/types.h#L184 */
  export type __fsblkcnt_t = bigint;

  /** .bits/types.h#L185 */
  export type __fsblkcnt64_t = bigint;

  /** .bits/types.h#L188 */
  export type __fsfilcnt_t = bigint;

  /** .bits/types.h#L189 */
  export type __fsfilcnt64_t = bigint;

  /** .bits/types.h#L192 */
  export type __fsword_t = bigint;

  /** .bits/types.h#L194 */
  export type __ssize_t = bigint;

  /** .bits/types.h#L197 */
  export type __syscall_slong_t = bigint;

  /** .bits/types.h#L199 */
  export type __syscall_ulong_t = bigint;

  /** .bits/types.h#L203 */
  export type __loff_t = libssh2.__off64_t;

  /** .bits/types.h#L204 */
  export type __caddr_t = Pointer<"__caddr_t">;

  /** .bits/types.h#L207 */
  export type __intptr_t = bigint;

  /** .bits/types.h#L210 */
  export type __socklen_t = number;

  /** .bits/types.h#L215 */
  export type __sig_atomic_t = number;

  /** .bits/types/time_t.h#L10 */
  export type time_t = libssh2.__time_t;

  /** .sys/stat.h#L40 */
  export type dev_t = libssh2.__dev_t;

  /** .sys/stat.h#L45 */
  export type gid_t = libssh2.__gid_t;

  /** .sys/stat.h#L51 */
  export type ino_t = libssh2.__ino_t;

  /** .sys/stat.h#L59 */
  export type mode_t = libssh2.__mode_t;

  /** .sys/stat.h#L64 */
  export type nlink_t = libssh2.__nlink_t;

  /** .sys/stat.h#L70 */
  export type off_t = libssh2.__off_t;

  /** .sys/stat.h#L78 */
  export type uid_t = libssh2.__uid_t;

  /** .sys/types.h#L33 */
  export type u_char = libssh2.__u_char;

  /** .sys/types.h#L34 */
  export type u_short = libssh2.__u_short;

  /** .sys/types.h#L35 */
  export type u_int = libssh2.__u_int;

  /** .sys/types.h#L36 */
  export type u_long = libssh2.__u_long;

  /** .sys/types.h#L37 */
  export type quad_t = libssh2.__quad_t;

  /** .sys/types.h#L38 */
  export type u_quad_t = libssh2.__u_quad_t;

  /** .sys/types.h#L39 */
  export type fsid_t = libssh2.__fsid_t;

  /** .sys/types.h#L42 */
  export type loff_t = libssh2.__loff_t;

  /** .sys/types.h#L97 */
  export type pid_t = libssh2.__pid_t;

  /** .sys/types.h#L103 */
  export type id_t = libssh2.__id_t;

  /** .sys/types.h#L108 */
  export type ssize_t = libssh2.__ssize_t;

  /** .sys/types.h#L114 */
  export type daddr_t = libssh2.__daddr_t;

  /** .sys/types.h#L115 */
  export type caddr_t = libssh2.__caddr_t;

  /** .sys/types.h#L121 */
  export type key_t = libssh2.__key_t;

  /** .bits/types/clock_t.h#L7 */
  export type clock_t = libssh2.__clock_t;

  /** .bits/types/clockid_t.h#L7 */
  export type clockid_t = libssh2.__clockid_t;

  /** .bits/types/timer_t.h#L7 */
  export type timer_t = libssh2.__timer_t;

  /** .sys/types.h#L148 */
  export type ulong = bigint;

  /** .sys/types.h#L149 */
  export type ushort = number;

  /** .sys/types.h#L150 */
  export type uint = number;

  /** .bits/stdint-intn.h#L24 */
  export type int8_t = libssh2.__int8_t;

  /** .bits/stdint-intn.h#L25 */
  export type int16_t = libssh2.__int16_t;

  /** .bits/stdint-intn.h#L26 */
  export type int32_t = libssh2.__int32_t;

  /** .bits/stdint-intn.h#L27 */
  export type int64_t = libssh2.__int64_t;

  /** .sys/types.h#L158 */
  export type u_int8_t = libssh2.__uint8_t;

  /** .sys/types.h#L159 */
  export type u_int16_t = libssh2.__uint16_t;

  /** .sys/types.h#L160 */
  export type u_int32_t = libssh2.__uint32_t;

  /** .sys/types.h#L161 */
  export type u_int64_t = libssh2.__uint64_t;

  /** .sys/types.h#L166 */
  export type register_t = number;

  /** .bits/types/__sigset_t.h#L8 */
  export type __sigset_t = StructPointer<"__sigset_t">;

  /** .bits/types/sigset_t.h#L7 */
  export type sigset_t = libssh2.__sigset_t;

  /** .sys/select.h#L43 */
  export type suseconds_t = libssh2.__suseconds_t;

  /** .sys/select.h#L49 */
  export type __fd_mask = bigint;

  /** .sys/select.h#L70 */
  export type fd_set = StructPointer<"fd_set">;

  /** .sys/select.h#L77 */
  export type fd_mask = libssh2.__fd_mask;

  /** .sys/types.h#L185 */
  export type blksize_t = libssh2.__blksize_t;

  /** .sys/types.h#L192 */
  export type blkcnt_t = libssh2.__blkcnt_t;

  /** .sys/types.h#L196 */
  export type fsblkcnt_t = libssh2.__fsblkcnt_t;

  /** .sys/types.h#L200 */
  export type fsfilcnt_t = libssh2.__fsfilcnt_t;

  /** .bits/atomic_wide_counter.h#L33 */
  export type __atomic_wide_counter = unknown;

  /** .bits/thread-shared-types.h#L55 */
  export type __pthread_list_t = StructPointer<"__pthread_internal_list">;

  /** .bits/thread-shared-types.h#L60 */
  export type __pthread_slist_t = StructPointer<"__pthread_internal_slist">;

  /** .bits/thread-shared-types.h#L105 */
  export type __tss_t = number;

  /** .bits/thread-shared-types.h#L106 */
  export type __thrd_t = bigint;

  /** .bits/thread-shared-types.h#L111 */
  export type __once_flag = StructPointer<"__once_flag">;

  /** .bits/pthreadtypes.h#L27 */
  export type pthread_t = bigint;

  /** .bits/pthreadtypes.h#L36 */
  export type pthread_mutexattr_t = unknown;

  /** .bits/pthreadtypes.h#L45 */
  export type pthread_condattr_t = unknown;

  /** .bits/pthreadtypes.h#L49 */
  export type pthread_key_t = number;

  /** .bits/pthreadtypes.h#L53 */
  export type pthread_once_t = number;

  /** .bits/pthreadtypes.h#L62 */
  export type pthread_attr_t = unknown;

  /** .bits/pthreadtypes.h#L72 */
  export type pthread_mutex_t = unknown;

  /** .bits/pthreadtypes.h#L80 */
  export type pthread_cond_t = unknown;

  /** .bits/pthreadtypes.h#L91 */
  export type pthread_rwlock_t = unknown;

  /** .bits/pthreadtypes.h#L97 */
  export type pthread_rwlockattr_t = unknown;

  /** .bits/pthreadtypes.h#L103 */
  export type pthread_spinlock_t = number;

  /** .bits/pthreadtypes.h#L112 */
  export type pthread_barrier_t = unknown;

  /** .bits/pthreadtypes.h#L118 */
  export type pthread_barrierattr_t = unknown;

  /** .bits/stdint-uintn.h#L24 */
  export type uint8_t = libssh2.__uint8_t;

  /** .bits/stdint-uintn.h#L25 */
  export type uint16_t = libssh2.__uint16_t;

  /** .bits/stdint-uintn.h#L26 */
  export type uint32_t = libssh2.__uint32_t;

  /** .bits/stdint-uintn.h#L27 */
  export type uint64_t = libssh2.__uint64_t;

  /** .stdint.h#L43 */
  export type int_least8_t = libssh2.__int_least8_t;

  /** .stdint.h#L44 */
  export type int_least16_t = libssh2.__int_least16_t;

  /** .stdint.h#L45 */
  export type int_least32_t = libssh2.__int_least32_t;

  /** .stdint.h#L46 */
  export type int_least64_t = libssh2.__int_least64_t;

  /** .stdint.h#L49 */
  export type uint_least8_t = libssh2.__uint_least8_t;

  /** .stdint.h#L50 */
  export type uint_least16_t = libssh2.__uint_least16_t;

  /** .stdint.h#L51 */
  export type uint_least32_t = libssh2.__uint_least32_t;

  /** .stdint.h#L52 */
  export type uint_least64_t = libssh2.__uint_least64_t;

  /** .stdint.h#L58 */
  export type int_fast8_t = number;

  /** .stdint.h#L60 */
  export type int_fast16_t = bigint;

  /** .stdint.h#L61 */
  export type int_fast32_t = bigint;

  /** .stdint.h#L62 */
  export type int_fast64_t = bigint;

  /** .stdint.h#L71 */
  export type uint_fast8_t = number;

  /** .stdint.h#L73 */
  export type uint_fast16_t = bigint;

  /** .stdint.h#L74 */
  export type uint_fast32_t = bigint;

  /** .stdint.h#L75 */
  export type uint_fast64_t = bigint;

  /** .stdint.h#L87 */
  export type intptr_t = bigint;

  /** .stdint.h#L90 */
  export type uintptr_t = bigint;

  /** .stdint.h#L101 */
  export type intmax_t = libssh2.__intmax_t;

  /** .stdint.h#L102 */
  export type uintmax_t = libssh2.__uintmax_t;

  /** /data/input/libssh2.h#L146 */
  export type libssh2_uint64_t = bigint;

  /** /data/input/libssh2.h#L147 */
  export type libssh2_int64_t = bigint;

  /** /data/input/libssh2.h#L154 */
  export type libssh2_socket_t = number;

  /** /data/input/libssh2.h#L226 */
  export type libssh2_struct_stat = StructPointer<"stat">;

  /** /data/input/libssh2.h#L227 */
  export type libssh2_struct_stat_size = libssh2.off_t;

  /** /data/input/libssh2.h#L276 */
  export type LIBSSH2_USERAUTH_KBDINT_PROMPT = StructPointer<"_LIBSSH2_USERAUTH_KBDINT_PROMPT">;

  /** /data/input/libssh2.h#L282 */
  export type LIBSSH2_USERAUTH_KBDINT_RESPONSE = StructPointer<"_LIBSSH2_USERAUTH_KBDINT_RESPONSE">;

  /** /data/input/libssh2.h#L362 */
  export type LIBSSH2_SESSION = StructPointer<"LIBSSH2_SESSION">;

  /** /data/input/libssh2.h#L363 */
  export type LIBSSH2_CHANNEL = StructPointer<"LIBSSH2_CHANNEL">;

  /** /data/input/libssh2.h#L364 */
  export type LIBSSH2_LISTENER = StructPointer<"LIBSSH2_LISTENER">;

  /** /data/input/libssh2.h#L365 */
  export type LIBSSH2_KNOWNHOSTS = StructPointer<"LIBSSH2_KNOWNHOSTS">;

  /** /data/input/libssh2.h#L366 */
  export type LIBSSH2_AGENT = StructPointer<"LIBSSH2_AGENT">;

  /** /data/input/libssh2.h#L381 */
  export type LIBSSH2_POLLFD = StructPointer<"_LIBSSH2_POLLFD">;

  /** /data/input/libssh2.h#L1330 */
  export type libssh2_trace_handler_func = FnPointer<"libssh2_trace_handler_func">;

  /** /data/input/libssh2.h#L527 */
  export declare function libssh2_init(flags: number): number;

  /** /data/input/libssh2.h#L534 */
  export declare function libssh2_exit(): void;

  /** /data/input/libssh2.h#L541 */
  export declare function libssh2_free(session: Pointer<libssh2.LIBSSH2_SESSION>, ptr: Pointer<void>): void;

  /** /data/input/libssh2.h#L553 */
  export declare function libssh2_session_supported_algs(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    method_type: number,
    algs: Pointer<Pointer<Pointer<number>>>,
  ): number;

  /** /data/input/libssh2.h#L559 */
  export declare function libssh2_session_init_ex(
    my_alloc: FnPointer,
    my_free: FnPointer,
    my_realloc: FnPointer,
    abstract: Pointer<void>,
  ): Pointer<libssh2.LIBSSH2_SESSION>;

  /** /data/input/libssh2.h#L564 */
  export declare function libssh2_session_abstract(session: Pointer<libssh2.LIBSSH2_SESSION>): Pointer<Pointer<void>>;

  /** /data/input/libssh2.h#L566 */
  export declare function libssh2_session_callback_set(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    cbtype: number,
    callback: Pointer<void>,
  ): Pointer<void>;

  /** /data/input/libssh2.h#L568 */
  export declare function libssh2_session_banner_set(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    banner: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L570 */
  export declare function libssh2_banner_set(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    banner: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L573 */
  export declare function libssh2_session_startup(session: Pointer<libssh2.LIBSSH2_SESSION>, sock: number): number;

  /** /data/input/libssh2.h#L574 */
  export declare function libssh2_session_handshake(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    sock: libssh2.libssh2_socket_t,
  ): number;

  /** /data/input/libssh2.h#L576 */
  export declare function libssh2_session_disconnect_ex(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    reason: number,
    description: Pointer<number>,
    lang: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L584 */
  export declare function libssh2_session_free(session: Pointer<libssh2.LIBSSH2_SESSION>): number;

  /** /data/input/libssh2.h#L586 */
  export declare function libssh2_hostkey_hash(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    hash_type: number,
  ): Pointer<number>;

  /** /data/input/libssh2.h#L589 */
  export declare function libssh2_session_hostkey(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    len: Pointer<number>,
    type: Pointer<number>,
  ): Pointer<number>;

  /** /data/input/libssh2.h#L592 */
  export declare function libssh2_session_method_pref(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    method_type: number,
    prefs: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L595 */
  export declare function libssh2_session_methods(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    method_type: number,
  ): Pointer<number>;

  /** /data/input/libssh2.h#L597 */
  export declare function libssh2_session_last_error(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    errmsg: Pointer<Pointer<number>>,
    errmsg_len: Pointer<number>,
    want_buf: number,
  ): number;

  /** /data/input/libssh2.h#L600 */
  export declare function libssh2_session_last_errno(session: Pointer<libssh2.LIBSSH2_SESSION>): number;

  /** /data/input/libssh2.h#L601 */
  export declare function libssh2_session_set_last_error(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    errcode: number,
    errmsg: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L604 */
  export declare function libssh2_session_block_directions(session: Pointer<libssh2.LIBSSH2_SESSION>): number;

  /** /data/input/libssh2.h#L606 */
  export declare function libssh2_session_flag(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    flag: number,
    value: number,
  ): number;

  /** /data/input/libssh2.h#L608 */
  export declare function libssh2_session_banner_get(session: Pointer<libssh2.LIBSSH2_SESSION>): Pointer<number>;

  /** /data/input/libssh2.h#L611 */
  export declare function libssh2_userauth_list(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    username: Pointer<number>,
    username_len: number,
  ): Pointer<number>;

  /** /data/input/libssh2.h#L614 */
  export declare function libssh2_userauth_authenticated(session: Pointer<libssh2.LIBSSH2_SESSION>): number;

  /** /data/input/libssh2.h#L617 */
  export declare function libssh2_userauth_password_ex(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    username: Pointer<number>,
    username_len: number,
    password: Pointer<number>,
    password_len: number,
    passwd_change_cb: FnPointer,
  ): number;

  /** /data/input/libssh2.h#L631 */
  export declare function libssh2_userauth_publickey_fromfile_ex(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    username: Pointer<number>,
    username_len: number,
    publickey: Pointer<number>,
    privatekey: Pointer<number>,
    passphrase: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L646 */
  export declare function libssh2_userauth_publickey(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    username: Pointer<number>,
    pubkeydata: Pointer<number>,
    pubkeydata_len: number,
    sign_callback: FnPointer,
    abstract: Pointer<Pointer<void>>,
  ): number;

  /** /data/input/libssh2.h#L655 */
  export declare function libssh2_userauth_hostbased_fromfile_ex(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    username: Pointer<number>,
    username_len: number,
    publickey: Pointer<number>,
    privatekey: Pointer<number>,
    passphrase: Pointer<number>,
    hostname: Pointer<number>,
    hostname_len: number,
    local_username: Pointer<number>,
    local_username_len: number,
  ): number;

  /** /data/input/libssh2.h#L678 */
  export declare function libssh2_userauth_publickey_frommemory(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    username: Pointer<number>,
    username_len: number,
    publickeyfiledata: Pointer<number>,
    publickeyfiledata_len: number,
    privatekeyfiledata: Pointer<number>,
    privatekeyfiledata_len: number,
    passphrase: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L694 */
  export declare function libssh2_userauth_keyboard_interactive_ex(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    username: Pointer<number>,
    username_len: number,
    response_callback: FnPointer,
  ): number;

  /** /data/input/libssh2.h#L706 */
  export declare function libssh2_poll(fds: Pointer<libssh2.LIBSSH2_POLLFD>, nfds: number, timeout: bigint): number;

  /** /data/input/libssh2.h#L725 */
  export declare function libssh2_channel_open_ex(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    channel_type: Pointer<number>,
    channel_type_len: number,
    window_size: number,
    packet_size: number,
    message: Pointer<number>,
    message_len: number,
  ): Pointer<libssh2.LIBSSH2_CHANNEL>;

  /** /data/input/libssh2.h#L736 */
  export declare function libssh2_channel_direct_tcpip_ex(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    host: Pointer<number>,
    port: number,
    shost: Pointer<number>,
    sport: number,
  ): Pointer<libssh2.LIBSSH2_CHANNEL>;

  /** /data/input/libssh2.h#L742 */
  export declare function libssh2_channel_forward_listen_ex(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    host: Pointer<number>,
    port: number,
    bound_port: Pointer<number>,
    queue_maxsize: number,
  ): Pointer<libssh2.LIBSSH2_LISTENER>;

  /** /data/input/libssh2.h#L748 */
  export declare function libssh2_channel_forward_cancel(listener: Pointer<libssh2.LIBSSH2_LISTENER>): number;

  /** /data/input/libssh2.h#L751 */
  export declare function libssh2_channel_forward_accept(
    listener: Pointer<libssh2.LIBSSH2_LISTENER>,
  ): Pointer<libssh2.LIBSSH2_CHANNEL>;

  /** /data/input/libssh2.h#L753 */
  export declare function libssh2_channel_setenv_ex(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    varname: Pointer<number>,
    varname_len: number,
    value: Pointer<number>,
    value_len: number,
  ): number;

  /** /data/input/libssh2.h#L764 */
  export declare function libssh2_channel_request_pty_ex(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    term: Pointer<number>,
    term_len: number,
    modes: Pointer<number>,
    modes_len: number,
    width: number,
    height: number,
    width_px: number,
    height_px: number,
  ): number;

  /** /data/input/libssh2.h#L780 */
  export declare function libssh2_channel_request_pty_size_ex(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    width: number,
    height: number,
    width_px: number,
    height_px: number,
  ): number;

  /** /data/input/libssh2.h#L787 */
  export declare function libssh2_channel_x11_req_ex(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    single_connection: number,
    auth_proto: Pointer<number>,
    auth_cookie: Pointer<number>,
    screen_number: number,
  ): number;

  /** /data/input/libssh2.h#L795 */
  export declare function libssh2_channel_process_startup(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    request: Pointer<number>,
    request_len: number,
    message: Pointer<number>,
    message_len: number,
  ): number;

  /** /data/input/libssh2.h#L811 */
  export declare function libssh2_channel_read_ex(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    stream_id: number,
    buf: Pointer<number>,
    buflen: number,
  ): libssh2.ssize_t;

  /** /data/input/libssh2.h#L819 */
  export declare function libssh2_poll_channel_read(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    extended: number,
  ): number;

  /** /data/input/libssh2.h#L823 */
  export declare function libssh2_channel_window_read_ex(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    read_avail: Pointer<bigint>,
    window_size_initial: Pointer<bigint>,
  ): bigint;

  /** /data/input/libssh2.h#L831 */
  export declare function libssh2_channel_receive_window_adjust(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    adjustment: bigint,
    force: number,
  ): bigint;

  /** /data/input/libssh2.h#L836 */
  export declare function libssh2_channel_receive_window_adjust2(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    adjustment: bigint,
    force: number,
    storewindow: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L841 */
  export declare function libssh2_channel_write_ex(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    stream_id: number,
    buf: Pointer<number>,
    buflen: number,
  ): libssh2.ssize_t;

  /** /data/input/libssh2.h#L852 */
  export declare function libssh2_channel_window_write_ex(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    window_size_initial: Pointer<bigint>,
  ): bigint;

  /** /data/input/libssh2.h#L857 */
  export declare function libssh2_session_set_blocking(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    blocking: number,
  ): void;

  /** /data/input/libssh2.h#L859 */
  export declare function libssh2_session_get_blocking(session: Pointer<libssh2.LIBSSH2_SESSION>): number;

  /** /data/input/libssh2.h#L861 */
  export declare function libssh2_channel_set_blocking(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    blocking: number,
  ): void;

  /** /data/input/libssh2.h#L864 */
  export declare function libssh2_session_set_timeout(session: Pointer<libssh2.LIBSSH2_SESSION>, timeout: bigint): void;

  /** /data/input/libssh2.h#L866 */
  export declare function libssh2_session_get_timeout(session: Pointer<libssh2.LIBSSH2_SESSION>): bigint;

  /** /data/input/libssh2.h#L869 */
  export declare function libssh2_channel_handle_extended_data(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    ignore_mode: number,
  ): void;

  /** /data/input/libssh2.h#L871 */
  export declare function libssh2_channel_handle_extended_data2(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    ignore_mode: number,
  ): number;

  /** /data/input/libssh2.h#L890 */
  export declare function libssh2_channel_flush_ex(channel: Pointer<libssh2.LIBSSH2_CHANNEL>, streamid: number): number;

  /** /data/input/libssh2.h#L896 */
  export declare function libssh2_channel_get_exit_status(channel: Pointer<libssh2.LIBSSH2_CHANNEL>): number;

  /** /data/input/libssh2.h#L897 */
  export declare function libssh2_channel_get_exit_signal(
    channel: Pointer<libssh2.LIBSSH2_CHANNEL>,
    exitsignal: Pointer<Pointer<number>>,
    exitsignal_len: Pointer<number>,
    errmsg: Pointer<Pointer<number>>,
    errmsg_len: Pointer<number>,
    langtag: Pointer<Pointer<number>>,
    langtag_len: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L904 */
  export declare function libssh2_channel_send_eof(channel: Pointer<libssh2.LIBSSH2_CHANNEL>): number;

  /** /data/input/libssh2.h#L905 */
  export declare function libssh2_channel_eof(channel: Pointer<libssh2.LIBSSH2_CHANNEL>): number;

  /** /data/input/libssh2.h#L906 */
  export declare function libssh2_channel_wait_eof(channel: Pointer<libssh2.LIBSSH2_CHANNEL>): number;

  /** /data/input/libssh2.h#L907 */
  export declare function libssh2_channel_close(channel: Pointer<libssh2.LIBSSH2_CHANNEL>): number;

  /** /data/input/libssh2.h#L908 */
  export declare function libssh2_channel_wait_closed(channel: Pointer<libssh2.LIBSSH2_CHANNEL>): number;

  /** /data/input/libssh2.h#L909 */
  export declare function libssh2_channel_free(channel: Pointer<libssh2.LIBSSH2_CHANNEL>): number;

  /** /data/input/libssh2.h#L912 */
  export declare function libssh2_scp_recv(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    path: Pointer<number>,
    sb: Pointer<StructPointer<"stat">>,
  ): Pointer<libssh2.LIBSSH2_CHANNEL>;

  /** /data/input/libssh2.h#L916 */
  export declare function libssh2_scp_recv2(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    path: Pointer<number>,
    sb: Pointer<libssh2.libssh2_struct_stat>,
  ): Pointer<libssh2.LIBSSH2_CHANNEL>;

  /** /data/input/libssh2.h#L919 */
  export declare function libssh2_scp_send_ex(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    path: Pointer<number>,
    mode: number,
    size: number,
    mtime: bigint,
    atime: bigint,
  ): Pointer<libssh2.LIBSSH2_CHANNEL>;

  /** /data/input/libssh2.h#L924 */
  export declare function libssh2_scp_send64(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    path: Pointer<number>,
    mode: number,
    size: libssh2.libssh2_int64_t,
    mtime: libssh2.time_t,
    atime: libssh2.time_t,
  ): Pointer<libssh2.LIBSSH2_CHANNEL>;

  /** /data/input/libssh2.h#L930 */
  export declare function libssh2_base64_decode(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    dest: Pointer<Pointer<number>>,
    dest_len: Pointer<number>,
    src: Pointer<number>,
    src_len: number,
  ): number;

  /** /data/input/libssh2.h#L935 */
  export declare function libssh2_version(req_version_num: number): Pointer<number>;

  /** /data/input/libssh2.h#L955 */
  export declare function libssh2_knownhost_init(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
  ): Pointer<libssh2.LIBSSH2_KNOWNHOSTS>;

  /** /data/input/libssh2.h#L1003 */
  export declare function libssh2_knownhost_add(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    host: Pointer<number>,
    salt: Pointer<number>,
    key: Pointer<number>,
    keylen: number,
    typemask: number,
    store: Pointer<Pointer<StructPointer<"libssh2_knownhost">>>,
  ): number;

  /** /data/input/libssh2.h#L1037 */
  export declare function libssh2_knownhost_addc(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    host: Pointer<number>,
    salt: Pointer<number>,
    key: Pointer<number>,
    keylen: number,
    comment: Pointer<number>,
    commentlen: number,
    typemask: number,
    store: Pointer<Pointer<StructPointer<"libssh2_knownhost">>>,
  ): number;

  /** /data/input/libssh2.h#L1069 */
  export declare function libssh2_knownhost_check(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    host: Pointer<number>,
    key: Pointer<number>,
    keylen: number,
    typemask: number,
    knownhost: Pointer<Pointer<StructPointer<"libssh2_knownhost">>>,
  ): number;

  /** /data/input/libssh2.h#L1077 */
  export declare function libssh2_knownhost_checkp(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    host: Pointer<number>,
    port: number,
    key: Pointer<number>,
    keylen: number,
    typemask: number,
    knownhost: Pointer<Pointer<StructPointer<"libssh2_knownhost">>>,
  ): number;

  /** /data/input/libssh2.h#L1091 */
  export declare function libssh2_knownhost_del(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    entry: Pointer<StructPointer<"libssh2_knownhost">>,
  ): number;

  /** /data/input/libssh2.h#L1101 */
  export declare function libssh2_knownhost_free(hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>): void;

  /** /data/input/libssh2.h#L1112 */
  export declare function libssh2_knownhost_readline(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    line: Pointer<number>,
    len: number,
    type: number,
  ): number;

  /** /data/input/libssh2.h#L1129 */
  export declare function libssh2_knownhost_readfile(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    filename: Pointer<number>,
    type: number,
  ): number;

  /** /data/input/libssh2.h#L1145 */
  export declare function libssh2_knownhost_writeline(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    known: Pointer<StructPointer<"libssh2_knownhost">>,
    buffer: Pointer<number>,
    buflen: number,
    outlen: Pointer<number>,
    type: number,
  ): number;

  /** /data/input/libssh2.h#L1161 */
  export declare function libssh2_knownhost_writefile(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    filename: Pointer<number>,
    type: number,
  ): number;

  /** /data/input/libssh2.h#L1177 */
  export declare function libssh2_knownhost_get(
    hosts: Pointer<libssh2.LIBSSH2_KNOWNHOSTS>,
    store: Pointer<Pointer<StructPointer<"libssh2_knownhost">>>,
    prev: Pointer<StructPointer<"libssh2_knownhost">>,
  ): number;

  /** /data/input/libssh2.h#L1198 */
  export declare function libssh2_agent_init(session: Pointer<libssh2.LIBSSH2_SESSION>): Pointer<libssh2.LIBSSH2_AGENT>;

  /** /data/input/libssh2.h#L1208 */
  export declare function libssh2_agent_connect(agent: Pointer<libssh2.LIBSSH2_AGENT>): number;

  /** /data/input/libssh2.h#L1218 */
  export declare function libssh2_agent_list_identities(agent: Pointer<libssh2.LIBSSH2_AGENT>): number;

  /** /data/input/libssh2.h#L1233 */
  export declare function libssh2_agent_get_identity(
    agent: Pointer<libssh2.LIBSSH2_AGENT>,
    store: Pointer<Pointer<StructPointer<"libssh2_agent_publickey">>>,
    prev: Pointer<StructPointer<"libssh2_agent_publickey">>,
  ): number;

  /** /data/input/libssh2.h#L1245 */
  export declare function libssh2_agent_userauth(
    agent: Pointer<libssh2.LIBSSH2_AGENT>,
    username: Pointer<number>,
    identity: Pointer<StructPointer<"libssh2_agent_publickey">>,
  ): number;

  /** /data/input/libssh2.h#L1257 */
  export declare function libssh2_agent_disconnect(agent: Pointer<libssh2.LIBSSH2_AGENT>): number;

  /** /data/input/libssh2.h#L1266 */
  export declare function libssh2_agent_free(agent: Pointer<libssh2.LIBSSH2_AGENT>): void;

  /** /data/input/libssh2.h#L1275 */
  export declare function libssh2_agent_set_identity_path(
    agent: Pointer<libssh2.LIBSSH2_AGENT>,
    path: Pointer<number>,
  ): void;

  /** /data/input/libssh2.h#L1285 */
  export declare function libssh2_agent_get_identity_path(agent: Pointer<libssh2.LIBSSH2_AGENT>): Pointer<number>;

  /** /data/input/libssh2.h#L1300 */
  export declare function libssh2_keepalive_config(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    want_reply: number,
    interval: number,
  ): void;

  /** /data/input/libssh2.h#L1312 */
  export declare function libssh2_keepalive_send(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    seconds_to_next: Pointer<number>,
  ): number;

  /** /data/input/libssh2.h#L1319 */
  export declare function libssh2_trace(session: Pointer<libssh2.LIBSSH2_SESSION>, bitmask: number): number;

  /** /data/input/libssh2.h#L1334 */
  export declare function libssh2_trace_sethandler(
    session: Pointer<libssh2.LIBSSH2_SESSION>,
    context: Pointer<void>,
    callback: libssh2.libssh2_trace_handler_func,
  ): number;

  export declare function $$close(): void;
}
