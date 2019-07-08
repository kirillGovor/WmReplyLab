import React, { Component } from 'react';
import _ from 'lodash';
import '../list.css';
import Imagess from './ImagesForGiphs';
import { IRootObject } from '../interfacesConstansFunctions';

class Trending extends Component<IRootObject,IRootObject> {

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