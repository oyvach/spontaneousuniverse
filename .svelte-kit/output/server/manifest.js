export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","MG_overview.jpg","SN1a.jpg","SSB_cartoon.pdf","cakediagram.png","favicon.png","forskningsradet.jpg","header.jpeg","hubble_tension.jpg","illustrasjon.jpeg","uio.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".pdf":"application/pdf",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.069068c3.js","app":"_app/immutable/entry/app.2730b126.js","imports":["_app/immutable/entry/start.069068c3.js","_app/immutable/chunks/index.fe3c98df.js","_app/immutable/chunks/singletons.48240e55.js","_app/immutable/chunks/paths.64b3ce66.js","_app/immutable/entry/app.2730b126.js","_app/immutable/chunks/index.fe3c98df.js"],"stylesheets":[],"fonts":[]},
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
