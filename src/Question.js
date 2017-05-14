import React from 'react';

function Question(props){
        return (
            <div className="col-xs-3">
                <h2 >{props.left} {props.opp} {props.right} =</h2>

            </div>
        );
    }

export default Question;
