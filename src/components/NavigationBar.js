import React from 'react'
import createHistory from 'history/createBrowserHistory';

import '../iconfonts/iconfont/iconfont.css'
import './NavigationBar.css'

class NavigationBar extends React.Component {
	render() {
		return (
			<div className="bar">
				<b className="icon iconfont backIcon" onClick={this.back}>&#xe697;</b>
				<div className="titleView">
					{this.props.title}
				</div>
			</div>
		)
	}

	back() {
		createHistory().goBack()
	}
}

export default NavigationBar;