import { get, post } from './index'

export function getOnSale() {
	return get('https://www.easy-mock.com/mock/5a3250da9279d01e69895e46/base/home/on_sale')
}

export function requestLike(page, city) {
	return post('https://www.easy-mock.com/mock/5a3250da9279d01e69895e46/base/home/like', {page, city})
}