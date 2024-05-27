import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Admin() {

  const [info, setinfo] = useState([])
  const [search, setsearch] = useState("")
  const [selectValue, setSelectValue] = useState("normal")
  const [deleted, sedeleted] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8000/cards')
      .then(res => setinfo(res.data))
  }, [deleted]);
  const deleteData = (id) => {
    axios.delete(`http://localhost:8000/cards/${id}`)
      .then(res => sedeleted(!deleted))
  }

  const sortData = function () {
    if (selectValue == 'a-z') {
      return info.toSorted((a, b) => a.name.localeCompare(b.name))
    }
    else if (selectValue == 'z-a') {
      return info.toSorted((a, b) => b.name.localeCompare(a.name))
    }
    else {
      return [...info]
    }
  }
  let sortedData = sortData()


  const filteredData = sortedData.filter(item => {
    return item.name.toLowerCase().startsWith(search.toLowerCase()
    )
  });

  return (
    <>
     <select onChange={(e) => setSelectValue(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>

      <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder="Search" />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>AD</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            info.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.file} style={{ width: '100px' }} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.cost}</td>
                  <td>
                    <button onClick={() => deleteData(item.id)}>Delete</button>
                  </td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
     
      <Link to='/add'>
        <button className='add'>Add to new</button>
      </Link>
    </>
  )
}

export default Admin
