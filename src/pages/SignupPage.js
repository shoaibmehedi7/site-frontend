import { Button, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import FormInputText from "../components/common/FormInputText";
import { useYupValidationResolver } from "../utils/yupResolver";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "../constants/routes";
import { signupApi } from "../store/user/api/userApi";
import { isLoggedIn } from "../utils/isLoggedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    msOverflowX: "hidden",
  },
  formContainer: {
    padding: "20px 30px",
    width: "550px",
    maxWidth: "650px",
  },
  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 0 15px 0",
  },
  signHeader: {
    margin: "20px 0",
  },
}));

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string().min(6).max(12).required("Password is required"),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  street: "",
  city: "",
  zip: "",
};

function SignupPage() {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: resolver,
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const isLogged = isLoggedIn();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data) {
      dispatch(signupApi(data));
    }
  };

  const userData = useSelector((state) => state.signup.data);

  useEffect(() => {
    if (isLogged) {
      navigate(routes.ROOT);
    }
  }, [isLogged, userData]);
  return (
    <Box className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper className={classes.formContainer}>
          <Box className={classes.signHeader}>
            <Typography variant="h4" color="primary">
              Sign up
            </Typography>
            <Typography color={"gray"}>
              Provide necessary information to sign up.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <FormInputText
                name={"firstName"}
                control={control}
                label={"First Name"}
              />
            </Grid>
            <Grid item md={6}>
              <FormInputText
                name={"lastName"}
                control={control}
                label="Last Name"
              />
            </Grid>
            <Grid item md={12}>
              <FormInputText name={"email"} control={control} label={"Email"} />
            </Grid>
            <Grid item md={12}>
              <FormInputText
                name={"password"}
                control={control}
                label="Password"
                type={"password"}
              />
            </Grid>
            <Grid item md={12}>
              <FormInputText
                name={"street"}
                control={control}
                label={"Street"}
              />
            </Grid>
            <Grid item md={6}>
              <FormInputText name={"city"} control={control} label={"City"} />
            </Grid>
            <Grid item md={6}>
              <FormInputText name={"zip"} control={control} label={"Zip"} />
            </Grid>
            <Grid item md={12}>
              <Box className={classes.info}>
                <Typography>Already have an account?</Typography>
                <NavLink style={{ textDecoration: "none" }} to={routes.SIGNIN}>
                  Sign in
                </NavLink>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Box>
  );
}

export default SignupPage;
