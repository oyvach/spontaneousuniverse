export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","MG_overview.jpg","SN1a.jpg","SSB_cartoon.pdf","cakediagram.png","favicon.png","forskningsradet.jpg","header.jpeg","hubble_tension.jpg","illustrasjon.jpeg","uio.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".pdf":"application/pdf",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.8507a143.js","app":"_app/immutable/entry/app.595e464e.js","imports":["_app/immutable/entry/start.8507a143.js","_app/immutable/chunks/index.fe3c98df.js","_app/immutable/chunks/singletons.763b705a.js","_app/immutable/chunks/paths.38065c9a.js","_app/immutable/entry/app.595e464e.js","_app/immutable/chunks/index.fe3c98df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
