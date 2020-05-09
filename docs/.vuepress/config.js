module.exports = {
	title: 'Hello VuePress',
	description: 'Just playing around',
	themeConfig: {
		displayAllHeaders: true,
		sidebarDepth: 1,
		sidebar: [
			{
				title: 'css tricks',   // 必要的
				path: '/test2/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/test2/',
					'/test2/one',
					'/test2/test',
				]
			},
			{
				title: 'js tricks',   // 必要的
				path: '/test1/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/test1/',
					'/test1/one',
					'/test1/test',
				]
			},
			{
				title: 'vue tricks',   // 必要的
				path: '/vue/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/vue/',
					'/vue/one',
					'/vue/test',
				]
			}
		]
	}
}
