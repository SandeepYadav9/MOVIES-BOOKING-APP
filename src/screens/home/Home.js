import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
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
                <img src={movie.poster_url} style={{ height: "auto" }}/>
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
          <div className="left">24%</div>
        </div>
      </div>
    );
  }
}

export default Home;
