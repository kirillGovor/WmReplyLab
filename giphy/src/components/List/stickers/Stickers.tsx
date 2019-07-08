import React, { Component } from 'react';
import _ from 'lodash';
import '../list.css';
import { IRootObject } from '../interfacesConstansFunctions';
import StickersImages from './ImagesForStickers';

class Stickers extends Component<IRootObject,IRootObject> {
  public state: IRootObject = {
    data: [],
    SavedImages: []
  };

  render() {

    return (
      <div className="StyleList">
        <h1>Stickers</h1>
        <StickersImages data={this.state.data} SavedImages={this.state.SavedImages}></StickersImages>
      </div>
    )
  }
}

export default Stickers;