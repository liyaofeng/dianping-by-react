import React from 'react'
import ClassNames from 'classnames'
import Spinner from 'react-spinkit'
import { withRouter } from 'react-router-dom'

import './homeOnsale.css'

import { getOnSale } from '../../services/home'

class HomeCategory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			onsaleArr: []
		}
	}

	render() {
		let saleArr = []
		if (this.state.isLoading) {
			saleArr.push(
				<Spinner name="chasing-dots" className="loading" />
			)
		}
		else {
			this.state.onsaleArr.forEach((sale, index) => {
				if (index == 0) {
					saleArr.push(
						<h3 className="onsaleTitle">
							超值特惠
						</h3>
					)
				}
				saleArr.push(
					// <div key={index} className={ClassNames("onsaleItem", {onsaleItemBottomLine: index < 3, onsaleItemRightLine: index % 3 != 2})}>
					<div key={index} className={ClassNames("onsaleItem")} onClick={this.click.bind(this)}>
						<h4>{sale.title}</h4>
						<div>{sale.subTitle}</div>
						<img src={sale.img} />
					</div>
				)
			})
			if (saleArr.length == 0) {
				saleArr.push(
					<div key="1" className="reload">
						重新加载
					</div>
				)
			}
		}

		return (
			<div className="onsale">
				{saleArr}
	        </div>
		)
	}

	componentDidMount() {
		getOnSale()
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				this.setState({
					isLoading: false,
					onsaleArr: json.data.sale
				})
			})
			.catch(() => {
				this.setState({
					isLoading: false,
					onsaleArr: []
				})
			})
	}

	click() {
		this.props.history.push('/business/0')
	}
}

export default withRouter(HomeCategory)