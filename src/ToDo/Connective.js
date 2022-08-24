import {useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Connective() {
    const [list, setList] = useState([]);
    const [filter, setFilter] = useState('All');

  return (
    <div>
        
        
        <Header list={list} setList={setList}/>
        <Main list={list} setList={setList} filter={filter}/>        
        <Footer filter={filter} setFilter={setFilter} list={list} setList={setList}/>
        

    </div>
  )
}

export default Connective