import React from 'react';


class Users extends React.Component{
    render(){
        // need to access the url parameters
        // url param are available through props
        // this.props.match : JS object  : contains all data as key-value pairs
        const {params} = this.props.match;
        return(
            <div>
                <h1>This is user dashboard</h1>
                <h2>User with id : {params.id}</h2>
            </div>
        );
    }
}

export default Users;