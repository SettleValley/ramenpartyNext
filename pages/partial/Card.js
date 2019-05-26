import Link from 'next/link'

export default ()=>{
  return(
  <div className="container">
    <div className="row mb-2">
        <div className="col-md-6">
            <div className="card mb-3 shadow-sm">
                <div className="row no-gutters">
                    <div className="col-md-8 box_yellow">
                        <div className="card-body ">
                            <strong className="d-inline-block mb-2 yellow">Culture</strong>
                            <h3 className="mb-0">Featured Post</h3>
                            <div className="mb-1 text-muted">
                                June 26
                            </div>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <img src="/static/culture.jpg" className="card-img rounded-0 cover_image" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card mb-3 shadow-sm">
                    <div className="row no-gutters">
                        <div className="col-md-8 box_green">
                            <div className="card-body ">
                                <strong className="d-inline-block mb-2 green">Food Porn</strong>
                                <h3 className="mb-0">Featured Post</h3>
                                <div className="mb-1 text-muted">
                                    June 26
                                </div>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <img src="/static/food.jpg" className="card-img rounded-0 cover_image" alt="..."/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  </div>
  );
}