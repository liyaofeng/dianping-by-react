import React from 'react';
import Spinner from 'react-spinkit'

import './homeLikeMore.css'

class HomeLikeMore extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let view
		if (this.props.status === HOMELIKEMORE_STATUE.statusNormal) {
			view = (
				<div onClick={this.props.shouldLoad}>
					点击加载更多
				</div>
			)
		}
		else if (this.props.status === HOMELIKEMORE_STATUE.statusLoading) {
			view = (
				<Spinner name="chasing-dots" className="loading" />
			)
		}
		else if (this.props.status === HOMELIKEMORE_STATUE.statusNodata) {
			view = (
				<div>
					没有啦！ (●ﾟωﾟ●) 
				</div>
			)
		}
		else {
			view = (
				<div onClick={this.props.shouldLoad}>
					出错了，点击重新加载！ (●ﾟωﾟ●) 
				</div>
			)
		}

		return (
			<div className="homeLikeMore">
				{view}
			</div>
		)
	}

	componentDidMount() {
		let screenHeight = window.screen.availHeight
		let offset = window.pageYOffset
		let contentHieght = document.getElementById('root').clientHeight

		if (screenHeight + offset > contentHieght - 10) {
			this.props.shouldLoad()
		}

		window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	handleScroll() {
		let screenHeight = window.screen.availHeight
		let offset = window.pageYOffset
		let contentHieght = document.getElementById('root').clientHeight

		if (screenHeight + offset > contentHieght - 10) {
			this.props.shouldLoad()
		}
	}
}

export default HomeLikeMore;

export const HOMELIKEMORE_STATUE = {
	statusNormal: "HOMELIKEMORE_STATUE_NORMAL",
	statusLoading: "HOMELIKEMORE_STATUE_LOADING",
	statusNodata: "HOMELIKEMORE_STATUE_NODATA",
	statusError: "HOMELIKEMORE_STATUE_ERROR"
}