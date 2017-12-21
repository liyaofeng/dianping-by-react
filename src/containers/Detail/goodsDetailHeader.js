import React from 'react';
import ReactSwipe from 'react-swipe'
import { Link, withRouter } from 'react-router-dom'

import '../../iconfonts/iconfont/iconfont.css'
import './goodsDetailHeader.css'

class GoodsDetailHeader extends React.Component {

	render() {
		return (
			<div className="goodsDetailHeader">
				<div className="gdhImageSuperView">
					<ReactSwipe swipeOptions={{auto: 3000}}>
						<img src="http://img4.imgtn.bdimg.com/it/u=2254333719,2698403339&fm=27&gp=0.jpg" />
						<img src="http://img1.imgtn.bdimg.com/it/u=3055379597,110068400&fm=27&gp=0.jpg" />
						<img src="http://img2.imgtn.bdimg.com/it/u=2507337171,18431489&fm=27&gp=0.jpg" />
					</ReactSwipe>
					<div className="gdhDescriptionSupView">
						<div className="gdhTitle">	
							赛百味
						</div>
						<div className="gdhDescription">
							仅售27.5元！价值30元的代金券1张，除拼盘类产品、聚会三明治、每日特价外全场可用，可叠加使用，提供免费WiFi。
						</div>
					</div>
				</div>
				<div className="gdhBuySuperView">
					<div className="gdhCurrentPirce">
						¥27.5
					</div>
					<s className="gdhOriginalPrice">
						¥30
					</s>
					<div className="gdhBuyBtn">
						立即购买
					</div>
				</div>
				<div className="gdhState">
					<div>
						<b className="icon iconfont stateIcon">&#xe601;</b>
						随时可退
					</div>
					<div>
						<b className="icon iconfont stateIcon">&#xe673;</b>
						过期自动退
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(GoodsDetailHeader)