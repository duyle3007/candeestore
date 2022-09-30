import { useFormik } from "formik";
import * as Yup from "yup";
import { notification, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { registerWithEmailAndPassword } from "utils/firebase";
import { startLoading, stopLoading } from "redux/reducers/productReducer";
import useUserExist from "utils/hook/useUserExist";

import styles from "./SignupPage.module.scss";

const SignupPage = () => {
  const loading = useSelector((state) => state.product.loading);
  const dispatch = useDispatch();
  const router = useRouter();

  useUserExist();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Vui lòng không để trống!"),
      email: Yup.string()
        .email("Không phải email")
        .required("Vui lòng không để trống!"),
      password: Yup.string()
        .min(8, "Ít nhất 8 kí tự")
        .required("Vui lòng không để trống!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
        .required("Vui lòng không để trống!"),
    }),
    onSubmit: ({ full_name, email, password }) => {
      try {
        dispatch(startLoading());
        registerWithEmailAndPassword(full_name, email, password);
        notification.success({ message: "Register Successfully" });
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } catch (err) {
        notification.error({ message: "Something went wrong" });
        console.log("Something went wrong", err);
      } finally {
        dispatch(stopLoading());
      }
    },
  });

  return (
    <Spin spinning={loading}>
      <div className={styles["signup-page"]}>
        <h1>Đăng ký</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className={styles["form-field"]}>
            <label>Họ và tên</label>
            <input
              type="text"
              name="full_name"
              value={formik.values.full_name}
              onChange={formik.handleChange}
              placeholder="Nhập họ và tên"
            />
            {formik.errors.full_name && formik.touched.full_name && (
              <p className={styles["error-field"]}>{formik.errors.full_name}</p>
            )}
          </div>
          <div className={styles["form-field"]}>
            <label>Email</label>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Nhập email"
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
              placeholder="Nhập mật khẩu"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className={styles["error-field"]}>{formik.errors.password}</p>
            )}
          </div>
          <div className={styles["form-field"]}>
            <label>Xác nhận mật khẩu</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="Nhập lại mật khẩu"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
            />
            {formik.errors.confirm_password &&
              formik.touched.confirm_password && (
                <p className={styles["error-field"]}>
                  {formik.errors.confirm_password}
                </p>
              )}
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    </Spin>
  );
};

export default SignupPage;
