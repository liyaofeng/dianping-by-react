import React from 'react'
import { withRouter } from 'react-router-dom'

import '../iconfonts/iconfont/iconfont.css'
import './NavigationBar.css'

class NavigationBar extends React.Component {
	render() {
		return (
			<div className="bar">
				<b className="icon iconfont backIcon" onClick={this.back.bind(this)}>&#xe697;</b>
				<div className="titleView">
					{this.props.title}
				</div>
			</div>
		)
	}

	back() {
		this.props.history.goBack()
	}
}

export default withRouter(NavigationBar)