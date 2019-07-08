import React, { Component } from 'react';
import _ from 'lodash';
import './list.css';
import Imagess from './ImagesForGiphs';
import { IRootObject, API_KEY } from './interfaces';


class Trending extends Component<IRootObject> {

  public state: IRootObject = {
    data: [],
    SavedImages: [],
  };



  render() {
   
      return (
        <div className="StyleList">
          <h1>Giphs</h1>
          <Imagess data={this.state.data} SavedImages={this.state.SavedImages}></Imagess>
        </div>
      )
  }
}

export default Trending;
