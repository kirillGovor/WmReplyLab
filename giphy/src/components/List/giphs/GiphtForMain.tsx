import React, { Component } from 'react';
import _ from 'lodash';
import '../list.css';
import { IRootObject, getApi, onClick } from '../interfacesConstansFunctions';
import { Link } from 'react-router-dom';

class Trending extends Component<{}, IRootObject> {

    public state: IRootObject = {
        data: [],
        SavedImages: [],
    };

    componentDidMount() {
        getApi(-18, "gifs").then(arrayImage => //-18 т.к. на гл станичке выводится по 8 изображений
            this.setState({
                data: arrayImage,
            })
        )
    }

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
                    <Link to={'/trending'}> <h1>Giphy</h1></Link>
                    <div className="StyleList">
                        {list}

                    </div>
                    <Link to={'/trending'}><p>see more</p></Link>
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

export default Trending;
