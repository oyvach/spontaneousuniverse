import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.1ea06cf7.js","_app/immutable/chunks/index.fe3c98df.js","_app/immutable/chunks/paths.38065c9a.js"];
export const stylesheets = ["_app/immutable/assets/0.17137117.css"];
export const fonts = [];
