import Link from 'next/link'

export default ()=>{
  return(
  <div className="container">
    <div className="row">
        <div className="col-md-8 blog-main">
            <h3 className="pb-4 mb-4 font-italic border-bottom font-weight-bold">From the gallery base</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow-sm border-0 rounded-0 ">
                        <img src="https://via.placeholder.com/480x720" class="card-img-top" alt="..."/>
                        <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">Ghibli Expo ft. Shiroga Productions</footer>
                        </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm border-0 rounded-0 ">
                        <img src="https://via.placeholder.com/480x720" class="card-img-top" alt="..."/>
                        <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">Donde comprar manga en Panamá</footer>
                        </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <aside className="col-md-4 blog-sidebar">
            <div className="p-4 mb-3 bg-light rounded">
                <h4 className="font-italic font-weight-bold">Contact Us</h4>
                <p className="mb-2">
                    Mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </p>
                <form>
                    <div className="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <button type="submit" className="btn btn-dark">Send</button>
                    </form>
            </div>
            <div className="p-4">
                <h4 className="font-italic font-weight-bold">Staff</h4>
                <ol className="list-unstyled mb-0">
                    <li>
                        <Link href="#">
                            <a className="">Victor Baso</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="">Onixzen</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="">KjLynch</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="">......</a>
                        </Link>
                    </li>
                </ol>
            </div>
        </aside>
    </div>
  </div>
  );
}