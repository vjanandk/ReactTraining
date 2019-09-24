import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentBox extends React.Component{
       
    // constructor
    constructor(){
        // req to call the base constructor
        super();

        // set the initial state
        this.state = {
            // initial state : hidden
            showComment : false,
            commentList : [
                {id : 1, author : "First", body : "This is first comment!!!" },
                {id : 2, author : "Second", body : "This is second comment!!!" },
                {id : 3, author : "Third", body : "This is third comment!!!" }
            ]
        };
    }



    // add a custom method for managing the comments
    _getComments(){
        // return a JSX Code
        // loop through all comments and generate a Comment component
        return this.state.commentList.map(comment => {
            return (<Comment comment_key={comment.id} author={comment.author} body={comment.body} />);
        });
    }

    // custom method to handle button click...
    _handleClick(){
        // this.state.showComment = !this.state.showComment; (not preferred)
        // special method to update the state value:
        this.setState(
            {
                showComment : !this.state.showComment
            }
        );
    }

    // custom method to add new comment
    _addComment(new_author, new_comment){
        // add new comment to existing list
        
        // create a new comment JS Object
        const new_comment_object = {
            id : this.state.commentList.length + 1,
            author : new_author,
            body : new_comment
        };

        // concat with existing list
        this.setState(
            {
                commentList : this.state.commentList.concat([new_comment_object])
            }
        );
    }

    render(){
        // call _getComment
        const comments = this._getComments();
        let commentNodes;
        let buttonText = "Show Comments";
        if(this.state.showComment == true){
            buttonText = "Hide Comments";
            commentNodes = <div id='comment_list'>
                                {comments}
                           </div>    
        }

        return(
            <div>
                <h2>Comments</h2>

                <CommentForm addComment={this._addComment.bind(this)}/>

                <h3>{comments.length} Comments</h3>
                <button id='show_hide_btn' onClick = {this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
        );
    }
}

export default CommentBox;