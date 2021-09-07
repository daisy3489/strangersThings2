import React from 'react';

const SentMessages = () => {

    //handle submit
    const submitHandler = e => {
        e.preventDefault();
    }


    return (
        <form onSubmit={submitHandler}>

            <div className="form-inner">
                <h2>Leave a Message</h2>
                {/* check for error */}
                {/* {(error !== '') ? ( <div className="error">{error}</div>) : ''} */}
                <div className="form-group">
                    <label htmlFor="comment">Leave a comment: </label>
                                                                        {/* any time we change it, we're calling a function and we're passing through the event. The event holds the tartget value. we're updating the set details and we're passing through the new value for name. and that should now update name  */}
                    <textarea type="text" name="message" placeholder='cool item bro....' id="message" ></textarea>
                </div>
                
                <input type="submit" value="SUBMIT"></input>
                
            </div>

        </form>
    );
};

export default SentMessages;