import Mock from 'mockjs'
import user from './user'

const mocks = [
  ...user
]

mocks.forEach(mockItem => {
	Mock.mock(`/api${mockItem.url}`, mockItem.type || 'get', mockItem.response )
})

console.log('********mock启动***********')