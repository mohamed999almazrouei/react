import './App.css'

function WelcomeMessage(name) {
  return <h2>Hello, {name}!</h2>;
}
function Greeting(isMorning) {
  if (isMorning) {
    return <h2>Good Morning!</h2>;  
  }
  return <h2>Good Evening!</h2>;
}
function App() {

  const buttonLabel = "Click Me";
  const unreadMessages = 5;
  const appStyle = { padding: '20px', backgroundColor: '#f0f0f0' };
  const messageStyle = { color: '#333' };
  const now = new Date();
  const isMorning = now.getHours() < 12;
   
   const name = "Mohamed Almazrouei";
    const profession = "full Stack Developer";
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
    <div>
      <h1 className='greeting'>Hello, {name}</h1>
      <button style={{ backgroundColor: 'green', color: 'white' }}>
        {buttonLabel}
      </button>
     
      <button onClick={() => alert('Button Clicked!')}> Alert Me!</button>
  <img src="https://placehold.co/100x100" />
      <div style={appStyle}>
        <h1>Welcome back!</h1>
        <p style={messageStyle}>
          You have {unreadMessages} unread {unreadMessages === 1 ? "message" : "messages"}.
        </p>
      </div>

    <div >
      {WelcomeMessage("Alice" )}
      {WelcomeMessage("Bob")}
      {WelcomeMessage("Charlie")}
      {Greeting({ isMorning })}
    </div>

      
      <div className='APP'>
        <header className='header'>
          <h1>{name}</h1>
          <p>{profession}</p>
<nav>
  <a href="#about">About</a >
  {"\u00A0\u00A0"}
  <a href="#projects">Projects</a>
  {"\u00A0\u00A0"}
  <a href="#contact">Contact</a>
</nav>
</header>
      </div>
   <section id="about" style={{ padding: '40px 20px', backgroundColor: '#e0e0e0' }}>
      <p>
        Hello! I am mohamed almazrouei , a passionate Full Stack Developer. I love building web 
        application that solves real world user problems.
      </p>
</section>
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
   <section id="contact" style={{ padding: '40px 20px', backgroundColor: '#e0e0e0' }}>
      <h2 style={{ fontSize: '42px', marginBottom: '40px' }}>
     contact me
      </h2>
      <p style={{ fontSize: '20px', margin: '0' }}>
        You can reach me at <a href="mailto:mohamed@example.com">mohamed@example.com</a>
      </p>

</section>
<section id="footer" style={{ padding: '20px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <p style={{ margin: '0' }}>
        &copy; 2026 Mohamed Almazrouei. All rights reserved.
      </p>
</section>
      </div>
  );
}

export default App;