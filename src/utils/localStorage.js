export default {
	getItem(key) {
		let value
		try {
			value = localStorage.getItem(key)
		}
		catch (err) {
			// if (__DEV__) {
				console.error('localStorage.getItem 报错：' + err.message)
			// }
		}
		finally {
			return value
		}
	},

	setItem(key, value) {
		try {
			localStorage.setItem(key, value)
		}
		catch (err) {
			// if (__DEV__) { 
				console.error('localStorage.setItem 报错：' + err.message)
			// }
		}
	}
}