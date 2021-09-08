import { useEffect, useState } from 'react';
import './App.css';
import * as Constants from './constants';
import axios from 'axios';
import Student from './components/Student';

function App() {
  const [data, setData] = useState({ students: [] } );

  useEffect( () => {
    const fetchData = async () => {
      // Call GraphQL API
      const queryResult = await axios.post (
        Constants.GRAPHQL_API, {
          query: Constants.GET_STUDENTS_QUERY
        }
      );

      console.log(queryResult.data.students);
      // Update the component State
      const result = queryResult.data.data;
      console.log(result)
      setData({ students: result.students })
    };

    fetchData();
  })

  return (
    <div className="App">
      <h1>List of students</h1>
      <ul>
        {data.students.map(item => (
          <li key={item._id}>
            <Student item={item}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
