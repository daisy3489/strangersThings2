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
                    <textarea type="text" name="message" placeholder='cool item bro....' id="message" ></textarea>
                </div>
                
                <input type="submit" value="SUBMIT"></input>
                
            </div>

        </form>
    );
};

export default SentMessages;