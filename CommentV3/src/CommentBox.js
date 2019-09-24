import React from 'react';
import Comment from './Comment';

class CommentBox extends React.Component{
    

    // instance member
    // _show = false;
    // constructor
    constructor(){
        // req to call the base constructor
        super();

        // set the initial state
        this.state = {
            // initial state : hidden
            showComment : false
        };
    }



    // add a custom method for managing the comments
    // 1. hold repo for comments
    // 2. generate jsx for list of comments
    // _ helps to distinguish custom methods from React ones...
    _getComments(){
        // repo
        // call REST api resources (AJAX request)
        const commentList = [
            {author : "First", body : "This is first comment!!!" },
            {author : "Second", body : "This is second comment!!!" },
            {author : "Third", body : "This is third comment!!!" },
        ];

        // return a JSX Code
        // loop through all comments and generate a Comment component
        return commentList.map(comment => {
            return (<Comment author={comment.author} body={comment.body} />);
        });
    }

    // custom method to handle button click...
    _handleClick(){
        // need to toggle the boolean value
        // not a preferred way (now deprecated as well)
        // if any state value is changed directly 
        // it also updates the complete object
        // this.state.showComment = !this.state.showComment;

        // special method to update the state value:
        this.setState(
            {
                showComment : !this.state.showComment
            }
        );

        // change in instance variable
        // this._show = !this._show;
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
                <h3>{comments.length} Comments</h3>
                <button id='show_hide_btn' onClick = {this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
        );
    }
}

export default CommentBox;