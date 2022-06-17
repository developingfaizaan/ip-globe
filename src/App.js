import { BrowserRouter, Switch, Route } from "react-router-dom";
// Context
import { IpProvider } from "./contexts/IpContext";
// Pages
import { IpLookup } from "./pages";
// Theme
import Theme from "./styles/theme";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <IpProvider>
          <Theme>
            <Route path="/" component={IpLookup} />
          </Theme>
        </IpProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
