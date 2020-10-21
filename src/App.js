import React from 'react';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Homepage } from './components/views/Homepage/Homepage';
import { Login } from './components/views/Login/Login';
import { Kitchen } from './components/views/Kitchen/Kitchen';
import { Tables } from './components/views/Tables/Tables';
import { Waiter } from './components/views/Waiter/Waiter';
import { Booking } from './components/views/Booking/Booking';
import { NewBooking } from './components/views/NewBooking/NewBooking';
import { NewEvent } from './components/views/NewEvent/NewEvent';
import { Event } from './components/views/Event/Event';
import { Order } from './components/views/Order/Order';
import { NewOrder } from './components/views/NewOrder/NewOrder';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBooking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/evens/new`} component={NewEvent} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={Event} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
