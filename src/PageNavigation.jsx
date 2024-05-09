const PageNavigation = ({page, pageButton, articleCount, updatePage})=>{
    return(<div aria-label="Page navigation" className="d-flex justify-content-center">
    <ul className="pagination">
      {page > 1 && <li className="page-item"><button className="page-link" onClick = {()=>(updatePage(+page -1))}>Previous</button></li>}
        {pageButton.map((button, index)=> {return <li key ={index} className="page-item"><button className="page-link" onClick = {()=>(updatePage(index +1))}>{index +1}</button></li>})}
      {page <= articleCount/10 && <li className="page-item"><button className="page-link" onClick = {()=>(updatePage(+page +1))}>Next</button></li>}
    </ul></div>)
}

export default PageNavigation