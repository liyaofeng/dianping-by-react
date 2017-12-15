import React from 'react'
import { connect } from 'react-redux'

import '../../iconfonts/iconfontHeader/iconfont.css'
import './homeHeader.css'

class HomeHeader extends React.Component {

	render() {
		return (
			<div className="header">
				<div className="city">
					{this.props.cityName}
					<b class="icon iconfont headerIcon">&#xe6a6;</b>
				</div>
				<div className="search">
					<b class="icon iconfont headerIcon">&#xe6ac;</b>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)