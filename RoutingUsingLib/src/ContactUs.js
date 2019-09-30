import React from 'react';

class ContactUs extends React.Component{
    // custom method that handles submission of contact form
    _handleSubmit(){
        // logic of contact us submission

        // need to navigate to home page
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <h1>This is contact us page!!!</h1>
                <form>
                    <input placeholder="name" />
                    <input placeholder="email" />
                    <button onClick={this._handleSubmit.bind(this)}>Submit</button>
                </form>
            </div>

        );
    }
}

export default ContactUs;