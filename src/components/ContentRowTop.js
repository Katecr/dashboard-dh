import React from "react";
import MoviesInDb from "./MoviesInDb.js";
import ContentRowMovies from "./ContentRowMovies.js";

let moviesInDb ={
	title:'Movies in Data Base',
	borderColor:'primary',
	icon:'fa-film',
	quantity:21
}

let totalAwars = {
	title:'Total awards',
	borderColor:'success',
	icon:'fa-award',
	quantity:79
}

let actorsQuantity = {
	title:'Actors quantity',
	borderColor:'warning',
	icon:'fa-user',
	quantity:49
}

let carProps = [moviesInDb,totalAwars,actorsQuantity]

function ContentRowTop() {
  return (
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
      
        {/* <!-- Content Row Movies--> */}
        <ContentRowMovies carProps = {carProps}/>
        {/* <!-- End movies in Data Base --> */}				

        {/* <!-- Content Row Last Movie in Data Base --> */}
        <MoviesInDb />
    </div>
  );
}

export default ContentRowTop;