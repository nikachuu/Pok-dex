import React from "react";
import "./SearchButton.css";

function SearchButton(props) {

    let classes = "btn";

    if ( props.disabled ) {
        classes += " btn--disabled";
    };

    return (
        <input
            className={classes}
            type="submit"
            value={props.value}
            disabled={props.disabled}
        />
    );
};

export default SearchButton;