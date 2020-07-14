// import { Button, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
// import * as React from "react";
// import { useSelector } from "react-redux";
// import { HomeBox } from "../components";
// import { RootState } from "../reducers";

// export function HomePage() {
// 	const classes = useStyles();
// 	const [boxColor, setBoxColor] = React.useState("red");
// 	const todoList = useSelector((state: RootState) => state.todoList);

// 	const onButtonClick = () =>
// 		setBoxColor(boxColor === "red" ? "blue" : "red");

// 	return (
// 		<div className={classes.root}>
// 			<Typography variant="h4" gutterBottom>
// 				You have {todoList.length} TODOs in your list!
// 			</Typography>
// 			<div className={classes.centerContainer}>
// 				<HomeBox size={300} color={boxColor} />
// 				<Button
// 					className={classes.button}
// 					onClick={onButtonClick}
// 					variant="outlined"
// 					color="primary"
// 				>
// 					Change Color
// 				</Button>
// 			</div>
// 		</div>
// 	);
// }

// const useStyles = makeStyles({
// 	root: {
// 		height: "100%",
// 		textAlign: "center",
// 		paddingTop: 20,
// 		paddingLeft: 15,
// 		paddingRight: 15,
// 	},

// 	centerContainer: {
// 		flex: 1,
// 		height: "90%",
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		flexDirection: "column",
// 	},

// 	button: {
// 		marginTop: 20,
// 	},
// });


import React from 'react';

function HomePage() {
	const onPaste = (e: any) => {
		e.preventDefault()
	}
	return (
		<div className="m-t-50 auto-height" style={{ marginLeft: " 100px" }}>
			<div className="disabled-copy">
				with paste: <input name="ReceiveNo" type="text" className="txtbox" /> <br />
				without paste: <input name="ReceiveNo" type="text" className="txtbox" onPaste={onPaste} />

				<h2>Try copying the text from below.</h2>
				<p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>

				<p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
			</div>

			<div className="copy-css">
				<h2>This can be copied with extra styles</h2>
				<p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>

				<p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
			</div>
		</div>
	);
}

export { HomePage };