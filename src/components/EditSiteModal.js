import { Button, Divider, Grid, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { getHistoryBySiteId } from "../store/history/api/historyApi";
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
  return item && item.length
}
function AuditLog({item}){
  return item.map((history) => {
    return (
      <ListItem key={history.id}>
        {history.description} on {new Date(history.updatedDate).toLocaleString()}
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
  useEffect(() => {
    dispatch(getHistoryBySiteId({ id: item.id }));
  },[]);
  const histories = useSelector((state) => state.history.data);

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
        { isAuditLogPresentable(histories) && <AuditLog item={histories}/>}
      </Box>
    </div>
  );
}

export default EditSiteModal;
