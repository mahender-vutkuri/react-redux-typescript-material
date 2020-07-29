export interface User {
    email: string
    pwd: string
    fname: string
    lname: string
    id: string
}

export enum UserActions {
    LOGIN_USER = "LOGIN_USER",
    LOGOUT_USER = "LOGOUT_USER"
}

interface UserActionType<T, P> {
    type: T;
    payload: P;
}

export type UserAction =
    | UserActionType<typeof UserActions.LOGIN_USER, User>
    | UserActionType<typeof UserActions.LOGOUT_USER, null>
    ;
