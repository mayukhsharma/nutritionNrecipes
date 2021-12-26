import {BrowserRouter,Switch, Route, NavLink} from 'react-router-dom';
import App from './components/App';
import App2 from './components/App2';

function MainRouter(){
    return(
        <BrowserRouter>
            <div className='home'>
            <Switch>
            <Route path="/App" component={App} />
             <Route path="/App2" component={App2} />
            </Switch>
            </div>
        </BrowserRouter>
    );
}

export default MainRouter;