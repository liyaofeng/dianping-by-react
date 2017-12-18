import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import './homeLike.css'

import HomeLikeMore from './homeLikeMore'
import { HOMELIKEMORE_STATUE } from './homeLikeMore'
import { requestLike } from '../../services/home'

class HomeLike extends React.Component {
	constructor(props) {
		super(props);

	    const { getInstance } = props
	    if (typeof getInstance === 'function') {
	      getInstance(this)
	    }

		this.state = {
			page: 0,
			likeArr: [],
			moreStatus: HOMELIKEMORE_STATUE.statusNormal
		}
	}

	render() {
		let itemArr = []
		this.state.likeArr.forEach((likeItem, index) => {
			itemArr.push(
				<div key={index} onClick={this.clickItem.bind(this, likeItem.id)}>
					<HomeLikeItem data={likeItem} />
				</div>
			)
		})

		return (
			<div className="homeLike">
				<div className="homeTitle">猜你喜欢</div>
				<div className="homeItemSupView">
					{itemArr}
					<HomeLikeMore status={this.state.moreStatus} shouldLoad={this.loadLike.bind(this)} />
				</div>
			</div>
		)
	}

	loadLike() {
		if (this.state.moreStatus == HOMELIKEMORE_STATUE.statusLoading) {
			return
		}
		
		this.setState({
			moreStatus: HOMELIKEMORE_STATUE.statusLoading
		})

		requestLike(this.state.page, this.props.cityName)
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				let state = this.state
				let data = json.data.like
				this.setState({
					page: state.page + 1,
					likeArr: [...state.likeArr, ...data],
					moreStatus: data.length < 20 ? HOMELIKEMORE_STATUE.statusNodata : HOMELIKEMORE_STATUE.statusNormal
				})
			})
			.catch (() => {
				this.setState({
					moreStatus: HOMELIKEMORE_STATUE.statusError
				})
			})
	}

	reload() {
		this.setState({
			moreStatus: HOMELIKEMORE_STATUE.statusNormal,
			likeArr: [],
			page: 0
		}) 

		this.loadLike()
	}

	clickItem(id) {
		this.props.history.push('/detail/' + id)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeLike, { withRef: true }))

class HomeLikeItem extends React.Component {
	render() {
		return (
			<div className="homeLikeItem">
				<img className="likeImg" src={this.props.data.img} />
				<div className="likeInfo">
					<div className="likeInfoTitle">
						<div className="title">
							{this.props.data.title}
						</div>
						<div className="distance">
							{this.props.data.distance}m
						</div>
					</div>
					<div className="description">
						{this.props.data.description}
					</div>
					<div className="price">
						<div className="currentPrice">
							¥{this.props.data.currentPrice}
						</div>
						{
							this.props.data.currentPrice < this.props.data.originalPrice
							? <s className="originalPrice">
								¥{this.props.data.originalPrice}
							</s>
							: null
						}
						<div className="sold">
							已售{this.props.data.sold}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

HomeLikeItem.defaultProps = {
	data: {
		img: '',
		title: '',
		distance: 0,
		description: '',
		currentPrice: 0,
		originalPrice: 0,
		sold: 0
	}
};