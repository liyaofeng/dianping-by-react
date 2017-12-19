import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './index.css'

import NavigatioinBar from '../../components/NavigationBar'
import GoodsDetailHeader from './goodsDetailHeader'

class Detail extends React.Component {

	render() {
		return (
			<div>
				<NavigatioinBar title='团购详情'/>
				<GoodsDetailHeader />
			</div>
		)
	}
}

export default withRouter(Detail)