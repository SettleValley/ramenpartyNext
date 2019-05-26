import Link from 'next/link'

export default ()=>{
  return(
  <div className="container">
    <section className="jumbotron p-4 p-md-5 text-white rounded bg-dark itadakimasu opacity">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">It's Not Just Food</h1>
          <p className="lead my-3">
            Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
          </p>
          <p className="lead mb-0">
            <Link href="#">
              <a className="text-white font-weight-bold">Let me know, what about it?...</a>
            </Link>
          </p>
        </div>
    </section>
  </div>
  );
}