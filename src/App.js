import { useState, useEffect } from 'react'
import AllPanels from './components/AllPanels'

function App() {
  const [fields, setFields] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/fields')
      .then(response => response.json())
      .then(response => setFields(response))
  }, [])

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

  const deleteField = async (id) => {
    const res = await fetch(`http://127.0.0.1:5000/fields/${id}`, {
      method: 'DELETE'
    })
    res.status === 201 ? setFields(fields.filter((field) => field.id !== id)) : console.log(res.statusText)
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

  return (
    < AllPanels fields={fields} onDelete={deleteField} onAdd={addTask} onUpdate={updateField} />
  );
}

export default App;
