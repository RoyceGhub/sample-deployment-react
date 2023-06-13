import {Card, Col, Button,Container,Row} from 'react-bootstrap';
import "./style.css"

const GridItems = (props) => {
    return (

                    <Col md = "4">
                        <Card className='cardStyle'>
                            <Card.Img src={props.image}/>
                            <Card.Body>
                                <Card.Title>
                                    {props.title}
                                </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis.
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                            <Button variant="warning">More Info</Button>
                        </Col>
     );
}

export default GridItems;
 