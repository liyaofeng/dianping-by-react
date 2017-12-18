import React from 'react'
import { withRouter } from 'react-router-dom'

import "./index.css"

import SearchHeader from './searchHeader'
import HomeLike from '../Home/homeLike'

var resultList

class Search extends React.Component {

	render() {
		return (
			<div>
				<SearchHeader shouldLoad={this.shouldLoad.bind(this)}/>
				<HomeLike getInstance={(hl) => {
					resultList = hl
				}}/>
			</div>
		)
	}

	shouldLoad(keywork) {
		resultList.reload()
	}
}

export default withRouter(Search)