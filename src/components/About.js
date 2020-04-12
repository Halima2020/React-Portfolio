import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import data from '../myinfo';

class About extends Component {
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            <Accordion defaultActiveKey="0" style={{ width: '28rem' }}>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Education
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>The University of Texas at Dallas<br />
      BA Arts and Technology<br />
      May 2018<br />
      <br />
      Dallas County Community Colleges<br />
      AS Liberal Science<br />
      May 2017</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Work Experience
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>HTML Email Developer, Design<br />
        at TravelClick<br />
        09/2019 - Present<br />
        <br />
        Freelance Graphic and Digital Designer<br />
        May 2017 - Present
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>    

            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='aboutimage'></img> : null}
        </div>  );
    }
}


 
export default About;