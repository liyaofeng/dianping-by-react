import React from 'react'
import {withRouter } from 'react-router-dom'

import '../../iconfonts/iconfont/iconfont.css'
import './searchHeader.css'

class SearchHeader extends React.Component {

	render() {
		return (
			<div className="searchHeader">
				<b className="icon iconfont searchBackIcon" onClick={this.back.bind(this)}>&#xe697;</b>
				<div className="searchHeaderInputSupView">
					<b className="icon iconfont searchHeaderIcon">&#xe6ac;</b>
					<input type="search" defaultValue={this.props.match.params.keyword} placeholder="请输入关键字" onKeyPress={this.pressSearchInputKeyboard.bind(this)} />
				</div>
			</div>
		)
	}

	back() {
		this.props.history.push('/')
	}

	pressSearchInputKeyboard(event) {
		if (event.key === 'Enter') {
			event.target.blur()
			this.props.history.push('/search/' + event.target.value)
			this.props.shouldLoad()
		}
	}
}

export default withRouter(SearchHeader)