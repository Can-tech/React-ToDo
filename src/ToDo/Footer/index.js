import { Renderer } from 'leaflet'
import PropTypes from 'prop-types'
import {toDoLeft} from '../Main/index'

function Footer({filter, setFilter, list, setList}) {
  return (
    <div>
        <footer className="footer">
		<span className="todo-count">
			<strong>{toDoLeft.length} </strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className={filter==='All'? 'selected' : ''} onClick={()=>setFilter('All')}>All</a>
			</li>
			<li>
				<a href="#/" className={filter==='Active'? 'selected' : ''} onClick={()=>setFilter('Active')}>Active</a>
			</li>
			<li>
				<a href="#/" className={filter==='Completed'? 'selected' : ''} onClick={()=>setFilter('Completed')}>Completed</a>
			</li>
		</ul>
		{list.some((e)=>e.isChecked===true) && filter!=='Active'	
				? <button className="clear-completed" onClick={()=>{if(window.confirm('Are you sure?')) return setList( list.filter((e)=>e.isChecked===false))}}>
					Clear completed
				  </button>
				: false
			
				
		}
				
			
		
	</footer>

    </div>
  )
  
}
Footer.defaultProps = {
    filter: 'All'
}
Footer.propTypes = {
    filter: PropTypes.string.isRequired
}



export default Footer