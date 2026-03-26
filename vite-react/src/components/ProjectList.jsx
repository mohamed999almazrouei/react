function ProjectList() {
       
const projects = [
    {
      
      title: "Project One",
      description: "  👆A web application built using React and Node.js",
      link: "#"
    },
    {
      title: "Project Two",
      description: "  👆An eCommerce platform built using Django",
      link: "#"
    }
  ];

  return (
    <section id="projects" style={{ padding: '400px 20px', backgroundColor: '#e0e0e0' }}>
      
      <h2 style={{ fontSize: '42px', marginBottom: '40px' }}>
        Projects
      </h2>
      <div className='project-list'>
        {projects.map((project, index) => (
          <div key={index} className='project-item' style={{ marginBottom: '30px' }}>
            <h3>
              {project.title}
            </h3>
            <p style={{ fontSize: '20px', margin: '0' }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
</section>
  );
}
export default ProjectList;