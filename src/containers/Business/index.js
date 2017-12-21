import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './index.css'
import '../../iconfonts/iconfont/iconfont.css'

import NavigationBar from '../../components/NavigationBar'
import { Star } from '../Detail/goodsDetailShop'
import { HomeLikeItem } from '../Home/homeLike'

class Business extends React.Component {

	render() {
		return (
			<div>
				<NavigationBar title="商户详情" />
				<div className="businessInfo">
					<img src="http://img4.imgtn.bdimg.com/it/u=2254333719,2698403339&fm=27&gp=0.jpg"/>
					<div>
						<div className="businessTitle">天下第一锅</div>
						<div className="businessScore">
							<Star score={9} />
							<div className="businessScoreNum">288条</div>
							<div>¥88/人</div>
						</div>
						<div className="businessLabel">
							<div>双井</div>
							<div>重庆火锅</div>
						</div>
						<div className="businessScoreDetail">
							<div>口味:9.0</div>
							<div>环境:8.9</div>
							<div>服务:8.7</div>
						</div>
					</div>
				</div>
				<div className="businessHeaderItem">
					<b className="icon iconfont">&#xe62d;</b>
					<div>
					双井北街与南街交汇处
					</div>
	                <span class="icon iconfont">&#xe600;</span>
				</div>
				<div className="businessHeaderItem">
					<b className="icon iconfont">&#xe6b9;</b>
					40012123434
				</div>
				<div className="businessSupView"> 
					<div className="businessCommentTitle">
						<div>
							网友评论（288条）
						</div>
						<div className="businessAllComment">
							查看全部
			                <b class="icon iconfont">&#xe600;</b>
						</div>
					</div>
					<BusinessCommentItem />
					<BusinessCommentItem />
				</div>
				<div className="businessOpenInfo">
					<div className="businessOpenTitle">	
						商户信息
					</div>
					<div className="businessOpenTime">
						<div>营业时间：09：00 ~ 23：00</div>
						<div>电话订购时间：10：00 ~ 24：00</div>
						<div>网站订购时间：00：00 ~ 24：00</div>
					</div>
				</div>
				<div>
					<div className="businessMoreLike">小伙伴们还喜欢</div>
					<div className="businessMoreLikeItem">
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
			</div>
		)
	}

	clickItem(id) {
		this.props.history.push('/detail/' + id)
	}
}

export default withRouter(Business)

class BusinessCommentItem extends React.Component {
	render() {
		return (
			<div className="businessCommentItem">
				<img className="commentAvatar" src="http://img4.imgtn.bdimg.com/it/u=2254333719,2698403339&fm=27&gp=0.jpg"/>
				<div className="commentDetail">
					<div className="commentDetailName">
						我是吃货
					</div>
					<Star score={10} />
					<div className="commentDetailDescription">
						和朋友一起去吃的，真的棒棒滴，胃口棒棒滴，环境棒棒滴，不枉此行，已收藏，要给更多的朋友推荐！！！
					</div>
					<div className="commentDetailImg">
						<img src="http://img4.imgtn.bdimg.com/it/u=2254333719,2698403339&fm=27&gp=0.jpg"/>
						<img src="http://img4.imgtn.bdimg.com/it/u=2254333719,2698403339&fm=27&gp=0.jpg"/>
						<img src="http://img4.imgtn.bdimg.com/it/u=2254333719,2698403339&fm=27&gp=0.jpg"/>
					</div>
				</div>
			</div>
		)
	}
}