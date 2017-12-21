import React from 'react';
import ReactSwipe from 'react-swipe'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames' 

import '../../iconfonts/iconfont/iconfont.css'
import './goodsDetailShop.css'

class GoodsDetailShop extends React.Component {

	render() {
		return (
			<div className="goodsDetailShop">
				<div className="gdsShopTotal">
					<div>适用商户(52)</div>
					<b className="icon iconfont shopIcon">&#xe600;</b>
				</div>
				<div className="gdsThisShop">
					<div className="gdsThisShopInfo">
						<div className="gdsThisShopName">
							赛百味(万菱汇店)
						</div>
						<div className="gdsThisShopScoreSupView">
							<div className="gdsThisShopScore">
								<Star score={7}/>
							</div>
							<div className="gdsDistance">
								389m
							</div>
						</div>
					</div>
					<div className="gdsPhone">
						<b className="icon iconfont shopIcon">&#xe6b9;</b>
					</div>
				</div>
				<div className="gdsLocation">
					<b className="icon iconfont shopIcon">&#xe62d;</b>
					天河路230-232号万菱汇A去B1层B1-78号铺
				</div>
			</div>
		)
	}
}

export default withRouter(GoodsDetailShop)

export class Star extends React.Component {
	render() {
		return (
			<div className="star">
				<div>
					<div className={classNames("icon", "iconfont", "starIconLeft", {color: this.props.score>=1, uncolor: this.props.score<1})}>&#xe602;</div>
					<div className={classNames("icon", "iconfont", "starIconRight", {color: this.props.score>=2, uncolor: this.props.score<2})}>&#xe604;</div>
				</div>
				<div>
					<div className={classNames("icon", "iconfont", "starIconLeft", {color: this.props.score>=3, uncolor: this.props.score<3})}>&#xe602;</div>
					<div className={classNames("icon", "iconfont", "starIconRight", {color: this.props.score>=4, uncolor: this.props.score<4})}>&#xe604;</div>
				</div>
				<div>
					<div className={classNames("icon", "iconfont", "starIconLeft", {color: this.props.score>=5, uncolor: this.props.score<5})}>&#xe602;</div>
					<div className={classNames("icon", "iconfont", "starIconRight", {color: this.props.score>=6, uncolor: this.props.score<6})}>&#xe604;</div>
				</div>
				<div>
					<div className={classNames("icon", "iconfont", "starIconLeft", {color: this.props.score>=7, uncolor: this.props.score<7})}>&#xe602;</div>
					<div className={classNames("icon", "iconfont", "starIconRight", {color: this.props.score>=8, uncolor: this.props.score<8})}>&#xe604;</div>
				</div>
				<div>
					<div className={classNames("icon", "iconfont", "starIconLeft", {color: this.props.score>=9, uncolor: this.props.score<9})}>&#xe602;</div>
					<div className={classNames("icon", "iconfont", "starIconRight", {color: this.props.score>=10, uncolor: this.props.score<10})}>&#xe604;</div>
				</div>
			</div>
		)
	}
}

Star.defaultProps = {
	score: 0
};