import SingleProject from "./SingleProject";
function Projects() {
  const project_list = [1, 2, 3, 4];
  const modified_list = project_list.map((value, index) => (
    <SingleProject value={value} index={index} />
  ));

  return (
    <div id="Projects">
      <p>my projects</p>
      
      <div id='projects_container'>{modified_list}</div>
    </div>
  );
}
export default Projects;
