import { combineReducers } from 'redux';

const counterRedux = function(state ={num: 0}, action){
	switch(action.type) {
		case 'jia':
            fetch('http://localhost:8001/a.php').then((res)=>{
                if(res.ok){
                    res.text().then((data)=>{
                        console.log(data);
                    })
                }
            }).catch((res)=>{
                console.log(res.status);
            });

			return {num: state.num+1 };
		case 'jian':
			return {num: state.num-1 };
		case 'cheng':
			return {num: state.num*2 };
		case 'chu':
			return {num: state.num/2 };
		default:	
			return state;				
	}
}





const todosRedux = (state={num1:1},action)=>{

	switch(action.type){
		case 'add':
			return state.num1+3;
		case 'desc':
			return state.num1-1;
		default:
			return state;
	}
}

const rootRedux = combineReducers({
	counterRedux,
	todosRedux
})

export default counterRedux
