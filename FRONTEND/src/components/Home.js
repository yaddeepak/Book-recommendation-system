import React from 'react';
 
function Home() {
 
    const headingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
    };
 
    const imageStyle = {
        width: '100%',
        height: '420px'
    }
    const imageUrl = 'https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png';
    return (
        <>
            <h1 style={headingStyle}>Welcome to Book App!</h1>;
            <img src={imageUrl} alt="bookLogo" style={imageStyle} />
        </>
    )
}
 
export default Home;