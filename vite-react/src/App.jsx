import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/footer';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import MyButton from './MyButton';
import ProfileCard from './ProfileCard';
import ParentComponent from './ParentComponent';
import React, { useEffect, useState } from 'react';
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
const [backgroundColor, setBackgroundColor] = useState('white');
  const colors =['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'  ];
  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };
  const [formData, setFormData] = useState({
    text:'',
    checkbox: false,
    radio: '',
    select: '',
  });
  const habdleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
const [counters, setCounters] = useState([{id:1, value:0}]);
const addCounters = () => {
  setCounters([...counters, {id: counters.length + 1, value: 0} ]);
}
const incrementCounter = (id) => {
  setCounters(counters.map(counter => 
    counter.id === id ? { ...counter, value: counter.value + 1 } : counter
  ));
}
  const [count, setCount] = useState(0);
  const[step,setStep]=useState(1);
  const incrementCount = () => {
    setCount(count + step);
  };
  const[anotherValue, setAnotherValue] = useState(10);
  useEffect(() => {
 document.title=`Count: ${count+1}`;
 console.log('useEffect Triggered:', count);
}, [count]);
const incrementcountt = () => {
  setCount(count + 1);
} 
  const incrementTwice = () => {
    setCount(prevCount => prevCount + 1 );
     setCount(prevCount => prevCount + 1 );
  };
  const decrementCount = () => {
    setCount(count - step);
  };

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
    
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <h1 className='greeting'>Hello, {name}</h1>
      <button style={{ backgroundColor: 'green', color: 'white' }}>
        {buttonLabel}
      </button>
  <img src="https://placehold.co/100x100" />
      {"\u00A0\u00A0"}
        {"\u00A0\u00A0"}
       <div>
        <MyButton />  {"\u00A0\u00A0"} <MyButton />  {"\u00A0\u00A0"}<MyButton />
      </div>
      <hr />
           <div>
        <ParentComponent />
      </div> 
      <hr/>
       <div>
      <h1>useEffect Hook </h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      {"\u00A0\u00A0"}
       <button onClick={() => setAnotherValue(anotherValue+1)}>Another Value</button>
      </div> 
      <hr/>
       <div>
      <h1>Color Picker</h1>
       <div class="color-palette">
        {colors.map((color, index) => (
          <div
           key={index}
            className="color-box"
            style={{ backgroundColor: color }}
      onClick={() => setBackgroundColor(color)}>

      </div>
      
        ))}

       </div>
        <div className="custom-color-picker">
        <input type="color" value={backgroundColor}
         onChange={(e) => handleColorChange(e.target.value)} />
       </div>
      </div>
       <hr />
       <div class="form-container">
      <h1>Form example</h1>
      <form>
        <div className='form-fild'>
    <label>text:</label>
     <input type="text"
      name="text"
       value={formData.text}
        onChange={habdleChange} />
        <br />
        </div>
         <div className='form-fild'>
    <label> 
      <input 
    type="checkbox"
      name="checkbox"
       checked={formData.checkbox}
        onChange={habdleChange} />
        Checkbox
        </label>
        <br />
        </div>

         <div className='form-fild'>
  <label> Radio:</label>
    <label> 
      <input 
    type="radio"
      name="radio"
       value="option1"
        checked={formData.radio === 'option1'}
         onChange={habdleChange} />
        Option 1
        </label>
         <label> 
      <input 
    type="radio"
      name="radio"
       value="option2"
        checked={formData.radio === 'option2'}
         onChange={habdleChange} />
        Option 2
        </label>
        <br />
        </div>
   <div className='form-fild'>
    <label> Select:</label> 
    <label> 
      <select name="select"
       value={formData.select}
        onChange={habdleChange}>
        <option value="">--Please choose an option--</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
        Select
        </label>
        <br />
        </div>
<div className='form-data'>
  <h3>Form Data:</h3>
  <p><strong>Text:</strong> {formData.text ||'N/A'}</p>
  <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
  <p><strong>Radio:</strong> {formData.radio ||'N/A'}</p>
  <p><strong>Select:</strong> {formData.select ||'N/A'}</p>
        </div>
      </form>
      </div>
      <hr/>
       <div>
      <h1>Counter Value: {count}</h1>
      <input type="number"
       value={step}
        onChange={(e) => setStep(parseInt(e.target.value))} />
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    <button onClick={incrementTwice}>+2</button>
     </div>
<hr />
         <div>
         <button onClick={addCounters}>Add Counter </button>
<ul>
  {counters.map(counter => (
    <li key={counter.id}>
      Counter{counter.id}: {counter.value}
      <button onClick={() => incrementCounter(counter.id)}>increment</button>
      </li>
  ))}
</ul>
         </div>
         <hr />
      <div style={appStyle}>
        <h1>Welcome back!</h1>
        <p style={messageStyle}>
          You have {unreadMessages} unread {unreadMessages === 1 ? "message" : "messages"}.
        </p>
      </div>
      <hr />
    <div >
      {WelcomeMessage("Alice" )}
      {WelcomeMessage("Bob")}
      {WelcomeMessage("Charlie")}
      {Greeting({ isMorning })}
    </div>
    <hr />
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