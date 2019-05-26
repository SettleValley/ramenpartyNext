import Link from 'next/link'
import '../scss/custom.css'
const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="container">
                <p>Ramen Party Website Development by: <Link href="#"><a>Settle Valley</a></Link></p>
                <p><Link href="#"><a>Go to the Top!...</a></Link></p>
            </div>
        </footer>
    );
}
export default Footer