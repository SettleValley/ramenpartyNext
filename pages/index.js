import Layout from '../components/layout'

//Partials components
import Jumbotron from './partial/Jumbotron';
import Card from './partial/Card';
import Feature from './partial/Feature';
//Style
const title = 'Ramen Party'
const Page =()=>{
  return(
    <div>
      <Jumbotron/>
      <Card/>
      <Feature/>
    </div>
  );
}

export default Layout(Page, title)