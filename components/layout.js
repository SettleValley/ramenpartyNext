import Link from 'next/link'
import Head from 'next/head'
//Components


export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    </Head>
    <header>
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
    </header>

    {children}

    <footer>{'I`m here to stay'}</footer>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </div>
)