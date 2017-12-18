import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
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
	}

	render() {
		return (
			<div>
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/city" component={City} />
					<Route path="/user" component={User} />
					<Route path="/detail/:id" component={Detail} />
					<Route path="/search/:keyword?" component={Search} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		)
	}

	componentDidMount() {
		let cityName = LocalStorage.getItem(CITYNAME)
		if (cityName == null) {
			cityName = '广州'
		}
		this.props.updateCity(cityName)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))