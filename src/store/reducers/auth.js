import produce from 'immer'
import { authActions } from '../actions/auth'

const defaultAuth = {
  token: null,
  signed: false,
  loading: false,
}

export default function authReducer(state = defaultAuth, action) {
  return produce(state, (draft) => {
    const { payload, type } = action
    switch (type) {
      case authActions.requestLogin:
        draft.loading = true
        break
      case authActions.successLogin:
        draft.token = payload.token
        draft.signed = true
        draft.loading = false
        break
      case authActions.failureSign:
        draft.loading = false
        break
      case authActions.signOut:
        draft.token = null
        draft.signed = false
        break
      default:
        return state
    }
  })
}
