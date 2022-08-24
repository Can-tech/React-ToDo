import React, { useEffect, useState } from 'react'
var id=0;
function Header({list, setList}) {
    const [input, setInput] = useState('');
    const Submit = (e)=>{
        if(input==='') return false;
        e.preventDefault();
        setList([...list ,{data: input, isChecked: false, id:id++}]);
    }
    useEffect(()=>setInput(''),[list])
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={Submit}>
                    <input className="new-todo" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="What needs to be done?" autoFocus />
                </form>
            </header>
        </div>
    )
}

export default Header