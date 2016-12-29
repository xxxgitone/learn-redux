//reducer要做两件事
//1.指明将要发生什么
//2.返回最新的状态

function posts(state = [], action){
	console.log("The posts will change");
	console.log(state, action);

	return state;
}

export default posts;