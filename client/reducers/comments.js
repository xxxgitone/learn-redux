function postComments(state=[], action){
	switch(action.type){
		case 'ADD_COMMENT':
			return [
				...state,{
					user: action.author,
					text: action.comment
				}
			]
		case 'REMOVE_COMMENT':
			console.log("Removing a comment", action.index);
			return [
				...state.slice(0, action.index),

				...state.slice(action.index + 1)
			]
		default:
			return state;
	}

	return state;
}

function comments(state = [], action){
	// console.log(state, action);
	if (typeof action.postId !== 'undefined') {
		return {
			...state,
			[action.postId]: postComments(state[action.postId], action)
		}
	}

	return state;
}

export default comments;