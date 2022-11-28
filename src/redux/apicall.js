import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} from "./ProductRedux";

import { loginStart, loginSucees, loginFailure } from "./UserRedux";

import { publicRequest } from "../requestmethod";

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const GetProduct = async () => {
      const res = publicRequest
        .get("/categories")
        .then((res) => {
          dispatch(getProductsSuccess(res.data));
        })
        .catch((err) => false);
    };
    GetProduct();
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

export const loginredux = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const Login = async () => {
      const login = publicRequest
        .post(`/log-in?username=${user.username}&password=${user.password}`)
        .then((res) => {
          if (res.data === true) {
            dispatch(loginSucees(res.data));
          } else {
            dispatch(loginFailure());
          }
        })
        .catch((err) => false);
    };
    Login();
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const PostReport = async (dispatch, FormReport) => {
  dispatch(loginStart());
  try {
    const Report = async () => {
      const login = publicRequest
        .post(
          `/report/?ori_image_s3_key=${FormReport.ori_image_s3_key}&s3key_detected_img=${FormReport.s3key_detected_img}&message=${FormReport.message}&item_reported=${FormReport.item_reported}`
        )
        .then((res) => {
          if (res.data === true) {
            dispatch(loginSucees(res.data));
          } else {
            dispatch(loginFailure());
          }
        })
        .catch((err) => false);
    };
    Report();
  } catch (error) {
    dispatch(loginFailure());
  }
};
