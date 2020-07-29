import { UserAction, UserActions, User } from "../model";

export function loginUser(usr: any): UserAction {
    console.log(usr);

    return {
        type: UserActions.LOGIN_USER,
        payload: usr,
    };
}

// export function completeTodo(todoId: number) {
// 	// here you could do API eg

// 	return (dispatch: Function, getState: Function) => {
// 		dispatch({ type: TodoActions.COMPLETE_TODO, payload: todoId });
// 	};
// }

// export function uncompleteTodo(todoId: number): TodoAction {
// 	return {
// 		type: TodoActions.UNCOMPLETE_TODO,
// 		payload: todoId,
// 	};
// }

// export function deleteTodo(todoId: number): TodoAction {
// 	return {
// 		type: TodoActions.DELETE_TODO,
// 		payload: todoId,
// 	};
// }

// export function updateTodo(id:any,todo: Todo): TodoAction {
// 	return {
// 		type: TodoActions.EDIT_TODO,
// 		payload: todo,
// 	};
// }
