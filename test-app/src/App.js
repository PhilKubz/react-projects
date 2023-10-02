import './App.css';

// Component
const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

// What Webpage renders (where components are injected)
const App = () => {
return (
    <div className="App">
      <Person name={'Phil'} lastName={'Kubisz'} age={'32'}/>
      <Person />
    </div>
  );
}

export default App;
