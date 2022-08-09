import React, { useState } from 'react'

function HookArray() {
	const [items, setItems] = useState([])

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 5)
			}
		])
	}
const reset =()=>{
	setItems({
		items :0
	})
}
	return (
		<div>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default HookArray;