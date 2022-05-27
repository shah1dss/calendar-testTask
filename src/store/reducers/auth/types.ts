import { IUser } from "../../../models/IUser";

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum AuthActionsEnum{
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_USER = "SET_USER",
}

export interface setAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}

export interface setErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: string;
}

export interface setLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface setUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: IUser;
}

export type AuthActions =
  setAuthAction | setErrorAction | setLoadingAction | setUserAction