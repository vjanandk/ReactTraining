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
            // initializing with empty array (no hard coded data)
            commentList : []
        };
    }

    // custom method that will make async call to remote server to fetch comments
    _fetchComments(){
        // fetch data and update the state 
    }

    // life cycle hook method
    componentWillMount(){
        _fetchComments();
    }

    // life cycle hook method
    componentDidMount(){
        // set a interval to call _fetchComments
        // _timer : interval(timer) object
        this._timer = setInterval(()=> this._fetchComments(), 5000);
    }

    // life cycle hook method
    componentWillUnmount(){
        // release the schedule (interval)
        clearInterval(this._timer);
    }


    // child component will pass comment object
    _deleteComment(comment){
        // search for comment object

        // create a clone [ES6 spread operator]
        const comments = [...this.state.commentList];

        // fetch the index of comment
        const index = comments.indexOf(comment);
        comments.splice(index, 1);

        // update the state comment list
        this.setState(
            {
                commentList : comments
            }
        );
    }

    // add a custom method for managing the comments
    _getComments(){
        // return a JSX Code
        // loop through all comments and generate a Comment component
        return this.state.commentList.map(comment => {
            return (<Comment comment_key={comment.id} commentInfo={comment}  onDelete={this._deleteComment.bind(this)}/>);
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