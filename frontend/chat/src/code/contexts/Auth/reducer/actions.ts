/* eslint-disable */
export enum AuthActions {
  LOGIN = 'LOGIN'
}
/* eslint-enable */

export const AuthConsumer = {
  login(username: string, token: string) {
    return {
      type: AuthActions.LOGIN,
      payload: {
        username,
        token,
      },
    }
  },
}
