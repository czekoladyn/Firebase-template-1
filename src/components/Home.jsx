import './Home.css'; // Ensure you have this import if using an external CSS file

function Home() {
    const homeStyle = {
        backgroundColor: '#f0f0f0', // Change this to your desired color
        // ... other styles ...
    };

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div style={homeStyle}>
            <h1>Welcome to the Home Page</h1>
            <div className="basketball-photos">
                <img src="/path/to/basketball1.jpg" alt="Basketball 1" />
                <img src="/path/to/basketball2.jpg" alt="Basketball 2" />
                <img src="/path/to/basketball3.jpg" alt="Basketball 3" />
            </div>
            <p className="red-text">Web</p> {/* Change the color of "Web" to red */}
            <button className="basketball-button">Click Me</button> {/* Basketball-shaped button */}
            <button className="reload-button" onClick={handleReload}>Restart Page</button> {/* Restart page button */}
        </div>
    );
}

export default Home;