import { TodoAction } from './todo';
import { UserAction } from './user';

export * from './todo';
export * from './user'

export type Action =
    | TodoAction | UserAction;
