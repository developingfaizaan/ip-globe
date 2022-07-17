import { BrowserRouter, Switch, Route } from "react-router-dom";
// Context
import { IpProvider } from "./contexts/IpContext";
// Pages
import { IpLookup, UrlTracker, TrackInfo, RedirectPage } from "./pages";
// Styled Components
import Theme from "./styles/theme";
import { Container } from "./styles/GlobalComponents";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <IpProvider>
          <Theme>
            <Route path="/" component={IpLookup} exact />
            <Container>
              <Route path="/url-tracker" component={UrlTracker} />
              <Route path="/track/:id" component={TrackInfo} />
              <Route path="/url/:id" component={RedirectPage} />
            </Container>
          </Theme>
        </IpProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
