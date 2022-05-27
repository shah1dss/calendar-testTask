import { IUser } from "../../../models/IUser";
import { AuthActionsEnum, setAuthAction, setErrorAction, setLoadingAction, setUserAction } from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): setUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
  setAuth: (isAuth: boolean): setAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: isAuth}),
  setIsLoading: (payload: boolean): setLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
  setError: (payload: string): setErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload}),
}