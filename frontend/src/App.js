import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import UpperBar from './components/bar/UpperBar';
import BottomBar from './components/bar/BottomBar';
import LoadingCreate from './components/loading/LoadingCreate';
import LoadingOpen from './components/loading/LoadingOpen';
import * as All from './pages';
import { BrowserView, MobileView } from "react-device-detect";
import qrcode from "static/images/큐알코드.jpg"
import { TOKEN } from './constants';

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
        <BrowserView>
        <Container>
          <p style={{margin:"auto"}}>모바일에서 접속해주세요.</p>
          <br></br>
          <img style={{width:"100px",height:"100px", display:"flex"}} src={qrcode}></img>
        </Container>
        </BrowserView>

        <MobileView>
          <UpperBar></UpperBar>
          <Switch>
            <Route path="/" exact={true} component={All.Main} />

            <Route path="/signup" exact={true} component={All.Signup} />
            <Route path="/login" exact={true} component={All.Login} />

            <Route exact path="/mypage">  {TOKEN ? <All.Mypage /> : <Redirect to="/login" />}</Route>
            <Route exact path="/userupdate">  {TOKEN ? <All.UserUpdate /> : <Redirect to="/login" />}</Route>

            <Route exact path="/loading/create">  {TOKEN ? <LoadingCreate /> : <Redirect to="/login" />}</Route>
            <Route exact path="/loading/open">  {TOKEN ? <LoadingOpen /> : <Redirect to="/login" />}</Route>
            <Route exact path="/letter/create">  {TOKEN ? <All.LetterCreate /> : <Redirect to="/login" />}</Route>
            <Route exact path="/letter/list">  {TOKEN ? <All.LetterList /> : <Redirect to="/login" />}</Route>

            <Route exact path="/group/create">  {TOKEN ? <All.GroupCreate /> : <Redirect to="/login" />}</Route>
            <Route exact path="/group/detail/:clubId">  {TOKEN ? <All.GroupDetail /> : <Redirect to="/login" />}</Route>
            <Route exact path="/group/list">  {TOKEN ? <All.GroupList /> : <Redirect to="/login" />}</Route>

            <Route path="/letter/detail/:code" exact={true} component={All.LetterDetail} />

            <Route component={All.NotFound} />
          </Switch>
          <BottomBar></BottomBar>
        </MobileView>

      </ThemeProvider>
    </div>
  );
}

export default App;
