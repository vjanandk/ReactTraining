import React from 'react';
import Comment from './Comment';

class CommentBox extends React.Component{
    
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

    render(){
        // call _getComment
        const comments = this._getComments();

        return(
            <div>
                <h2>Comments</h2>
                <h3>{comments.length} Comments</h3>
                {comments}
                {
                    /*
                    <Comment author="First" body="This is first comment" />
                    <Comment author="Second" body="This is second comment"/>
                    <Comment author="Third" />
                    */
                }
            </div>
        );
    }
}

export default CommentBox;