import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TablePagination from '@material-ui/core/TablePagination';
// core components
import Card from "components/Card";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons";
import Table from "components/Table";
import TablePaginationActions from "components/Table/TablePaginationActions.jsx";
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";


import api from "components/Request/api";
// import { Button } from "@material-ui/core";

const style = {
  typo: {
    paddingLeft: "10%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};


class HelloWorldPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: [],
      data: [],
      page: 0,
      rowsPerPage: 5,
      size: 0,
      rowsPerPageOptions: [5, 10, 20, 50, 100, 200, 500],
    }
  }

  UNSAFE_componentWillMount() {
    this.setState({
      // header: ["Name", "Country", "City", "Salary"]
      header: ["ID", "Name", "Email", "Content", "Click"]
    })
    this.fetchData(0, this.state.rowsPerPage)
  }

  async UNSAFE_componentWillReceiveProps(props) {
    this.fetchData(0, this.state.rowsPerPage)
  }

  fetchData = async (page, rowsPerPage) => {
    console.log("fetching table... %o#%o real page: %o", page, rowsPerPage, this.state.page)
    let size = 0
    let end = (page + 1) * rowsPerPage
    if (end > size) end = size
    let fetched_data = await api.get("comments", { _start: page * rowsPerPage, _limit: rowsPerPage })
    console.log("data: %o", fetched_data)

    if (fetched_data && fetched_data.headers && fetched_data.headers["x-total-count"]) {
      size = parseInt((fetched_data.headers)["x-total-count"], 10)
      console.log("value: %o", (fetched_data.headers)["x-total-count"])
    }

    let user_datas = fetched_data.data.map((item, i) => {
      console.log("item: %o, i:%o", item, i)
      let user_data = [
        item["id"],
        item["name"],
        item["email"],
        item["body"],
        <Button color="primary" onClick={e => this.handleClickButton(e, item["id"])}>Operation</Button>
      ]
      return user_data
    })


    this.setState({
      data: user_datas,
      size: size,
      page: page,
      rowsPerPage: rowsPerPage
    })
  }

  handleClickRow = (event, id) => {
    // https://material-ui.com/demos/tables/
    console.log("click row: ev:%o, id: %o", event, id)
  };

  handleClickButton = (event, id) => {
    // https://material-ui.com/demos/tables/
    console.log("click button: ev:%o, id: %o", event, id)
  };

  handleChangePage = (event, page) => {
    // console.log("handleChangePage: ev:%o, id: %o", event, page)
    this.fetchData(page, this.state.rowsPerPage)
  };

  handleChangeRowsPerPage = event => {
    let newRowsPerPage = event.target.value
    // this.setState({rowsPerPage: event.target.value })
    // console.log("handleChangeRowsPerPage: ev:%o // %o", event, newRowsPerPage)
    this.fetchData(this.state.page, newRowsPerPage)
  };

  componentDidMount() {
    this._ismounted = true
  }

  componentWillUnmount() {
    this._ismounted = false
  }


  render() {
    const { classes } = this.props;

    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Hello, World!</h4>
          <p className={classes.cardCategoryWhite}>
            Some customed contents here.
          </p>
        </CardHeader>
        <CardBody>
          <div className={classes.typo}>
            <div className={classes.note}>My Table</div>
            <Table
              tableHeaderColor="primary"
              tableHead={this.state.header}
              tableData={this.state.data}
              handleClickRow={this.handleClickRow}
            />
            <TablePagination
              component="div"
              count={this.state.size}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onPageChange={this.handleChangePage}
              onRowsPerPageChange={this.handleChangeRowsPerPage}
              rowsPerPageOptions={this.state.rowsPerPageOptions}
              ActionsComponent={TablePaginationActions}
            />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Header 1</div>
            <h1>The Life of Material Dashboard</h1>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Header 2</div>
            <h2>The Life of Material Dashboard</h2>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Header 3</div>
            <h3>The Life of Material Dashboard</h3>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Header 4</div>
            <h4>The Life of Material Dashboard</h4>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Header 5</div>
            <h5>The Life of Material Dashboard</h5>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Header 6</div>
            <h6>The Life of Material Dashboard</h6>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Paragraph</div>
            <p>
              I will be the leader of a company that ends up being worth billions
              of dollars, because I got the answers. I understand culture. I am
              the nucleus. I think that’s a responsibility that I have, to push
              possibilities, to show people, this is the level that things could
              be at.
            </p>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Quote</div>
            <Quote
              text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
              author=" Kanye West, Musician"
            />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Muted Text</div>
            <Muted>
              I will be the leader of a company that ends up being worth billions
              of dollars, because I got the answers...
            </Muted>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Primary Text</div>
            <Primary>
              I will be the leader of a company that ends up being worth billions
              of dollars, because I got the answers...
            </Primary>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Info Text</div>
            <Info>
              I will be the leader of a company that ends up being worth billions
              of dollars, because I got the answers...
            </Info>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(HelloWorldPage);
