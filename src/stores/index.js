import { createStore } from 'redux'

import reducer from '../reducers/index'

export default function initialStore(initialState) {
	const store = createStore(reducer, initialState, 
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}