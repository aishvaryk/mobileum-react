import AppHeader from './components/AppHeader';
import Game from './components/Game';
import ScroreBoard from './components/ScroreBoard';

const App=(props)=>{

    return (
        <div className='app'>
            <AppHeader title="Tic Tac Toe Extreme"/>
           
            <ScroreBoard/>
            <Game/>
        </div>
    )
};


export default App;
