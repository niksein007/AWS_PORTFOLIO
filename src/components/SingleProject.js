function SingleProject(props) {
  const project = props.value;
  return (
    <div id="SingleProject">
      <p>{project.name}</p>
      
      <div id='img_holder'>
          <a href={project.website}>
          <img src={project.picture} alt={project.name} />
          </a>
     </div>
      <p>
        Click <a href={project.github_link}>source code</a> to view 
      </p>
    </div>
  );
}

export default SingleProject;
