import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createHistory from 'history/createBrowserHistory';

import './index.css'

import LocalStorage from '../../utils/localStorage'
import * as UserInfoActions from '../../actions/userInfo'
import NavigationBar from '../../components/NavigationBar'
import { CITYNAME } from '../app'
import { requestLocation } from '../../services/city'

const cityArr = ["北京", "上海", "杭州", "广州", "苏州", "深圳", "南京", "天津", "重庆", "厦门", "武汉", "西安"]

class City extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			locationType: '',
		}
	}

	render() {
		let cityViewArr = []
		cityArr.forEach((city, index) => {
			cityViewArr.push(
				<div className="cityViewCityItem" onClick={this.touchCityItem.bind(this, index)} key={index}>
					{city}
				</div>
			)
		})

		return (
			<div>
				<NavigationBar title="城市选择" />
				<div className="cityViewCurrentCity">
					<span className="cityViewCity">{this.props.cityName}</span>
					<span className="cityViewLocationType" onClick={this.location.bind(this)}>{this.state.locationType}</span>
				</div>
				<div className="cityViewHotCity">
					<b className="cityViewHotCityTitle">热门城市</b>
					<div className="cityViewHotCitySupView">
						{cityViewArr}
					</div>
				</div>
			</div>
		)
	}

	touchCityItem(index) {
		this.props.updateCity(cityArr[index])
		LocalStorage.setItem(CITYNAME, cityArr[index])
		createHistory().goBack()
	}

	componentDidMount() {
		this.location()
	}

	location() {
		this.setState({
			locationType: ''
		})

		requestLocation()
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				console.log(json)
			})
			.catch((error) => {
				this.setState({
					locationType: '定位失败，点击重试！'
				})
			})
	}
}


function mapStateToProps(state) {
	return {
		cityName: state.userInfo.cityName
	}
}

function mapDispatchToProps(dispatch) {
	return {
		updateCity: bindActionCreators(UserInfoActions.updateCity, dispatch)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(City))