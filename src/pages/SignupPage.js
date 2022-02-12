import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import FormInputText from "../components/common/FormInputText";
import { apiEndPoint, baseUrl } from "../utils/endpoints";
import { useYupValidationResolver } from "../utils/yupResolver";
import { useDispatch } from "react-redux";
import { signupApi } from "../store/apis/userApi";

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

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data) {
      dispatch(signupApi(data));
    }
  };
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
                <NavLink style={{ textDecoration: "none" }} to="/signin">
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
