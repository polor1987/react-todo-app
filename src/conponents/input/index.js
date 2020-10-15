import React,{useState} from 'react';
import "./Input.css"

const Input = ({input,setInput,setTodo,todo}) =>{
	const handelAdd = () =>{
		if(input){
		setTodo([...todo,{text:input,completed:false,id: Math.floor(Math.random() * 1000)}])
		setInput("")
	}
	}
	return(
	<div className="adding">
	  <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
	  <button className="add" onClick={handelAdd} type="button">ADD</button>
	</div>
	)
}

export default Input