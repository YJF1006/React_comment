import React,{Component} from 'react';
import Header from './Header.jsx';  //头部组件
import AddComment from './AddComment.jsx';  //增加评论组件
import CommentList from './CommentList.jsx';  //评论列表组件
export default class App extends Component{
	constructor(props){
		super(props);
		this.state={
			comments:[]	
		}
	}
	componentWillMount(){  //挂载之前看本地有没有
		if(sessionStorage.getItem('comments')){
			let sessionComments = JSON.parse(sessionStorage.getItem('comments'));
			this.setState({comments:sessionComments});
		}
	}
	//添加评论
	getAddComment=(comment)=>{
		let comments = this.state.comments;
		comments.unshift(comment);
		//存进session里面
		sessionStorage.setItem('comments',JSON.stringify(comments));  //存入到本地session中	
		this.setState({comments});
		
	}
	//删除评论
	removeComment=(id)=>{
		let comments = this.state.comments;
		comments = comments.filter((comment)=>(comment.id !== id));
		this.setState({comments});
		//删除session里面存
		let sessionComments = JSON.parse(sessionStorage.getItem('comments'));
		sessionComments = sessionComments.filter((comment)=>(comment.id !== id));
		sessionStorage.setItem('comments',JSON.stringify(sessionComments));   //把新的session数组存进里面去
	}
	render(){

		return(
			<div>
				<Header></Header>
				<div id='comment'>
					<AddComment getAddComment={this.getAddComment}></AddComment>
					<CommentList comments={this.state.comments} removeComment={this.removeComment}></CommentList>
				</div>
				
			</div>
		)
	}
}