import Nav from '../../component/Navigation/Nav';
import SpinAndWin from '../../component/spin-reward/spin';
import './game.scss';


function Game() {
    return (
        <div className='Game-container'>
            <Nav />

            <div><h1>Spin reward</h1></div>
            <SpinAndWin />
        </div>
    )
};

export default Game;