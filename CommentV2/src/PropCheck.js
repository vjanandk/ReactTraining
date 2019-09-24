import React from 'react';

class PropCheck extends React.Component{
    
    render(){
        return(
            <div>
                <h3>String : {this.props.propString}</h3>
                <h3>Number : {this.props.propNumber}</h3>
                <h3>Boolean : {this.props.propBool}</h3>
                <h3>Array : {this.props.propArray}</h3>
                <h3>Object(fld1) : {this.props.propObject.fld1}</h3>
                <h3>Function: {this.props.propFunc(10)}</h3>
            </div>
        );
    }
}

PropCheck.defaultProps = {
    propString : "Some String val",
    propNumber : 10,
    propBool : false,
    propArray : [1,2,3,4],
    propObject : {
        fld1 : "First fld",
        fld2 : "Second fld"
    },
    propFunc : function (p) {return p;}
};

export default PropCheck;
