import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './SearchBar.css'

const SearchBar = (props) =>{
    //const [startSearch,setstartSearch] = useState('')
    const [term,setTerm] = useState('')
    const onSearchSubmit = (e) => {
        e.preventDefault();
        console.log(`the term ${term} has been submitted!`);
        props.onSubmit(term)
    }

    return (
        <div className="ui center aligned segment">
            <form onSubmit={onSearchSubmit} className="ui form">
                    {/* <label>buscar</label> */}
                <div className="ui icon input">
                    <input type="text" value={term} onChange={(event)=>{setTerm(event.target.value);console.log(term)}} />
                    <i className="search icon floated left" onClick={onSearchSubmit}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;