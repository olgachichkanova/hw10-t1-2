import { useSelector } from 'react-redux';
import Form from './components/Form';
import List from './components/List';
import Search from './components/Search';

import './App.css';


function App() {
  const data = useSelector(state => state.data);
  const query = useSelector(state => state.filter)

  const filterData = (items) => {
    return items.filter(i => i.name.toLowerCase().includes(query.value.toLowerCase()))
  }
  console.log(filterData(data))

  return (
    <div className="App">
      <div className="container">
        <Form />
        <Search />
        <hr />
        <List data={filterData(data)} />
      </div>
    </div>
  );
}

export default App;
