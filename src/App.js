import { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true)
  const [itemList, setItemList] = useState()

  return (
    <main>
      <h1>Much Todo</h1>
      <Header 
        setLoading={setLoading}
        setItemList={setItemList} />
      <TodoList
        loading={loading}
        itemList={itemList}
        setLoading={setLoading} 
        setItemList={setItemList}/>
    </main>
  );
}

export default App;
