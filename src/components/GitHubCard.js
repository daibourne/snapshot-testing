import React from 'react';
import { Card } from 'react-bootstrap';

const GitHubCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img varient='top' src='https://drive.google.com/file/d/1EJcjU18hsZ7vK1pmL5baKV8vET_MEU6w/view?usp=sharing' alt='Daijon Bourne'/ >
            <Card.Body>
                <Card.Title>daibourne</Card.Title>
                <Card.Text>The defination of beatuiful</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default GitHubCard;