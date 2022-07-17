import { BrowserRouter, Switch, Route } from "react-router-dom";
// Context
import { IpProvider } from "./contexts/IpContext";
// Pages
import { IpLookup, UrlTracker } from "./pages";
// Theme
import Theme from "./styles/theme";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <IpProvider>
          <Theme>
            <Route path="/" component={IpLookup} exact />
            <Route path="/url-tracker" component={UrlTracker} />
          </Theme>
        </IpProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
