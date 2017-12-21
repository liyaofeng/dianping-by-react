import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './index.css'

import NavigatioinBar from '../../components/NavigationBar'
import GoodsDetailHeader from './goodsDetailHeader'
import GoodsDetailShop from './goodsDetailShop'
import GoodsDetail from './goodsDetail'
import { HomeLikeItem } from '../Home/homeLike'

class Detail extends React.Component {

	render() {
		return (
			<div>
				<NavigatioinBar title='团购详情' click={this.click.bind(this)}/>
				<GoodsDetailHeader />
				<GoodsDetailShop />
				<GoodsDetail />
				<div className="goodsDetailBuyBtn">
					立即购买
				</div>
				<div className="goodsDetailMoreGoods">
					<div className="goodsDetailMoreGoodsTitle">
						看了此团购的人也看了
					</div>
					<div onClick={this.clickItem.bind(this, 0)}>
						<HomeLikeItem />
					</div>
					<div onClick={this.clickItem.bind(this, 0)}>
						<HomeLikeItem/>
					</div>
					<div onClick={this.clickItem.bind(this, 0)}>
						<HomeLikeItem/>
					</div>
					<div onClick={this.clickItem.bind(this, 0)}>
						<HomeLikeItem/>
					</div>
				</div>
			</div>
		)
	}

	click() {
		this.props.history.push('/')
	}

	clickItem(id) {
		this.props.history.push('/detail/' + id)
	}
}

export default withRouter(Detail)