import React from 'react';
import 'semantic-ui-css/semantic.min.css'

const SearchBar = (props) =>{
    return (
    <div className="ui category search">
        <div className="ui icon input">
        <input className="prompt" type="text" placeholder="search something..." />
            <i className="search icon"></i>
        </div>
    </div>
    )
}

export default SearchBar;