import React from 'react';

class CommentForm extends React.Component{

    // _author = "";
    // _comment = "";

    // custom method to handle submit
    // every event handler method receives an event(JS) Object
    _handleSubmit(event){
        // prevent the default behavior of submit button
        event.preventDefault();

        // access the values of form field
        let author = this._author.value;
        let comment = this._comment.value;

        // propagate info back to parent (using prop method)
        this.props.addComment(author, comment);
    }

    render(){
        return(
            <div>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <label>Join the discussion</label>
                    <br />
                    <input placeholder="Author:" ref={(input) => this._author = input}/>
                    <br />
                    <textarea placeholder="Comment:" ref={(textarea) => this._comment = textarea}/>
                    <br />
                    <button type="submit">Post Comment</button>
                </form>
            </div>
        );
    }
}

export default CommentForm;