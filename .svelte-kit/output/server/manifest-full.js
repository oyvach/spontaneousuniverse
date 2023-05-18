export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","MG_overview.jpg","SN1a.jpg","SSB_cartoon.pdf","cakediagram.png","favicon.png","forskningsradet.jpg","header.jpeg","hubble_tension.jpg","illustrasjon.jpeg","uio.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".pdf":"application/pdf",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.069068c3.js","app":"_app/immutable/entry/app.2730b126.js","imports":["_app/immutable/entry/start.069068c3.js","_app/immutable/chunks/index.fe3c98df.js","_app/immutable/chunks/singletons.48240e55.js","_app/immutable/chunks/paths.64b3ce66.js","_app/immutable/entry/app.2730b126.js","_app/immutable/chunks/index.fe3c98df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/acknowledgements",
				pattern: /^\/acknowledgements\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/aest",
				pattern: /^\/aest\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/cbh",
				pattern: /^\/cbh\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/publications",
				pattern: /^\/publications\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/symmetron",
				pattern: /^\/symmetron\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
