import { Navbar } from "./components/Navbar";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ShowData } from "./components/ShowData";
import { Create } from "./components/Create";
import { Update } from "./components/Update";
import { View } from "./components/View";

function App() {

  const [fields, setFields] = useState([])
  const [toUpdate, setToUpdate] = useState([])
  const [toShow, setToShow] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/fields')
      .then(response => response.json())
      .then(response => setFields(response))
      .catch(error => {
        alert("Could Not fetch the data")
      })
  }, []);

  const addTask = async (field) => {
    const res = await fetch('http://127.0.0.1:5000/fields', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(field)
    })
    const data = await res.json()
    setFields([...fields, data])
  }

  const updateField = async (id, field) => {
    await fetch(`http://127.0.0.1:5000/fields/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(field)
    })
    setFields(fields.map((field1) => field1.id === id ? field : field1))
  }


  const deleteField = async (id) => {
    const res = await fetch(`http://127.0.0.1:5000/fields/${id}`, {
      method: 'DELETE'
    })
    res.status === 201 ? setFields(fields.filter((field) => field.id !== id)) : console.log(res.statusText)
  }

  return (
    <>
      <Navbar />
      <Router>
        <div className="containe m-5">
          <Switch>
            <Route exact path="/" render={() => <ShowData fields={fields} toUpdate={setToUpdate} toShow={setToShow} onDelete={deleteField} />} />
            <Route path="/create" render={() => <Create onAdd={addTask} />} />
            <Route path="/view" render={() => toShow.length ? <View field={toShow} toUpdate={setToUpdate} onDelete={deleteField} /> : window.location.href = "/"} />
            <Route path="/update" render={() => toUpdate.length ? <Update onUpdate={updateField} updateField={toUpdate} /> : window.location.href = "/"} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
