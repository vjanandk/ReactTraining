import React from 'react';

// props : to : path
class Link extends React.Component{

    // custom method to define the behavior of anchor tag
    _handleClick(event){
        // prevent default behavior
        event.preventDefault();
    }
    render(){
        return(
            <a href={this.props.to} onClick={this._handleClick.bind(this)}>{this.props.children}</a>
        );
    }
}

export default Link;