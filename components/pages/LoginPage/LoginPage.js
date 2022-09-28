import { useFormik } from "formik";
import * as Yup from "yup";

import { auth } from "utils/firebase";
import { notification, Spin } from "antd";
import { startLoading, stopLoading } from "redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateAccessToken, updateUserData } from "redux/reducers/userReducer";
import { useRouter } from "next/router";

import styles from "./LoginPage.module.scss";

const FIREBASE_ERR_CODE = {
  "auth/user-not-found": "Không tìm thấy tài khoản",
  "auth/wrong-password": "Mật khẩu không đúng",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useSelector((state) => state.product.loading);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Vui lòng không để trống!"),
      password: Yup.string()
        .min(8, "Ít nhất 8 kí tự")
        .required("Vui lòng không để trống!"),
    }),
    onSubmit: async ({ email, password }) => {
      try {
        dispatch(startLoading());
        const res = await signInWithEmailAndPassword(auth, email, password);
        notification.success({ message: "Login Successfully" });
        const user = {
          email: res.user?.email,
          emailVerified: res.user?.emailVerified,
          uid: res.user?.uid,
        };
        dispatch(updateUserData(user));
        dispatch(updateAccessToken(res.user?.accessToken));

        setTimeout(() => {
          router.push("/");
        }, 500);
      } catch (err) {
        const firebaseCode = err.message?.substring(
          err.message?.indexOf("(") + 1,
          err.message?.lastIndexOf(")")
        );

        const errMessage = FIREBASE_ERR_CODE[firebaseCode];
        notification.error({ message: errMessage || "Something went wrong" });
        console.log("Something went wrong", err);
      } finally {
        dispatch(stopLoading());
      }
    },
  });

  return (
    <Spin spinning={loading}>
      <div className={styles["signup-page"]}>
        <h1>Đăng nhập</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles["form-field"]}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className={styles["error-field"]}>{formik.errors.email}</p>
            )}
          </div>
          <div className={styles["form-field"]}>
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className={styles["error-field"]}>{formik.errors.password}</p>
            )}
          </div>

          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </Spin>
  );
};

export default LoginPage;
