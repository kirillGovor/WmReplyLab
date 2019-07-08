import React, { Component } from 'react';
import _ from 'lodash';
import InfiniteScroll from "react-infinite-scroll-component";
import '../list.css';
import { IRootObject, getApi, onClick } from '../interfacesConstansFunctions';

class Imagess extends Component<IRootObject, IRootObject>{

  constructor(props: IRootObject) {
    super(props)
  }

  public state: IRootObject = {
    data: [],
    SavedImages: [],
  };

  componentDidMount() {
    getApi(0, "gifs").then(arrayImage =>
      this.setState({
        data: arrayImage,
      })
    )
  }

  fetchMoreData = () => {
    getApi(this.state.data.length, "gifs").then(arrayImage =>
      this.setState({
        data: arrayImage,
      })
    )
  };

  render() {
    if (this.state.data) {
      const list = this.state.data.map((item, k) =>
        <div key={k} className="backgroundImages">
          <img key={k} className="images" style={{ border: "solid 1px black", backgroundColor: "#c7de12" }}
            height={item.images.fixed_height.height} width={item.images.fixed_height.width} src={item.images.fixed_height.url}
            onClick={() => onClick(item)}
          ></img>
        </div>
      );

      return (
        <div className="StyleList">
          <InfiniteScroll
            dataLength={this.state.data.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {list}
          </InfiniteScroll>
        </div>
      )
    }

    else {
      return (
        <div className="StyleList">Loading...</div>
      )
    }
  }
}

export default Imagess;