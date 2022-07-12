export const manifest = {
	appDir: "_app",
	assets: new Set(["cartoonist.jpeg","favicon.png","graph-orange.jpg","graph-paper-orange-white-grid-2880x1800-c2-ffffff-ff8c00-l2-5-145-a-0-f-20.svg","graph.jpg","journalism.jpeg","photography.jpeg","unca.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-f0f3890c.js","imports":["start-f0f3890c.js","chunks/index-354bd306.js","chunks/preload-helper-60cab3ee.js"],"stylesheets":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "blog_temp",
				pattern: /^\/blog_temp\/?$/,
				names: [],
				types: [],
				path: "/blog_temp",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "committees",
				pattern: /^\/committees\/?$/,
				names: [],
				types: [],
				path: "/committees",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "team",
				pattern: /^\/team\/?$/,
				names: [],
				types: [],
				path: "/team",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
