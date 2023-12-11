// import React from 'react';
import Hornedbeast from './Hornedbeast';
import jsonData from './data.json';
import { Container, Row, Col } from 'react-bootstrap';

function Gallery() {
    return (
        <Container>
            <Row>
                {jsonData.map((beast) => (
                    <Col sm={12} md={6} lg={4} key={beast._id}>
                        <Hornedbeast 
                            beast={{ 
                                title: beast.title, 
                                image_url: beast.image_url, 
                                description: beast.description 
                            }} 
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Gallery;