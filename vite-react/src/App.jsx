import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/footer';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import MyButton from './MyButton';
import ProfileCard from './ProfileCard';
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
  const ho1=["Coding", "Traveling", "Cooking"];
        const name = "Mohamed Almazrouei";
 const profession = "full Stack Developer";
  const buttonLabel = "Click Me";
  const unreadMessages = 5;
  const appStyle = { padding: '20px', backgroundColor: '#f0f0f0' };
  const messageStyle = { color: '#333' };
  const now = new Date();
  const isMorning = now.getHours() < 12;
  return (
    
    <div>
      <h1 className='greeting'>Hello, {name}</h1>
      <button style={{ backgroundColor: 'green', color: 'white' }}>
        {buttonLabel}
      </button>
     
      <button onClick={() => alert('Button Clicked!')}> Alert Me!</button>
  <img src="https://placehold.co/100x100" />
      {"\u00A0\u00A0"}
        {"\u00A0\u00A0"}
       <div>
        <MyButton />  {"\u00A0\u00A0"} <MyButton />  {"\u00A0\u00A0"}<MyButton />
      </div>
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
    <ProfileCard name="Mohamed Almazrouei" profession="my self  Developer" isMember={true} hobbies={ho1} />
     <ProfileCard name="Almazrouei" profession="Full Stack Developer" isMember={false} hobbies={ho1} />
      <Header />
      <About />
      <ProjectList />
      <Contact />
    <Footer />
      </div>
  );
}

export default App;