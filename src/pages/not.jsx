const NotFound = () =>{
    return(
        <div className="error">
            <h5>error! page not found</h5>
            <Link className="shortcuts" to="/">Go back to home</Link>
        </div>
    );
}

export default NotFound;