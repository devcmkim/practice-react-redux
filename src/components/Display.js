import React from 'react';
import {connect} from "react-redux";

const Display = (props) => {
    return (
        <div className="itmes items3">
            <h2>구독자수 : {props.count}</h2>
        </div>
    );
};
const mapStateToProps = ({subscribers}) => {
    return {
        count: subscribers.count
    }
}

export default connect(mapStateToProps)(Display);