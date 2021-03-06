import React from 'react';

import './index.css'

import HomeHeader from './homeHeader'
import HomeCategory from './homeCategory'
import HomeOnsale from './homeOnsale'
import HomeLike from './homeLike'

class Home extends React.Component {

	render() {
		return (
			<div className="home">
				<HomeCategory />
				<HomeOnsale />
				<HomeLike />
				<HomeHeader />
			</div>
		)
	}
}

export default Home;