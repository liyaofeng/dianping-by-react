import React from 'react';
import ReactSwipe from 'react-swipe'
import { Link, withRouter } from 'react-router-dom'

import '../../iconfonts/iconfont/iconfont.css'
import './goodsDetail.css'

class GoodsDetail extends React.Component {
	render() {
		return (
			<div className="goodsDetail">
				<div className="gdsDetailTitle">
					<div>团购详情</div>
					<b className="icon iconfont shopIcon">&#xe646;</b>
				</div>
				<div className="gdsContent">
					<div className="gdsDetail">
						<div>
							代金券
						</div>
						<div className="gdsDetailCount">
							1张
						</div>
						<div>
							30元
						</div>
					</div>
					<div className="gdsOriginal"> 
						<s className="gdsDetailCount">
							价值
						</s>
						<s>
							30元
						</s>
					</div>
					<div className="gdsCurrent">
						<div className="gdsDetailCount">
							团购价
						</div>
						<div className="gdsCurrentPrice">
							27.5元
						</div>
					</div>
					<div className="gdsDescription">
						1996年，科比以高中生身份进入联盟，来到洛杉矶，来到NBA，但直到2007年，科比才首度代表美国队征战，这其中的原因是多种多样的，有客观原因，当然也有科比的主观原因。

客观原因是自2000年夺得奥运冠军之后，美国队不再派出由顶级球星组建的超级球队参加世界大赛，一方面是911事件带来的对恐怖主义的畏惧，另一方面是奥运会等国际比赛对NBA球星来说，既没有高额回报，还有受伤以及耽误训练的风险。

但美国队因此逐渐失去了在国际篮坛的霸主地位，在2002年世锦赛仅仅排名第六，2004年奥运会丢掉金牌，2006年世锦赛再度失金，尤其是04年雅典奥运会，美国队居然输给了波多黎各，而且惨败19分，因此被世人所耻笑。事实上，在这痛苦的过程中，美国队已经向NBA巨星抛出橄榄枝，科比也不例外，但这时候，主观原因让科比也无暇顾及美国国家队。

2003年，“鹰郡强奸案丑闻”让科比无比痛苦，官司缠身，形象受损，再加上2004年雅典奥运会上，美国奥运代表团集体受到“恐怖威胁”，科比等NBA巨星不愿参赛。2006年，科比由于有伤在身，再度没能出现在国际赛场之上。而在2007年，科比进入NBA11年之后，才首度代表美国国家队出战。

2007年，NBA接收到美国篮球协会的号召，希望NBA的超级巨星们能再一次站出来，像十五年前巴塞罗那奥运会一样，以梦之队的姿态夺回美国篮球世界第一的席位。于是，科比代表美国队出征了美锦赛，这是科比美国国家队首秀，对于美国球迷而言，这一刻真是久等了！
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(GoodsDetail)