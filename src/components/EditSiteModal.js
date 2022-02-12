import { Button, Divider, Grid, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { updateSite } from "../store/site/api/sitesApi";
import { useYupValidationResolver } from "../utils/yupResolver";
import FormInputText from "./common/FormInputText";

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
function isAuditLogPresentable(item) {
  console.log(item);
  return item && item.changes && item.changes.length > 0
}
function AuditLog({item}){
  return item.changes.map((chng) => {
    return (
      <ListItem key={chng.id}>
        {chng.description} on {item.updatedDate.toString()}
      </ListItem>
    );
  })
}
function EditSiteModal({ item, setOpen }) {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: item.name,
      description: item.description,
      region: item.region,
      lat: item.lat,
      lng: item.lng,
    },
    resolver: resolver,
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updateSite({ ...data, id: item.id }, setOpen));
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
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box style={{ margin: "20px" }}>
        <Typography
          variant="h5"
          color={"primary"}
          style={{ marginTop: "20px" }}
        >
          Audit Log History
        </Typography>
        <Divider style={{ marginBottom: "20px" }} />
        {isAuditLogPresentable(item) && <AuditLog item={item}/>}
      </Box>
    </div>
  );
}

export default EditSiteModal;
