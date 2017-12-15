import { actionType } from '../actions/userInfo'

const initialState = {}

export default function userInfo(state = initialState, action) {
	switch (action.type) {
		case actionType.USERINFO_UPDATE: 
			return {...state, cityName: action.cityName}
		default:
			return state
	}
}