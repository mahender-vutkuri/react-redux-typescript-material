import { History } from "history";
import { combineReducers } from "redux";
import { Todo, User } from "../model";
// import { User } from "../model"
import * as todoReducer from "./todo";
import * as userReducer from "./user";

export interface RootState {
	todoList: Todo[];
	allUsers: User[];
}

export default (history: History) =>
	combineReducers({
		...todoReducer,
		...userReducer
	});
