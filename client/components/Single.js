import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
	render(){
		const { postId } = this.props.params;

		//获取index
		const i = this.props.posts.findIndex((post) => post.code === postId);
		
		const post = this.props.posts[i];
		// console.log(post);
		
		const postComment = this.props.comments[postId] || [];//评论可能为空

		return(
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props}/>
				<Comments postComment={postComment} {...this.props}/>
			</div>
		);
	}
});

export default Single;
