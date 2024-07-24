export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DuUMQraU.js","app":"_app/immutable/entry/app.DoEyEZuf.js","imports":["_app/immutable/entry/start.DuUMQraU.js","_app/immutable/chunks/entry.DKSIAX38.js","_app/immutable/chunks/scheduler.CC9PlWuQ.js","_app/immutable/chunks/index.DJAQfKpo.js","_app/immutable/entry/app.DoEyEZuf.js","_app/immutable/chunks/scheduler.CC9PlWuQ.js","_app/immutable/chunks/index.BRIbHbnF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/chat",
				pattern: /^\/chat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
