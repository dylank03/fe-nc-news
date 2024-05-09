import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownItem} from "react-bootstrap"

const Filters = ({updateSort, updateOrder, updateTopic, orderBy, sortBy, topic})=>{

    return(<div className="d-flex  align-items-center m-auto ms-5 justify-content-center mt-5 bs-breakpoint-lg"><h5 className="ml-inline-5 pl-9 topic-selection">Choose Topic:</h5><div className="topic-selection" role="group" aria-label="topic radio toggle button group">
    <input onClick = {()=>{updateTopic('')}} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked = {true}/>
    <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>
  
    <input onClick = {()=>{updateTopic('coding')}} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
    <label className="btn btn-outline-primary" htmlFor="btnradio2">Coding</label>
  
    <input onClick = {()=>{updateTopic('football')}} type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
    <label className="btn btn-outline-primary" htmlFor="btnradio3">Football</label>
  
    <input onClick = {()=>{updateTopic('cooking')}} type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
    <label className="btn btn-outline-primary" htmlFor="btnradio4">Cooking</label></div>
  
    <Dropdown className="text-center m-auto topic-dropdown">
        <Dropdown.Toggle id="dropdown-basic">
          Topic
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>{updateTopic('')}}>All</Dropdown.Item>
          <Dropdown.Item onClick={()=>{updateTopic('coding')}}>Coding</Dropdown.Item>
          <Dropdown.Item onClick={()=>{updateTopic('football')}}>Football</Dropdown.Item>
          <Dropdown.Item onClick={()=>{updateTopic('cooking')}}>Cooking</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  
      
    
    <div className="d-flex align-items-center m-auto"><h5 className="topic-selection">Sort By:</h5><div className="sort-selection " role="group" aria-label="sort by radio toggle button group">
    <input onClick = {()=>{updateSort('created_at')}} type="radio" className="btn-check" name="btnradio2" id="btnradio5" autoComplete="off" defaultChecked = {true}/>
    <label className="btn btn-outline-primary" htmlFor="btnradio5">Date Created</label>
  
    <input onClick = {()=>{updateSort('title')}} type="radio" className="btn-check" name="btnradio2" id="btnradio6" autoComplete="off"/>
    <label className="btn btn-outline-primary" htmlFor="btnradio6">Title</label>
  
    <input onClick = {()=>{updateSort('author')}} type="radio" className="btn-check" name="btnradio2" id="btnradio7" autoComplete="off"/>
    <label className="btn btn-outline-primary" htmlFor="btnradio7">Author</label>
    
    <input onClick = {()=>{updateSort('votes')}} type="radio" className="btn-check" name="btnradio2" id="btnradio8" autoComplete="off"/>
    <label className="btn btn-outline-primary" htmlFor="btnradio8">Top Rated</label>
    
    <input onClick = {()=>{updateOrder(orderBy === 'ASC' ? 'DESC' : 'ASC')}} type="radio" className="btn-check" name="btnradio3" id="btnradio9" autoComplete="off" defaultChecked={true}/>
    <label className="btn btn-outline-primary" htmlFor="btnradio9">{orderBy === 'ASC' ? <i className="bi bi-sort-alpha-up"></i> : <i className="bi bi-sort-alpha-down"></i>}</label>
  
    </div>
  
  </div>  
  
  <div className="d-flex align-items-center justify-content-center me-5">
  <Dropdown className="sort-dropdown ms-2 ">
        <Dropdown.Toggle id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>{updateSort('created_at')}}>Date Created</Dropdown.Item>
          <Dropdown.Item onClick={()=>{updateSort('title')}}>title</Dropdown.Item>
          <Dropdown.Item onClick={()=>{updateSort('author')}}>author</Dropdown.Item>
          <DropdownItem onClick = {()=>{updateSort('votes')}}>votes</DropdownItem>
        </Dropdown.Menu>
      </Dropdown>   <input onClick = {()=>{updateOrder(orderBy === 'ASC' ? 'DESC' : 'ASC')}} type="radio" className="btn-check sort-dropdown" name="btnradio3" id="btnradio9" autoComplete="off" defaultChecked={true}/>
    <label className="btn btn-outline-primary sort-dropdown" htmlFor="btnradio9">{orderBy === 'ASC' ? <i className="bi bi-sort-alpha-up"></i> : <i className="bi bi-sort-alpha-down"></i>}</label></div></div>)
}

export default Filters