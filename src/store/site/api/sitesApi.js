import { toast } from "react-toastify";
import { authAxios } from "../../../utils/axiosWrapper";
import {apiEndPoint} from "../../../constants/endpoints";
import {
  addSitesError,
  addSitesRequest,
  addSitesSuccess,
  getAllSitesError,
  getAllSitesRequest,
  getAllSitesSuccess,
  updateSitesError,
  updateSitesRequest,
  updateSitesSuccess,
} from "../action/sitesActions";

export function getAllSites() {
  return (dispatch) => {
    dispatch(getAllSitesRequest());
    authAxios
      .post(apiEndPoint.GET_SITES, {})
      .then((response) => {
        dispatch(getAllSitesSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getAllSitesError(error.message));
        toast.error(error.message);
      });
  };
}

export function createSites(data, setOpenNew) {
  return (dispatch) => {
    dispatch(addSitesRequest());
    authAxios
      .post(apiEndPoint.CREATE_SITE, data)
      .then((response) => {
        dispatch(addSitesSuccess(response.data.data));
        toast.success("Successfully added");
        setOpenNew(false);
      })
      .catch((error) => {
        dispatch(addSitesError(error.message));
        toast.error(error.message);
      });
  };
}

export function updateSite(data, setOpen) {
  return (dispatch) => {
    dispatch(updateSitesRequest());
    authAxios
      .post(apiEndPoint.UPDATE_SITE, data)
      .then((response) => {
        toast.success("Updated successfully");
        dispatch(updateSitesSuccess(response.data.data));
        setOpen(false);
      })
      .catch((error) => {
        dispatch(updateSitesError(error.message));
        toast.error(error.message);
      });
  };
}
