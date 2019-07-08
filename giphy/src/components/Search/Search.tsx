import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './search.css'
import { ISearch } from '../List/interfacesConstansFunctions'

class Search extends Component<ISearch,ISearch> {

  state:ISearch = {
    inputValue: "random"
  }

  render() {
    let inputValue: HTMLInputElement | null;

    return (
      <div className='search'>
        <input className="InpuSearch" type="text" placeholder="Search..." ref={node => inputValue = node} onInput={e => {
          this.setState({ inputValue: inputValue!.value })
        }} ></input>
        <Link to={`/search/${this.state.inputValue ? this.state.inputValue : "random" }`} >
          <button className="buttonFind">Find</button>
        </Link>
      </div >
    )
  }
}

export default Search;