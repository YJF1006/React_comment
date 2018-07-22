import React,{Component} from 'react';
export default class CommentItem extends Component{
	handleRemove=()=>{	
		console.log(this.props.comment.id);
		this.props.removeComment(this.props.comment.id);
	}
	render(){
		return(
			<div id='CommentItem'>
				<span>{this.props.comment.username}说：</span>
				<p>{this.props.comment.said}</p>
				<button onClick={this.handleRemove}>删除</button>	
			</div>
		)
	}
}