import Layout from '../components/layout'

//Partials components
import Jumbotron from './partial/Jumbotron';
import Card from './partial/Card';
//Style
const title = 'Ramen Party'
const Page =()=>{
  return(
    <div>
      <Jumbotron/>
      <Card/>
    </div>
  );
}

export default Layout(Page, title)