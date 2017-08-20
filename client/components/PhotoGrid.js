import React from 'react';
import Photo from '../components/Photo';

const PhotoGrid = React.createClass({
	componentDidMount() {
	  console.log(this.props)	
	},
	render(){
		return(
			<div className="photo-grid">
				{this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
			</div>
		);
	}
});

export default PhotoGrid;
