import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// TESTING React-reouter-dom

const PageOne = () => {
  return <div>Pageone</div>;
};

const PageTwo = () => {
  return <div>PageTwo</div>;
};

// return from functional compoent...
/*
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
*/

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
