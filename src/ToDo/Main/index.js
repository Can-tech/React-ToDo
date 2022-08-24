import React from 'react'
export var toDoLeft;

function Main({list, setList, filter}) {
    var completed=[];
     toDoLeft = list.filter((e)=>{ 
        if(e.isChecked===false){ 
            return e
        }else{
            completed.push(e);
        }
    });

     
     
    
if(filter==='All'){
  return (
    <div>
        
        <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
            {
                list.map((e,i)=>
                    <li style={{backgroundColor: '#cbcbb3'}} key={i} className={(e.isChecked)? 'completed':''}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={e.isChecked} onChange={()=>setList([...list], e.isChecked = !e.isChecked)}/>
                            <label>{e.data}</label>
                            <button className="destroy" style={{border: '3px solid'}} onClick={()=>{return setList(()=>[...list], list.splice(list.findIndex(object=>object.id===e.id),1))}}></button>
                            
                            
                        </div>
                    </li>
                )
            }
			
		</ul>
	</section>

    </div>
  )}else if(filter==='Active'){

    return (
        <div>
            
            <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
    
            <ul className="todo-list">
                {
                    toDoLeft.map((e,i)=>
                        <li style={{backgroundColor: '#cbcbb3'}} key={i} className={(e.isChecked)? 'completed':''}>
                            <div className="view">
                                <input className="toggle" type="checkbox" checked={e.isChecked} onChange={()=>setList([...list], e.isChecked = !e.isChecked)}/>
                                <label>{e.data}</label>
                                <button className="destroy" style={{border: '3px solid'}} onClick={()=>{return setList(()=>[...list], list.splice(list.findIndex(object=>object.id===e.id),1))}}></button>
                                
                            </div>
                        </li>
                    )
                }
                
            </ul>
        </section>
    
        </div>
      )

  }else if(filter==='Completed'){

    return (
        <div>
            
            <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
    
            <ul className="todo-list">
                {
                    completed.map((e,i)=>
                        <li style={{backgroundColor: '#cbcbb3'}} key={i} className={(e.isChecked)? 'completed':''}>
                            <div className="view">
                                <input className="toggle" type="checkbox" checked={e.isChecked} onChange={()=>setList([...list], e.isChecked = !e.isChecked)}/>
                                <label>{e.data}</label>
                                <button className="destroy" style={{border: '3px solid'}} onClick={()=>{return setList(()=>[...list], list.splice(list.findIndex(object=>object.id===e.id),1))}}></button>
                                {/* yukarısı oldukça karışık onClick ile listeden silme işleminde liste filitreli olunca sorun oluyor. Yapılan çözüm her gönderiye birer özel id atamak ve özel id üzerinden eşleşen veriyi silmek oldu. Bir başka kolay çözüm olarak filitrerli sayfalardaki silme butonu hepten kadlırılarak o sayfalarda silme işlemi yapması engellenebilir böylece yine bir sorun çıkmazdı silme işlemi yapmak isteyen 'all' sayfasından yapbilirdi. */}
                            </div>
                        </li>
                    )
                }
                
            </ul>
        </section>
    
        </div>
      )

  }
}

export default Main