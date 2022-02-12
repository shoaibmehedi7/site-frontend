import { toast } from "react-toastify";
import { authAxios } from "../../../utils/axiosWrapper";
import {apiEndPoint} from "../../../constants/endpoints";
import {
  addSitesSuccess,
  getAllSitesSuccess,
  updateSitesSuccess,
} from "../action/sitesActions";

export function getAllSites() {
  return (dispatch) => {
    authAxios
      .post(apiEndPoint.GET_SITES, {})
      .then((response) => {
        dispatch(getAllSitesSuccess(response.data.data));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
}

export function createSites(data, setOpenNew) {
  return (dispatch) => {
    authAxios
      .post(apiEndPoint.CREATE_SITE, data)
      .then((response) => {
        dispatch(addSitesSuccess(response.data.data));
        toast.success("Successfully added");
        setOpenNew(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
}

export function updateSite(data, setOpen) {
  return (dispatch) => {
    authAxios
      .post(apiEndPoint.UPDATE_SITE, data)
      .then((response) => {
        toast.success("Updated successfully");
        dispatch(updateSitesSuccess(response.data.data));
        setOpen(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
}
