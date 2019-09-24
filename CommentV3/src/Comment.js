import React from 'react';

class Comment extends React.Component{
    render(){
        return(
            <div>
                    <p></p>
                    <hr />
                    <p><h4>Author : {this.props.author}</h4></p>
                   
                    <p>{this.props.body}</p>
                    <div>
                        <a href='#'>Delete</a>
                    </div>
            </div>
           
        );
    }
}
Comment.defaultProps = { body : "Some Comment"};


export default Comment;