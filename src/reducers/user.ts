import { UserAction, UserActions, User } from "../model";
import { history } from './heplers';
import createReducer from "./createReducer";

export const UserActionList = createReducer<User[]>([], {


    [UserActions.LOGIN_USER](regUsers: User[], action: UserAction) {
        let allusers = JSON.parse(localStorage.getItem('users'))
        if (allusers && allusers.length == 0 || allusers == null) {
            if (action.payload.email == "admin" && action.payload.pwd == "admin") {
                localStorage.setItem('isLoggedin', "true")
                localStorage.setItem("loggedinUser", '{"id":"ckcnsd4c9o00013b5r1j1lf2aj","fname":"admin","lname":"admin","email":"admin","pwd":"admin"}')
                history.push("/dashboard");
                window.location.reload();
            }
            alert('no registered users found. try logging with username: "admin", password: "admin"')
        } else {
            const userIndex = allusers.findIndex(user =>
                user.email === action.payload.email && user.pwd === action.payload.pwd
            )
            // console.log(userIndex);
            if (userIndex !== -1) {
                localStorage.setItem("loggedinUser", JSON.stringify(allusers[userIndex]))
                localStorage.setItem('isLoggedin', "true")
                history.push("/dashboard");
                window.location.reload();
            } else {
                alert('invalid credentials')
            }
        }
        // console.log(allusers);
        return null;
    },


    // [TodoActions.UNCOMPLETE_TODO](state: Todo[], action: TodoAction) {
    // 	// search after todo item with the given id and set completed to false
    // 	return state.map(t =>
    // 		t.id === action.payload ? { ...t, completed: false } : t
    // 	);
    // },
    // [TodoActions.DELETE_TODO](state: Todo[], action: TodoAction) {
    // 	// remove all todos with the given id
    // 	return state.filter(t => t.id !== action.payload);
    // },
    // [TodoActions.EDIT_TODO](state: Todo[], action: any) {
    // 	console.log(action);

    // 	return state.map(t =>
    // 		t.id === action.payload.id ? { ...t, text: action.payload.text,created: action.payload.created,completed:action.payload.completed} : t
    // 	);
    // },
});
