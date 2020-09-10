import React from 'react';

import { Container } from 'react-bootstrap';

import wallpaper from '../assets/images/wallpaper.jpg';

import { getWelcomeText } from '../util/API';

export default function Homepage() {
    let [ welcomeText, setWelcomeText ] = React.useState("");

    React.useEffect(() => {
        async function fetchWelcomeText(){
            let text = await getWelcomeText();
            setWelcomeText(text);
        }
        fetchWelcomeText();
    // eslint-disable-next-line
    }, [])

    return(
        <Container>
            <img src={wallpaper} id="wallpaper_img" alt="wallpaper"></img>
            <h1>Hello world!</h1>
            <h2>Hello world!</h2>
            <h3>Hello world!</h3>
            <h4>Hello world!</h4>
            <h5>Hello world!</h5>
            <h6>Hello world!</h6>
            <p>{welcomeText}</p>
        </Container>
    )
}