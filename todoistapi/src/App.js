import React, { useState } from 'react';
import './App.css';

const ToDoist = ( ) => {

	const [data, setData] = useState([]);
	const [input, setInput] = useState('');
	const [check, setCheck] = useState([]);
	

	const addItem = () => {
		setData ((prevData) => [...prevData, {id: prevData.length + 1, todo: input}]);
		setInput('');
		console.log(data);
	}
	
	const removeItem = () => {
		const newData = data.filter((item) => !check.includes(item.id));
		setData(newData);
        setCheck([]);
	}

	const toggleCheck = (itemID) => {
		if (check.includes(itemID)) {
			setCheck((prevCheck) => prevCheck.filter((id) => id !== itemID));
		}
		else setCheck((prevCheck) => [...prevCheck, itemID]);
		//console.log(check);
	}

	return (
        
		<div>
            <div className='header'>
                <div>ToDoist</div>
            </div>
			<div className='box'> 
				<input className="type" onChange={(e) => setInput(e.target.value)}></input>
				<button onClick={addItem}>Add</button>
      			<button onClick={removeItem}>Done</button>
			</div>
			<div className='todos'> 
				<div>
					{data.map((item) => (
						<div className='task' key={item.id}>
							<div style={{marginLeft: "10px", color: "white"}}>{item.todo}</div>
							<input type='checkbox' className='checker' onChange={() => toggleCheck(item.id)}></input>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ToDoist;
