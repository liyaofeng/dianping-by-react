import React from 'react'
import ReactSwipe from 'react-swipe'
import ClassNames from 'classnames'
import { Route, Link, withRouter } from 'react-router-dom'

import './homeCategory.css'

import Search from '../Search/index'
import categoryJson from '../../configs/category.json'

class HomeCategory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedIndex: 0
		}
	}

	render() {
		let opt = {
			auto: 3000,
			callback: (index) => {
				this.setState({
					selectedIndex: index
				})
			}
		}

		let categoryArr = []
		categoryJson.forEach((arr, index) => {
			let pageArr = []
			arr.forEach((category, index) => {
				pageArr.push(
					<Link to={'/search/' + category.title} key={index} className="categoryItem" style={{textDecoration:"none"}}>
						<img className="categoryIcon" src={require('../../images/category/' + category.icon)} />
						{category.title}
					</Link>
				)
			})
			categoryArr.push(
				<div key={index} className="categoryView">
					{pageArr}
				</div>
			)
		})

		return (
			<div className="category">
	            <ReactSwipe swipeOptions={opt}>
	                {categoryArr}
	            </ReactSwipe>
	            <div className="pageSupView"> 
	            	<div className={ClassNames("pageView", {selected: this.state.selectedIndex == 0})}></div>
	            	<div className={ClassNames("pageView", {selected: this.state.selectedIndex == 1})}></div>
	            	<div className={ClassNames("pageView", {selected: this.state.selectedIndex == 2})}></div>
	            </div>
	        </div>
		)
	}
}

export default withRouter(HomeCategory)