//increment
export function increment(index){
	return {
		type: 'INCREMENT_LIKES',
		// index: index,
		index
	}
}

//add comment
export function addComment(postId, author, comment){
	// console.log("Dispatch add comment");
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

//remove comment
export function removeComment(postId, index){
	return {
		type: 'REMOVE_COMMENT',
		postId,
		index
	}
}



