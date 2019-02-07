import React  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from './history';

const App = () => {
  return (
    <div  className="ui container">
      <BrowserRouter history={history}>
       <div>
          <Header />
          <Route path="/" component={StreamList} exact />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;