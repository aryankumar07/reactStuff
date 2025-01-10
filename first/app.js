import React from "react";
import ReactDOM from "react-dom/client"


// React Element
const title = <h1>Title heading</h1>

// React Component
const Heading = ()=>{
	return <div>
		{title}
		<h1>This is a Heading</h1>
	</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)

