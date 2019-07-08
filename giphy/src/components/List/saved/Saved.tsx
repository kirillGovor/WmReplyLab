import React, { Component } from 'react';
import _ from 'lodash';
import '../list.css';
import { IRootObject, deleteWithLocalStorage } from '../interfacesConstansFunctions';

class Stickers extends Component<IRootObject, IRootObject> {
  public state: IRootObject = {
    data: [],
    SavedImages: []
  };

  componentDidMount() {
    if (window.localStorage.getItem("Saved") && window.localStorage.getItem("Saved") != "{}") {
      var returnvalueJSON1: any = localStorage.getItem("Saved");
      if (returnvalueJSON1) {
        returnvalueJSON1 = JSON.parse(returnvalueJSON1);
        this.setState({ data: returnvalueJSON1 });
      }
    }
  }

  render() {
    if (this.state.data.length > 0) {
      const list = this.state.data.map((item, id) =>
        <div key={id} className="backgroundDeleteImages">
          <img key={Math.floor(Math.random() * 9999)} className="images" style={{ border: "solid 1px black", backgroundColor: "#c7de12" }}
            height={item.images.fixed_height.height} width={item.images.fixed_height.width} src={item.images.fixed_height.url}
            onClick={() => {
              let data = deleteWithLocalStorage(this.state.data, this.state.SavedImages, id)
              this.setState({ data: data })
            }
            }
          ></img>
        </div>
      );

      return (
        <div className="StyleList">
          <h1>Saved</h1><br></br>
          <div className="StyleList">
            {list}
          </div>
        </div>
      )
    }
    else {

      return (
        <div className="StyleList">You dont have save images</div>
      )
    }
  }
}

export default Stickers;