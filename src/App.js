import { useState } from 'react';
import './App.css';


const countryStateMapping = {
  "india": ["karnataka", "kerala", "andhra pradesh"],
  "usa": ["texas", "sca", "tampa"]
}

const countries = ["india", "usa"]

function App() {
  const [formValues, setFormValues] = useState({
    email: "",
    number: "",
    name: "",
    country: "usa"
  });

  const [entries, setEntries] = useState([])

  const submit = (e) => {
    e.preventDefault();
    setEntries([...entries, formValues])
  }

  const onInputChange =(e) => {
    // console.log(e.target.name)
    setFormValues({...formValues, [e.target.name]: e.target.value })
  }

  const renderEntries = () => {
    return entries.map(({email, name, number, state, country}) => (
      <div>
        {`Email-${email}, Name-${name}, Number-${number}, State-${state}, Country-${country}`}
      </div>
    ))
  }


  return (
    <div className="App">
      <form onSubmit={submit} >
        <input type="email" name="email" placeholder='Email'  onChange={onInputChange} value={formValues.email}/>
        <input type="text" name="name"  placeholder='Name' onChange={onInputChange} value={formValues.name}/>
        <input type="text" name="number" placeholder='Number'  onChange={onInputChange} value={formValues.number}/>
        <select onChange={onInputChange} name="country" value={formValues.country}> 
          {countries.map((c) => <option value={c} key={c}>{c.toUpperCase()}</option>)}
        </select>

        <select onChange={onInputChange} name="state" value={formValues.state}>
          {countryStateMapping[formValues.country].map(s =><option value={s} key={s}>{s.toUpperCase()}</option>)}
        </select>
        <button type='submit'>submit data</button>
      </form>


      {renderEntries()}
    </div>
  );
}

export default App;
