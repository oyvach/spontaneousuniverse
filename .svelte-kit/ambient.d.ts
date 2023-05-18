
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const AS: string;
	export const LDFLAGS: string;
	export const AR: string;
	export const ac_cv_func_malloc_0_nonnull: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const ac_cv_func_realloc_0_nonnull: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const TERM: string;
	export const HOST: string;
	export const OBJC: string;
	export const CLICOLOR: string;
	export const NM: string;
	export const npm_config_metrics_registry: string;
	export const TMPDIR: string;
	export const CPPFLAGS: string;
	export const npm_config_global_prefix: string;
	export const PAGESTUFF: string;
	export const CONDA_SHLVL: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MESA_DIR: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const LIPO: string;
	export const SIZE: string;
	export const NMEDIT: string;
	export const SDKROOT: string;
	export const COLOR: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_noproxy: string;
	export const INSTALL_NAME_TOOL: string;
	export const CXX_FOR_BUILD: string;
	export const npm_config_local_prefix: string;
	export const SEGEDIT: string;
	export const SEG_HACK: string;
	export const USER: string;
	export const LS_COLORS: string;
	export const CLANGXX: string;
	export const COMMAND_MODE: string;
	export const LIBTOOL: string;
	export const npm_config_globalconfig: string;
	export const CONDA_EXE: string;
	export const CONDA_TOOLCHAIN_BUILD: string;
	export const OTOOL: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const CXXFLAGS: string;
	export const BASH_SILENCE_DEPRECATION_WARNING: string;
	export const STRINGS: string;
	export const CONDA_TOOLCHAIN_HOST: string;
	export const LSCOLORS: string;
	export const _CE_CONDA: string;
	export const CHECKSYMS: string;
	export const PATH: string;
	export const MESON_ARGS: string;
	export const npm_package_json: string;
	export const npm_config_engine_strict: string;
	export const _: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const __CFBundleIdentifier: string;
	export const CONDA_PREFIX: string;
	export const DEBUG_CXXFLAGS: string;
	export const LD: string;
	export const BUILD: string;
	export const npm_command: string;
	export const PWD: string;
	export const STRIP: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const CMAKE_ARGS: string;
	export const npm_package_name: string;
	export const npm_config_resolution_mode: string;
	export const ITERM_PROFILE: string;
	export const PYTHONSTARTUP: string;
	export const XPC_FLAGS: string;
	export const REDO_PREBINDING: string;
	export const MESASDK_ROOT: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const _CE_M: string;
	export const CLANG: string;
	export const CXX: string;
	export const CC_FOR_BUILD: string;
	export const XPC_SERVICE_NAME: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const SHLVL: string;
	export const GREP_OPTIONS: string;
	export const LC_TERMINAL_VERSION: string;
	export const CFLAGS: string;
	export const _CONDA_PYTHON_SYSCONFIGDATA_NAME: string;
	export const PGPLOT_DIR: string;
	export const ITERM_SESSION_ID: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const PYTHONPATH: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_lifecycle_script: string;
	export const build_alias: string;
	export const LC_CTYPE: string;
	export const CONDA_DEFAULT_ENV: string;
	export const OMPI_CXX: string;
	export const PKG_CONFIG: string;
	export const npm_config_user_agent: string;
	export const DEBUG_CFLAGS: string;
	export const RANLIB: string;
	export const CMAKE_PREFIX_PATH: string;
	export const LC_TERMINAL: string;
	export const SEG_ADDR_TABLE: string;
	export const DISPLAY: string;
	export const CC: string;
	export const host_alias: string;
	export const LDFLAGS_LD: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const OBJC_FOR_BUILD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		AS: string;
		LDFLAGS: string;
		AR: string;
		ac_cv_func_malloc_0_nonnull: string;
		TERM_PROGRAM: string;
		NODE: string;
		ac_cv_func_realloc_0_nonnull: string;
		INIT_CWD: string;
		SHELL: string;
		TERM: string;
		HOST: string;
		OBJC: string;
		CLICOLOR: string;
		NM: string;
		npm_config_metrics_registry: string;
		TMPDIR: string;
		CPPFLAGS: string;
		npm_config_global_prefix: string;
		PAGESTUFF: string;
		CONDA_SHLVL: string;
		TERM_PROGRAM_VERSION: string;
		MESA_DIR: string;
		CONDA_PROMPT_MODIFIER: string;
		LIPO: string;
		SIZE: string;
		NMEDIT: string;
		SDKROOT: string;
		COLOR: string;
		TERM_SESSION_ID: string;
		npm_config_noproxy: string;
		INSTALL_NAME_TOOL: string;
		CXX_FOR_BUILD: string;
		npm_config_local_prefix: string;
		SEGEDIT: string;
		SEG_HACK: string;
		USER: string;
		LS_COLORS: string;
		CLANGXX: string;
		COMMAND_MODE: string;
		LIBTOOL: string;
		npm_config_globalconfig: string;
		CONDA_EXE: string;
		CONDA_TOOLCHAIN_BUILD: string;
		OTOOL: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		CXXFLAGS: string;
		BASH_SILENCE_DEPRECATION_WARNING: string;
		STRINGS: string;
		CONDA_TOOLCHAIN_HOST: string;
		LSCOLORS: string;
		_CE_CONDA: string;
		CHECKSYMS: string;
		PATH: string;
		MESON_ARGS: string;
		npm_package_json: string;
		npm_config_engine_strict: string;
		_: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		__CFBundleIdentifier: string;
		CONDA_PREFIX: string;
		DEBUG_CXXFLAGS: string;
		LD: string;
		BUILD: string;
		npm_command: string;
		PWD: string;
		STRIP: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		CMAKE_ARGS: string;
		npm_package_name: string;
		npm_config_resolution_mode: string;
		ITERM_PROFILE: string;
		PYTHONSTARTUP: string;
		XPC_FLAGS: string;
		REDO_PREBINDING: string;
		MESASDK_ROOT: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		_CE_M: string;
		CLANG: string;
		CXX: string;
		CC_FOR_BUILD: string;
		XPC_SERVICE_NAME: string;
		HOME: string;
		COLORFGBG: string;
		SHLVL: string;
		GREP_OPTIONS: string;
		LC_TERMINAL_VERSION: string;
		CFLAGS: string;
		_CONDA_PYTHON_SYSCONFIGDATA_NAME: string;
		PGPLOT_DIR: string;
		ITERM_SESSION_ID: string;
		npm_config_cache: string;
		LOGNAME: string;
		PYTHONPATH: string;
		CONDA_PYTHON_EXE: string;
		npm_lifecycle_script: string;
		build_alias: string;
		LC_CTYPE: string;
		CONDA_DEFAULT_ENV: string;
		OMPI_CXX: string;
		PKG_CONFIG: string;
		npm_config_user_agent: string;
		DEBUG_CFLAGS: string;
		RANLIB: string;
		CMAKE_PREFIX_PATH: string;
		LC_TERMINAL: string;
		SEG_ADDR_TABLE: string;
		DISPLAY: string;
		CC: string;
		host_alias: string;
		LDFLAGS_LD: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
		OBJC_FOR_BUILD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
