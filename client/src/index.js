import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import client from './apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";
import ViewerProvider from './context/ViewerProvider'
import "./index.css";
import ItemPreviewProvider from "./context/ItemPreviewProvider";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <ItemPreviewProvider>
          <ViewerProvider>
            <Router>
              <AppRoutes />
            </Router>
          </ViewerProvider>
        </ItemPreviewProvider>
      </ApolloProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
