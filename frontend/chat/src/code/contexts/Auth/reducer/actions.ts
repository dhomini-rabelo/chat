/* eslint-disable */
export enum AuthActions {
  LOGIN = 'LOGIN'
}
/* eslint-enable */

export const AuthConsumer = {
  login(token: string) {
    return {
      type: AuthActions.LOGIN,
      payload: token,
    }
  },
}
