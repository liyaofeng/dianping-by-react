import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Home from './Home/index'
import City from './City/index'
import User from './User/index'
import Search from './Search/index'
import Detail from './Detail/index'
import NotFound from './404'

import LocalStorage from '../utils/localStorage'
import * as UserInfoActions from '../actions/userInfo'

export const CITYNAME = "LOCAL_STORAGE_KEY_CITY_NAME"

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			initDone: true
		}
	}

	render() {
		return (
			<div>
				{
					!this.state.initDone 
					? <div>正在加载。。。</div>
					: <Switch>
						<Route exact path="/" component={Home} />
						<Route path="/city" component={City} />
						<Route path="/user" component={User} />
						<Route path="/search" component={Search} />
						<Route path="/detail" component={Detail} />
						<Route path="*" component={NotFound} />
					</Switch>
				}
			</div>
		)
	}

	componentDidMount() {
		let cityName = LocalStorage.getItem(CITYNAME)
		if (cityName == null) {
			cityName = '广州'
		}
		console.log(cityName)
		this.props.updateCity(cityName)

		// setTimeout(() => {
		// 	this.setState({
		// 		initDone: true
		// 	});
		// }, 1000);
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		updateCity: bindActionCreators(UserInfoActions.updateCity, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)