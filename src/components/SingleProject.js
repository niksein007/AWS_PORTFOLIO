function SingleProject(props) {
  const project = props.value;
  return (
    <div id="SingleProject">
      <p>{project.name}</p>
      
      <div id='img_holder'>
          <a href={project.website}>
        <span id='img_msg'>click me</span>
          <img src={project.picture} alt={project.name} />
          </a>
     </div>
      <p id='source'>
         <a href={project.github_link} id='code'>view source code</a> 
      </p>
    </div>
  );
}

export default SingleProject;
