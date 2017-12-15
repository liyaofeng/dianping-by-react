export const actionType = {
	USERINFO_UPDATE: 'ACTION_TYPE_USERINFO_UPDATE'
}

export function updateCity(name) {
	return {
		type: actionType.USERINFO_UPDATE,
		cityName: name
	}
}