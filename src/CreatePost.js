const CreatePost = () => {
    return ( 
        <div className="createPost">
            <form >

            <div className="form-inner">
                <h2>Add new Post</h2>

                {/* check for error */}
                {/* {(error !== '') ? ( <div className="error">{error}</div>) : ''} */}
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="name" placeholder='post title' id="title" ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" placeholder='describe item...' id="description" ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price"  id="price" ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" id="location" ></input>
                </div>
                <input type="submit" value="SUBMIT"></input>
                
            </div>

            </form>
        </div>
     );
}
 
export default CreatePost;