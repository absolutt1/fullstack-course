import React , {useState} from 'react';

const App = ( ) => {
	const [state, setState] = useState(
		{id: 1, name: 'Simple', },
		{id: 2, name: 'Magnificient', },
		{id: 3, name: 'Impressive', },
		{id: 4, name: 'Good', },
		{id: 5, name: 'Bad', },
	);
	
	return (
		<div>
			<div></div>
			<div className="divka"> 
				<button>here</button> 			
			</div>
		</div>
	)
}

export default App;
