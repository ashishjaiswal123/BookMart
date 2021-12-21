export const userAction = {
  SAVE_USER: "save_user",
  DELETE_USER: "delete_user",
};

export default function userReducer(
  state = { isLoggedIn: false, user: null },
  action
) {
  if (action.type === userAction.SAVE_USER) {
    return { ...state, ...action.payload };
  }
  if (action.type === userAction.DELETE_USER) {
    return { isLoggedIn: false, user: null };
  }
  return state;
}
