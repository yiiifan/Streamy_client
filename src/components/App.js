import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamEdit from "./Streams/StreamEdit";
import StreamDelete from "./Streams/StreamDelete";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";

import Header from "./Header";
import Footer from "./Footer";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div
          className="ui container segment"
          style={{ backgroundColor: "#16918F" }}
        >
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
