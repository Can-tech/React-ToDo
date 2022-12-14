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
                                {/* yukar??s?? olduk??a kar??????k onClick ile listeden silme i??leminde liste filitreli olunca sorun oluyor. Yap??lan ????z??m her g??nderiye birer ??zel id atamak ve ??zel id ??zerinden e??le??en veriyi silmek oldu. Bir ba??ka kolay ????z??m olarak filitrerli sayfalardaki silme butonu hepten kadl??r??larak o sayfalarda silme i??lemi yapmas?? engellenebilir b??ylece yine bir sorun ????kmazd?? silme i??lemi yapmak isteyen 'all' sayfas??ndan yapbilirdi. */}
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