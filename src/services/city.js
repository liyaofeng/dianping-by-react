import { post } from './index'

export function requestLocation() {
	return post('https://api.map.baidu.com/location/ip')
}