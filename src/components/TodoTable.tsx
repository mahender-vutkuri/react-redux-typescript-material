// prettier-ignore
import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../actions";
import * as TodoActions from "../actions/todo";
import { Todo } from "../model";
import { RootState } from "../reducers";
import { useHistory,useLocation } from "react-router-dom";
export function TodoTable() {
	const classes = useStyles();
	const history = useHistory();
	
	 
	const todoList = useSelector((state: RootState) => state.todoList);
	const todoActions = useActions(TodoActions);

	const onRowClick = (todo: Todo) => {
		if (todo.completed) {
			todoActions.uncompleteTodo(todo.id);
		} else {
			todoActions.completeTodo(todo.id);
		}
	};

	return (
		<Paper className={classes.paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell padding="default">Completed</TableCell>
						<TableCell padding="default">Text</TableCell>
						<TableCell padding="default">Created Date</TableCell>
						<TableCell padding="default">Delete</TableCell>
						<TableCell padding="default">Edit</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todoList.map((n: Todo) => {
						let dt = new Date(n.created).toLocaleDateString()+' '+new Date(n.created).toLocaleTimeString();
						return (
							<TableRow
								key={n.id}
								hover
								// onClick={event => onRowClick(n)}
							>
								<TableCell padding="none">
									<Checkbox onChange={event => onRowClick(n)} checked={n.completed} />
								</TableCell>
								<TableCell padding="none">{n.text}</TableCell>
								<TableCell padding="none">{dt.toString()}</TableCell>
								<TableCell padding="none">
									<IconButton
										aria-label="Delete"
										color="default"
										onClick={() =>
											todoActions.deleteTodo(n.id)
										}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
								<TableCell padding="none">
									<IconButton
										aria-label="Delete"
										color="default"
										onClick={() =>
											history.push("/editTodo",{id:n.id})
										}
									>
										<EditIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}

const useStyles = makeStyles({
	paper: {
		width: "100%",
		minWidth: 260,
		display: "inline-block",
	},
	table: {
		width: "100%",
	},
});
