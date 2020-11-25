import SingleProject from "./SingleProject";
import projects from './ProjectsContainer'


function Projects() {
// console.log(projects);
  const modified_list = projects.map((value, index) => (
    <SingleProject key={index} value={value} />
  ));

  return (
    <div id="Projects">
      <p>my projects</p>
      
      <div id='projects_container'>{modified_list}</div>
    </div>
  );
}
export default Projects; 
