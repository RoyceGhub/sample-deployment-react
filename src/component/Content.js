import {Container,Row} from 'react-bootstrap'
import GridItems from './GridItems';
import item1 from "./../images/1.png";
import item2 from "./../images/2.png";
import item3 from "./../images/3.png";
import item4 from "./../images/4.png";
import item5 from "./../images/5.png";

const  Content = () => {
    return ( 
        <div className='bg-dark bg-gradient text-warning'>
            <br/>
        <Container>
            <h1>Top 5 Animes of the week</h1>
            <br></br>
            <Row className='cardStyle'>
                <GridItems image={item1} title="Kimetsu no yaiba"/>
                <GridItems image={item2} title="Anime 2"/>
                <GridItems image={item3} title="Anime 3"/>
                <GridItems image={item4} title="Anime 4"/>
                <GridItems image={item5} title="Anime 5"/>
            </Row>
        </Container>
        </div>
     );
}
 
export default Content;