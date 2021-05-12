import './App.css';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import UpperBar from './components/bar/UpperBar';
import BottomBar from './components/bar/BottomBar';
import * as All from './pages';


const theme = createMuiTheme({
  typography: {
    // fontFamily: 'Cute+Font'
    // fontFamily: 'Jua',
    fontFamily: 'Cafe24Oneprettynight',

  }
})

function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UpperBar></UpperBar>
        <Switch>
          <Route path="/" exact={true} component={All.Main} />

          <Route path="/signup" exact={true} component={All.Signup} />
          <Route path="/login" exact={true} component={All.Login} />
          <Route path="/mypage" exact={true} component={All.Mypage} />
          <Route path="/userupdate" exact={true} component={All.UserUpdate} />

          <Route path="/letter/create" exact={true} component={All.LetterCreate} />
          <Route path="/letter/list" exact={true} component={All.LetterList} />
          <Route path="/letter/detail/:id" exact={true} component={All.LetterDetail} />

          <Route path="/group/create" exact={true} component={All.GroupCreate} />
          <Route path="/group/detail" exact={true} component={All.GroupDetail} />
          <Route path="/group/list" exact={true} component={All.GroupList} />
          <Route component={All.NotFound} />
        </Switch>
        <BottomBar></BottomBar>
      </ThemeProvider>
    </div>
  );
}

export default App;
