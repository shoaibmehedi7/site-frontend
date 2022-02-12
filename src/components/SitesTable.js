import {
  Table,
  TableHead,
  TablePagination,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: 500,
      color: "black",
      background: "#f4f6f8",
    },
    "& tbody td": {
      fontWeight: 300,
    },
  },
}));

function SitesTable(records, headCells, filterFn) {
  const classes = useStyles();

  const pages = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const TableContainer = (props) => {
    return <Table className={classes.table}>{props.children}</Table>;
  };

  const TblHead = (props) => {
    const handleSortRequest = (cellId) => {
      const isAsc = (orderBy === cellId);
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={() => handleSortRequest(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
  };

  const TblPagination = () => {
    return (
      <TablePagination
        component="div"
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        page={page}
        count={records.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPage}
      />
    );
  };

  function stableSort(array, comparator) {
    const stablizedThis = array.map((el, index) => [el, index]);
    stablizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);

      if (order !== 0) return order;
      return a[1] - b[1];
    });

    return stablizedThis.map((el) => el[0]);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    } else if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderby) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const recordsAfterPagingAndSorting = () => {
    return stableSort(
      filterFn.fn(records),
      getComparator(order, orderBy)
    ).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  return {
    TableContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  };
}

export default SitesTable;
