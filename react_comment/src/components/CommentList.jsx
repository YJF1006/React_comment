import React,{Component} from 'react';
import CommentItem from './CommentItem.jsx';  //一个评论的组件
export default class CommentList extends Component{
	render(){
		return(
			<div id='CommentList'>
				<div>【评论回复】</div>
				{
					this.props.comments.length?

						this.props.comments.map((comment,index)=>(
								<CommentItem key={index} comment={comment} removeComment={this.props.removeComment}></CommentItem>
						))
					:
						<div id='first'><span>您是第一个书写评论的人哦！</span></div>
				}
				
			</div>
		)
	}
}