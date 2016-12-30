//reducer要做两件事
//1.指明将要发生什么
//2.返回最新的状态

function posts(state = [], action){
	switch(action.type){
		case 'INCREMENT_LIKES' : 
			console.log("increment likes");
			const i = action.index;
			return [
				...state.slice(0,i), //将要更新的前几个的状态
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1), //将要更新的后一个图片状态
			]
		default:
			return state;
	}

	return state;
}

export default posts;