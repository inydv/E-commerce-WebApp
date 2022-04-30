import { loginFailure, loginStart, loginOrder } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginOrder(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
