import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import '../../iconfonts/iconfont/iconfont.css'
import './homeHeader.css'

class HomeHeader extends React.Component {
	render() {
		return (
			<div className="header">
				<Link to='/city' style={{textDecoration:"none"}}>
				<div className="city">
					{this.props.cityName}
					<b className="icon iconfont headerIcon">&#xe6a6;</b>
				</div>
				</Link>
				<div className="search">
					<b className="icon iconfont headerIcon">&#xe6ac;</b>
					<input placeholder="请输入关键字" />
				</div>
				<div className="personal">
	                <b class="icon iconfont headerIcon">&#xe6b8;</b>
                </div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		cityName: state.userInfo.cityName
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader))
// export default HomeHeader