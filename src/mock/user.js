import Mock from 'mockjs'
const Random = Mock.Random

const userInfo = () => ({
	userId: Random.id(),
	userImg: Random.dataImage('200x160', '这是图片中的文本'),
	userNmae: Random.cname()
})
const menuList = () => [{
		id: '0',
		name: 'Home',
		title: '首页',
		path: '/home',
		menuIcon: 'el-icon-s-home'
	},
	{
		id: '1',
		name: 'User',
		title: '用户信息',
		path: '/user',
		menuIcon: 'el-icon-user-solid',
		children: [{
				id: '1-1',
				name: 'UserInfo',
				title: '基础信息',
				path: '/user/info',
				menuIcon: 'el-icon-tickets'
			},
			{
				id: '1-2',
				name: 'UserResetPsd',
				title: '修改密码',
				path: '/user/resetPsd',
				menuIcon: 'el-icon-edit'
			},
			{
				id: '1-3',
				name: 'UserPermission',
				title: '页面权限',
				path: '/user/permission',
				menuIcon: 'el-icon-s-help'
			}
		]
	},
	{
		id: '2',
		name: 'System',
		title: '系统管理',
		path: '/system',
		menuIcon: 'el-icon-s-tools',
		children: [{
				id: '2-1',
				name: 'SystemUser',
				title: '用户管理',
				path: '/system/user',
				menuIcon: 'el-icon-s-custom'
			},
			{
				id: '2-2',
				name: 'SystemRole',
				title: '角色管理',
				path: '/system/role',
				menuIcon: 'el-icon-date'
			}
		]
	}
]
const requires = [{
	url: '/login',
	type: 'post',
	response: userInfo
}, {
	url: '/menu/list',
	type: 'post',
	response: menuList
}]

export default requires