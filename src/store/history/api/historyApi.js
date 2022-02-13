import { toast } from "react-toastify";
import { authAxios } from "../../../utils/axiosWrapper";
import { apiEndPoint } from "../../../constants/endpoints";
import {
  getHistoriesError,
  getHistoriesRequest,
  getHistoriesSuccess,
} from "../action/historyActions";

export function getHistoryBySiteId(req) {
  return (dispatch) => {
    dispatch(getHistoriesRequest());
    authAxios
      .post(apiEndPoint.GET_HISTORY_BY_ID, req)
      .then((response) => {
        dispatch(getHistoriesSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getHistoriesError(error.message));
        toast.error(error.message);
      });
  };
}
