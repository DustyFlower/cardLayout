import React from 'react';
import './App.css';
import {Card} from './components/Card.styled';
import {Picture} from './components/Picture.styled';
import {Headline} from './components/Headline.styled';
import {Text} from './components/Text.styled';
import {Button} from './components/Button.styled';

function App() {
    return (
        <div className="App">
            <Card>
                <Picture src={'./Rectangle 1.png'} alt={'pic'}/>
                <Headline>
                    <h3>Headline</h3>
                </Headline>
                <Text>
                    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                </Text>
                <Button buttonType={'first'}>See more</Button>
                <Button buttonType={'second'}>Save</Button>
            </Card>
        </div>
    );
}

export default App;
