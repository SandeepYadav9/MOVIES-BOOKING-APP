import {
  Button,
  Card,
  CardContent,
  CardHeader,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import Header from "../../common/header/Header";
import moviesData from "../../common/header/moviesData";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="container">
          <ImageList cols={5} className="imageItem">
            {moviesData.map((movie) => (
              <ImageListItem className="listItem" key={movie.id}>
                <img src={movie.poster_url} style={{ height: "auto" }} />
                <ImageListItemBar title={movie.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="releasedmovie">
          <div className="flex-container">
            <ImageList cols={0}>
              {moviesData.map((movie) => (
                <img src={movie.poster_url} alt="" style={{ height: "auto" }} />
              ))}
            </ImageList>
          </div>
          <div className="left" >
            <Card  style={{minWidth: "240px", maxWidth:"240px"}}>
              <CardHeader title="FIND MOVIES BY:" />
              <CardContent>
                <TextField
                  id="standard-basic"
                  label="Movie Name"
                  variant="standard"
                />{" "}
                <br />
                <TextField
                  select
                  id="standard-basic"
                  label="Genres"
                  variant="standard"
                  variant="standard"
                  style={{ width: "93%" }}
                />{" "}
                <br />
                <TextField
                  select
                  id="standard-basic"
                  label="Artists"
                  variant="standard"
                  style={{ width: "93%" }}
                />{" "}
                <br />
                <div>
                  <label htmlFor="standard-basic"> Release Data Start</label>
                  <br />
                  <TextField
                    type="date"
                    id="standard-basic"
                    variant="standard"
                    variant="standard"
                    style={{ width: "93%" }}
                  />
                </div>{" "}
                <br />
                <div>
                  <label htmlFor="standard-basic"> Release Data End</label>
                  <br />
                  <TextField
                    type="date"
                    id="standard-basic"
                    variant="standard"
                    variant="standard"
                    style={{ width: "93%" }}
                  />
                </div><br />
                <div>
                  <Button variant="standard" color="primary"
                style={{width:"93%"}} variant="contained">Apply</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
