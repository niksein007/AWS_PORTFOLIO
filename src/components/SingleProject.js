function SingleProject(props) {
    return(
        <div id='SingleProject'>
           <img src={props.value} alt={props.index} />
           <p>please <a href='#'>click</a> to view source code</p>

        </div>
    )
}

export default SingleProject