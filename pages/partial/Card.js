import Link from 'next/link'

export default ()=>{
  return(
  <div className="container">
    <div className="row mb-2">
        <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-md-8 p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Manga</strong>
                    <h3 className="mb-0">Featured Post</h3>
                    <div className="mb-1 text-muted">
                        Agust 12
                    </div>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                    </p>
                    <Link href="#">
                        <a className="stretched-link">Continue Reading...</a>
                    </Link>
                </div>
                <div className="col-md-4 d-none d-lg-block">
                    <img className="card-img rounded-right" src="https://via.placeholder.com/480x720"/>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-md-8 p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Food Porn</strong>
                    <h3 className="mb-0">Featured Post</h3>
                    <div className="mb-1 text-muted">
                        June 26
                    </div>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                    </p>
                    <Link href="#">
                        <a className="stretched-link">Continue Reading...</a>
                    </Link>
                </div>
                <div className="col-md-4 d-none d-lg-block">
                    <img className="card-img rounded-right" src="https://via.placeholder.com/480x720"/>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}