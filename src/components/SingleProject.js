function SingleProject(props) {
  const project = props.value;
  // if number is even apply a different css animation #modulus
  let even_odd = props.number % 2 //returns the remainder 
  // console.log(even_odd);

  return (
    <div className={even_odd !== 0 ?'SingleProject even':'SingleProject odd'} >
      <p>{project.name}</p>
      
      <div className='img_holder'>
          <a href={project.website}>
        <div className='img_msg'><span>click me</span></div>
          <img src={project.picture} alt={project.name} />
          </a>
     </div>
      <p className='source'>
         <a href={project.github_link} className='code'>view source code</a> 
      </p>
    </div>
  );
}

export default SingleProject; 
