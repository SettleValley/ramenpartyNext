import Link from 'next/link'

const Header = ()=>{
    return(
<div className="" id="TopHeader">
    <div className="container">
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <Link href="#">
                        <a class="text-muted" >Subscribe</a>
                    </Link>
                </div>
                <div className="col-4 text-center">
                    <Link href="#">
                        <a class="blog-header-logo text-dark" >Ramen Party</a>
                    </Link>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <Link>
                        <a className="nav-link">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </Link>
                    <Link>
                        <a className="nav-link">
                            <i className="fab fa-instagram"></i>
                        </a> 
                    </Link>
                </div>
            </div>
        </header>
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <Link>
                    <a className="p-2 text-muted">Manga</a>
                </Link>
                <Link>
                    <a className="p-2 text-muted">Culture</a>
                </Link>
                <Link>
                    <a className="p-2 text-muted">Animation</a>
                </Link>
                <Link>
                    <a className="p-2 text-muted">Technology</a>
                </Link>
                <Link>
                    <a className="p-2 text-muted">Style</a>
                </Link>
                <Link>
                    <a className="p-2 text-muted">Travel</a>
                </Link>
                <Link>
                    <a className="p-2 text-muted">Food</a>
                </Link>
            </nav>
        </div>
    </div>
</div>
    );
}
export default Header