import {
  MenuItem,
  Checkbox,
  ListItemText,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  FormControl,
  Select,
  Typography,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import genres from "../../common/header/genres";
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
        <div className="flex-container">
          <div className="left">
            <ImageList className="movieImage" cols={3}  rowHeight={400}>
              {moviesData.map((movie) => (
                <ImageListItem>
                  <img src={movie.poster_url} alt={movie.title} />
                  <ImageListItemBar
                    title={movie.title}
                    subtitle={
                      <span>
                        Release Date:{" "}
                        {new Date(movie.release_date).toDateString()}
                      </span>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>

          <div className="right">
            <h1>Card</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
