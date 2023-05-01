import './App.css'
import {useState, useEffect} from 'react';
import faker from 'faker';


const App = () => {
    const [currentRobot, setCurrentRobot] = useState({});
    const [robotsHistory, setRobotsHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const makeRobot = () => {
        const name = faker.name.findName();
        setCurrentRobot({name});
        setRobotsHistory([...robotsHistory, {name}]);
    }
    useEffect(() => {
        makeRobot();
    }, [])
    return (
        <>
            <h1>GenRobot</h1>
            <div>
                <div style={{display: 'inline-block', textAlign: 'center', background: 'black', borderRadius: '15px'}}>
                    <img src={'https://robohash.org/' + currentRobot.name + '.png'}/>
                    <p>{currentRobot.name}</p>
                </div>
            </div>
            <br/>
            <button onClick={makeRobot}>Make Robot</button>
            <br/>
            <div style={{cursor: 'pointer'}} onClick={() => setShowHistory(!showHistory)}><h1>Historical
                Robots &#9660;</h1></div>
            {
                showHistory === true ? (
                    <div>
                        {robotsHistory.map((robot) => {
                                return <div key={robot} style={{
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    background: 'black',
                                    borderRadius: '15px',
                                    margin: '5px'
                                }}>
                                    <img src={'https://robohash.org/' + robot.name + '.png'}/>
                                    <p>{robot.name}</p>
                                </div>
                            }
                        )}
                    </div>
                ) : null
            }
        </>
    )
}

export default App
