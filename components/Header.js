import Link from 'next/link'

export default () => (
    <div className="" id="TopHeader">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <Link className="navbar-brand" href="/">Ramen Party</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 col-md">
                        <input className="form-control mr-sm-2 col-md-11" type="search" placeholder="Search for a video" aria-label="Search"/>
                        <button className="btn btn-outline-secondary my-2 my-sm-0 col-md" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#"><i className="fab fa-youtube"></i> Youtube</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" href="#"> <i className="fab fa-facebook-square"></i> Facebook</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" href="#"><i className="fab fa-instagram"></i> Instagram</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
)