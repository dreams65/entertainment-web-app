import React from "react";
import '../Search/Search.css';
import searchIcon from '../../assets/icon-search.svg';
import { useDispatch } from 'react-redux';
import { setValue } from "../../redux/slices/searchSlice";

function Search({placeholder}) {

    const dispach = useDispatch();


    function changeHandler(e) {
        dispach(setValue(e.target.value));
    }

    
    return ( 
        <div className="search__fieldset">
            <img className="search__icon" src={searchIcon} alt="search-icon" />
            <input 
                className="search__input" 
                type="text" 
                placeholder={placeholder} 
                onChange={changeHandler}
                maxLength={20}
            />
        </div>
    );
}

export default Search;