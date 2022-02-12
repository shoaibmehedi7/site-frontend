import * as React from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { createSites } from "../store/site/api/sitesApi";
import FormInputText from "./common/FormInputText";
import { useYupValidationResolver } from "../utils/yupResolver";

const defaultValues = {
  name: "",
  description: "",
  region: "",
  lat: "",
  lng: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  region: Yup.string().required("Description is required"),
  lat: Yup.number()
    .typeError("Must be a number")
    .required("Latitude is required"),
  lng: Yup.number()
    .typeError("Must be a number")
    .required("Longitude is required"),
});

export default function CreateSiteModal({ setOpenNew }) {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: resolver,
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createSites(data, setOpenNew));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <FormInputText name={"name"} control={control} label={"Name"} />
          </Grid>
          <Grid item md={12}>
            <FormInputText
              name="description"
              control={control}
              label="Description"
            />
          </Grid>
          <Grid item md={12}>
            <FormInputText name={"region"} control={control} label={"Region"} />
          </Grid>
          <Grid item md={12}>
            <FormInputText name={"lat"} control={control} label={"Latitude"} />
          </Grid>
          <Grid item md={12}>
            <FormInputText name={"lng"} control={control} label="Longitude" />
          </Grid>
          <Grid item md={12}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
