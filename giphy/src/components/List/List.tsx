import React, { Component } from 'react';
import _ from 'lodash'
import GiphtForMain from './giphs/GiphtForMain';
import StikersForMain from './stickers/StickersForMain'
import './list.css'

class List extends Component {
  render() {

    return (
      <div>
        <div className='list'>
          <GiphtForMain/>
          <StikersForMain/>
        </div>
        <div className="footer">
          <h1>By giphy</h1>
          <p>Company 2019</p>
        </div>
      </div>
    )
  }
}

export default List;