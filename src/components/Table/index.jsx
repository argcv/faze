import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

function CustomTableHead({ ...props }) {
  const { classes, tableHead, tableHeaderColor } = props;
  return (<TableHead className={classes[tableHeaderColor + "TableHeader"]}>
    <TableRow>
      {tableHead.map((prop, key) => {
        return (
          <TableCell
            className={classes.tableCell + " " + classes.tableHeadCell}
            key={key}
          >
            {prop}
          </TableCell>
        );
      })}
    </TableRow>
  </TableHead>);
}

function CustomTableBody({ ...props }) {
  const { classes, tableData, handleClickRow } = props;
  return (<TableBody>
    {tableData.map((prop, key) => {
      return (
        <TableRow
          hover
          onClick={event => handleClickRow ? handleClickRow(event, prop) : null}
          key={key}>
          {prop.map((prop, key) => {
            return (
              <TableCell className={classes.tableCell} key={key}>
                {prop}
              </TableCell>
            );
          })}
          {/* Extra Fields?*/}
          {/* <TableCell className={classes.tableCell} key={-1}>
            {prop[0]}
          </TableCell> */}
        </TableRow>
      );
    })}
  </TableBody>);
}

function CustomTable({ ...props }) {
  // const { classes, tableHead, tableData, tableHeaderColor } = props;
  const { classes, tableHead } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? <CustomTableHead {...props} /> : null}
        <CustomTableBody {...props} />
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  // tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]))),
  // PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html
  handleClickRow: PropTypes.func
};

export default withStyles(tableStyle)(CustomTable);
