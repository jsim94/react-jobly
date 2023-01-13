import { useNavigate } from "react-router";
import * as Yup from "yup";

import { JoblyApi } from "../api";

import { FormComponent } from "../components";

export default function Login({ changeToken }) {
  const navigate = useNavigate();

  const fields = {
    username: {
      initValue: "",
      displayName: "Username",
      type: "text",
    },
    password: {
      initValue: "",
      displayName: "Password",
      type: "password",
    },
  };

  const validation = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (data, setFieldError) => {
    const submission = JoblyApi.authenticateUser(data)
      .then(async (res) => {
        changeToken(res.token);
        navigate("/");
      })
      .catch((errors) => {
        errors.forEach((error) => {
          console.log(error);
          if (error.includes("Invalid username/password")) {
            setFieldError("username", "Invalid username or password");
            setFieldError("password", "Invalid username or password");
          }
        });
      });

    return submission;
  };

  return (
    <FormComponent
      formData={{
        title: "Login",
        fields,
        validation,
        onSubmit,
      }}
    />
  );
}
