import React, { Component } from 'react';
import _ from 'lodash'
import { RouteProps } from 'react-router';
import InfiniteScroll from "react-infinite-scroll-component";
import { IRootObject, onClick, IProps, search } from '../List/interfacesConstansFunctions';

class Searched extends Component<IProps & RouteProps>  {

  public state: IRootObject = {
    data: [],
    find: '',
    SavedImages: [],
    type: "gifs",
    updateFind: false
  };

  constructor(props: IProps) {
    super(props)
  }

  componentDidMount() {
    let recivedMessage: string = this.props.location!.pathname.replace('/', '');
    recivedMessage = this.props.location!.pathname.replace('/', '');
    recivedMessage = recivedMessage.split('/')[1];
    search(recivedMessage, this.state.data.length, this.state.type).then(arrayImage =>
      this.setState({
        data: arrayImage,
        find: recivedMessage,
        updateFind: false
      })
    )
  }

  componentDidUpdate() {
    let recivedMessage: string = this.props.location!.pathname.replace('/', '');
    recivedMessage = this.props.location!.pathname.replace('/', '');
    recivedMessage = recivedMessage.split('/')[1];
    if (this.state.find !== recivedMessage || this.state.updateFind === true) {
      search(recivedMessage, 0, this.state.type).then(arrayImage =>
        this.setState({
          data: arrayImage,
          find: recivedMessage,
          updateFind: false
        })
      )
    }
  }

  fetchMoreData = () => {
    let recivedMessage: string = this.props.location!.pathname.replace('/', '');
    recivedMessage = this.props.location!.pathname.replace('/', '');
    recivedMessage = recivedMessage.split('/')[1];
    search(recivedMessage, this.state.data.length, this.state.type).then(arrayImage =>
      this.setState({
        data: arrayImage,
        find: recivedMessage,
        updateFind: false
      })
    )
  };

  render() {
    if (this.state.data.length > 0) {
      const list = this.state.data.map((item, k) =>
        <div key={k} style={{ width: item.images.fixed_height.width }} className="backgroundImages">
          <img key={Math.floor(Math.random() * 9999)} className="images" style={{ border: "solid 1px black", backgroundColor: "#c7de12" }} height={item.images.fixed_height.height}
            width={item.images.fixed_height.width} src={item.images.fixed_height.url}
            onClick={() => onClick(item)}
          ></img>
        </div>
      );
      return (
        <div>
          <h3 onClick={() => this.setState({ type: "gifs", updateFind: true })}>gifs</h3>
          <h3 onClick={() => this.setState({ type: "stickers", updateFind: true })}>stickers</h3>

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

export default Searched;