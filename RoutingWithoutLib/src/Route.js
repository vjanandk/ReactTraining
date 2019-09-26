import React from 'react';

// two props : path : component
class Route extends React.Component{

    render(){
        // fetch the url in address bar
        const pathname = window.location.pathname;
        if(pathname.match(this.props.path)){
            // render the component
            return React.createElement(this.props.component);
        }else
            return null;
    }
}

export default Route;