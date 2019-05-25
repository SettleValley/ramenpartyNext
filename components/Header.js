import Link from 'next/link'

const Header = ()=>{
    return(
<div className="" id="TopHeader">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <Link href="/"><a className="navbar-brand">Ramen Party</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link href="#">
                                <a className="nav-link">
                                    <i className="fab fa-youtube"></i> Youtube
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a> 
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header