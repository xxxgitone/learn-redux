//increment
function increment(index){
	return {
		type: 'INCREMENT_LIKES',
		// index: index,
		index
	}
}

//add comment
function addComment(postId, author, comment){
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

//remove comment
function removeComment(postId, index){
	return {
		type: 'REMOVE_COMMENT',
		postId,
		index
	}
}



