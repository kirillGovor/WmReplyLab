import React, { Component } from 'react';
import _ from 'lodash';
import '../list.css';
import { Link } from 'react-router-dom';
import { IRootObject, onClick, getApi } from '../interfacesConstansFunctions';

class StickersForMain extends Component<IRootObject,IRootObject> {

    public state: IRootObject = {
        data: [],
        SavedImages: [],
    };

    componentDidMount() {
        getApi(-18, "stickers").then(arrayImage => //-18 т.к. на гл станичке выводится по 8 изображений
            this.setState({
                data: arrayImage,
            })
        )
    }

    render() {
        if (this.state.data.length > 0) {
            const list = this.state.data.map((item, k) =>
                <div key={k} className="backgroundImages">
                    <img key={k} className="images" style={{ border: "solid 1px black", backgroundColor: "white" }}
                        height={item.images.fixed_height.height} width={item.images.fixed_height.width} src={item.images.fixed_height.url}
                        onClick={() => onClick(item)}
                    ></img>
                </div>
            );
            return (

                <div className="StyleList">
                    <Link to={'/stickers'}><h1>Stickers</h1></Link>
                    <div className="StyleList">
                        {list}
                    </div>
                    <Link to={'/stickers'}><p>see more</p></Link>
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

export default StickersForMain;