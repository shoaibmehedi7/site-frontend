import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import FormInputText from "../components/common/FormInputText";
import { apiEndPoint, baseUrl } from "../utils/endpoints";
import { useYupValidationResolver } from "../utils/yupResolver";
import { useDispatch, useSelector } from "react-redux";
import { signInApi } from "../store/apis/userApi";
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
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string().min(6).max(12).required("Password is required"),
});

function SigninPage() {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: resolver,
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogged = isLoggedIn();

  console.log(isLogged);

  const userData = useSelector((state) => state.signin.data);

  const onSubmit = (data) => {
    dispatch(signInApi(data));
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, userData]);

  return (
    <Box className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper className={classes.formContainer}>
          <Box className={classes.signHeader}>
            <Typography variant="h4" color="primary">
              Sign in
            </Typography>
            <Typography color={"gray"}>
              Provide necessary information to sign in.
            </Typography>
          </Box>
          <Grid container spacing={3}>
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
              <Box className={classes.info}>
                <Typography>Don't have an account</Typography>
                <NavLink style={{ textDecoration: "none" }} to={"/signup"}>
                  Sign up
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
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Box>
  );
}

export default SigninPage;
