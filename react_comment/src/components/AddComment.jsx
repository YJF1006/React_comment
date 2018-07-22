import React,{Component} from 'react';
export default class Addcomment extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	handleAdd=()=>{
		let comment = {
			id:new Date(),
			username:this.username.value,
			said:this.said.value
		};
		if(comment.username&&comment.said){
			this.props.getAddComment(comment);
			this.username.value = this.said.value ='';
		}else{
			alert('不要调皮，请输入内容再点我哦！！！');
		}	
	}
	render(){
		return(
			<div id='addComment'>
				<label htmlFor="username" >用户名：</label>
					<input type="text" id='username' placeholder='用户名' ref={username=>this.username=username}/>
				<label htmlFor="comment">评论内容:</label>
					<textarea name="" id="comment"  placeholder='评论内容'  ref={said=>this.said=said}></textarea>
				<button onClick={this.handleAdd}>提交</button>
			</div>
		)
	}
}