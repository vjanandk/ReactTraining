import React from 'react';

class Welcome extends React.Component{
    // override the render method (provided by component)
    render(){
        // return(<p>Welcome All</p>)
        var current = new Date();
        var names = ["First", "Second", "Third"];
        return(
            <div>
                <h3>Welcome All</h3>
                <p>Current Time {current.toTimeString()}</p>
                <p>Sample para</p>
                <ul>
                    { names.map(name => <li>{name}</li>) }
                </ul>
            </div>
        );
    }
}

// making Welcome class available to other files as well
export default Welcome;