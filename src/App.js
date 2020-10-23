import React, { useState } from 'react';
import './App.css';

import ListItem from './components/ListItem';

function App() {
	const [items, setItems] = useState([
		{
			id: 0,
			itemName: 'null'
			
		}
	])

	return (
		<div>
			{
				items.map( item => (
					<ListItem 
						key={item.id}
						name={item.itemName}
						id={item.id}
					/>
				))
			}
		</div>
	);
}

export default App;
