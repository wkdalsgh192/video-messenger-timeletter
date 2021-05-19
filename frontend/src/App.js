import './App.css';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import UpperBar from './components/bar/UpperBar';
import BottomBar from './components/bar/BottomBar';
import LoadingCreate from './components/loading/LoadingCreate';
import LoadingOpen from './components/loading/LoadingOpen';
import * as All from './pages';
import { BrowserView, MobileView } from "react-device-detect";
import qrcode from "static/images/큐알코드.jpg"

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
          <p style={{margin:"auto"}}>모바일에서 접속해주세요.</p>
          <br></br>
          <img style={{width:"100px",height:"100px"}} src={qrcode}></img>
        </BrowserView>

        <MobileView>
          <UpperBar></UpperBar>
          <Switch>
            <Route path="/" exact={true} component={All.Main} />

            <Route path="/signup" exact={true} component={All.Signup} />
            <Route path="/login" exact={true} component={All.Login} />
            <Route path="/mypage" exact={true} component={All.Mypage} />
            <Route path="/userupdate" exact={true} component={All.UserUpdate} />
            <Route path="/loading/create" exact={true} component={LoadingCreate} />
            <Route path="/loading/open" exact={true} component={LoadingOpen} />

            <Route path="/letter/create" exact={true} component={All.LetterCreate} />
            <Route path="/letter/list" exact={true} component={All.LetterList} />
            <Route path="/letter/detail/:code" exact={true} component={All.LetterDetail} />

            <Route path="/group/create" exact={true} component={All.GroupCreate} />
            <Route path="/group/detail/:clubId" exact={true} component={All.GroupDetail} />
            <Route path="/group/list" exact={true} component={All.GroupList} />
            <Route component={All.NotFound} />
          </Switch>
          <BottomBar></BottomBar>
        </MobileView>

      </ThemeProvider>
    </div>
  );
}

export default App;
