import React from 'react';

class PropCheck extends React.Component{
    
    render(){

    }
}

PropCheck.defaultProps = {
    propString : "Some String val",
    propNumber : 10,
    propBool : true,
    propArray : [1,2,3,4],
    propObject : {
        fld1 : "First fld",
        fld2 : "Second fld"
    },
    propFunc : function (p) {return p;}
};
