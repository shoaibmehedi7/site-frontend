import {
  Box,
  Button,
  Divider,
  Modal,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CreateSiteModal from "../components/CreateSiteModal";
import EditSiteModal from "../components/EditSiteModal";
import SitesTable from "../components/SitesTable";
import { getAllSites } from "../store/apis/sitesApi";
import { isLoggedIn } from "../utils/isLoggedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: "60px 80px",
    display: "flex",
    justifyContent: "center",
  }
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "650px",
  maxHeight: "700px",
  width: "600px",
  maxWidth: "700px",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const headCells = [
  { id: "name", label: "Name" },
  { id: "description", label: "Description" },
  { id: "region", label: "Region" },
  { id: "lat", label: "Lat" },
  { id: "lng", label: "Lng" },
  { id: "action", label: "Action", disableSorting: true },
];

function UserSitesPage() {
  const classes = useStyles();
  const [open, setOpen] = useState(null);
  const [openNew, setOpenNew] = useState(false);
  const dispatch = useDispatch();

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const tableData = useSelector((state) => state.sites.data);
  const newSite = useSelector((state) => state.createSites.data);
  const updateSite = useSelector((state) => state.updateSites.data);

  const {
    TableContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = SitesTable(tableData, headCells, filterFn);

  const userData = useSelector((state) => state.signin.data);

  const isLogged = isLoggedIn();

  useEffect(() => {
    dispatch(getAllSites());
  }, [newSite, updateSite, isLogged]);

  return (
    <Box className={classes.root}>
      <Box style={{ width: "100%" }}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" color={"primary"}>
            Sites
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Typography style={{ fontWeight: "bold", marginRight: "8px" }}>
              {userData.name}
            </Typography>
            <Button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
        <Divider style={{ margin: "10px 0" }}></Divider>
        <Box>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOpenNew(true)}
              >
                Add New
              </Button>
              <Modal
                open={openNew}
                onClose={() => setOpenNew(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    variant="h5"
                    color={"primary"}
                    style={{ margin: "20px" }}
                  >
                    Add New
                  </Typography>

                  <CreateSiteModal setOpenNew={setOpenNew} />
                </Box>
              </Modal>
            </>
          </Box>
          <TableContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.region}</TableCell>
                  <TableCell>{item.lat}</TableCell>
                  <TableCell>{item.lng}</TableCell>
                  <TableCell>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setOpen(item.id)}
                      >
                        Edit
                      </Button>
                      <Modal
                        key={item.id}
                        open={open === item.id}
                        onClose={() => setOpen(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography>Edit Modal</Typography>

                          <EditSiteModal item={item} setOpen={setOpen} />
                        </Box>
                      </Modal>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableContainer>
          <TblPagination />
        </Box>
      </Box>{" "}
    </Box>
  );
}

export default UserSitesPage;
