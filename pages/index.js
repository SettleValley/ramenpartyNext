import Layout from '../components/layout'
import Link from 'next/link'

//components
import Jumbotron from './partial/Jumbotron';
//Style
const title = 'Ramen Party'
const Page =()=>{
  return(
    <div>
      <Jumbotron/>
    </div>
  );
}

export default Layout(Page, title)