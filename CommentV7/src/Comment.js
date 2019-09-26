import React from 'react';

class Comment extends React.Component{

    // custom method to be called when delete is clicked
    _handleDelete(event){
        // prevent default behavior of href
        event.preventDefault();

        // need to call prop method and pass the comment info to parent
        this.props.onDelete(this.props.commentInfo);
    }

    render(){
        return(
            <div>
                    <p></p>
                    <hr />
                    <p><h4>Author : {this.props.commentInfo.author}</h4></p>
                   
                    <p>{this.props.commentInfo.body}</p>
                    <div>
                        <a href='#' onClick={this._handleDelete.bind(this)}>Delete</a>
                    </div>
            </div>
           
        );
    }
}
Comment.defaultProps = { body : "Some Comment"};


export default Comment;