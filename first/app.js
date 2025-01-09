import React from "react";
import ReactDOM from "react-dom/client"

const head1 = React.createElement("h1",{},"hello heading 1");
const head2 = React.createElement("div",{},
	[
		React.createElement("h2",{},"inside first"),
		React.createElement("h2",{},"inside first.second"),

	]
);
const root1 = ReactDOM.createRoot(document.getElementById("root"))
const root2 = ReactDOM.createRoot(document.getElementById("root1"))
root1.render(head1);
root2.render(head2);

