import React from 'react';
import {Route, IndexRoute, hashHistory} from 'react-router';
import App from './containers/App';

// Dashboard Pages Routes
import DashboardPage from './containers/ADL/Dashboard/DashboardPage';
// System Pages Routes
import ManageUser from './containers/ADL/System/manageUser';
import ManageVendor from './containers/ADL/System/manageVendor';
import ManageAgency from './containers/ADL/System/manageAgency';
import ManageCustomer from './containers/ADL/System/manageCustomer';
import ManageActivity from './containers/ADL/System/manageActivity';
// Homespassed
import HomesPassed from './containers/ADL/Homespassed/Homespassed';
// Sales Management
import SalesOrder from './containers/ADL/SalesOrder/SalesOrder';
// Ui Pages Routes
import Button from './containers/ui/Button';
import Icon from './containers/ui/Icons';
import Card from './containers/ui/Card';
import Menu from './containers/ui/Menus';
import Message from './containers/ui/Messages';
import List from './containers/ui/List';
import Boxe from './containers/ui/Boxes';
import Grid from './containers/ui/Grid';
import Color from './containers/ui/Colors';
// Script Pages Routes
import Modal from './containers/script/modal';
import Alert from './containers/script/alert';
import Notification from './containers/script/notification';
import Popover from './containers/script/popover';
import Badge from './containers/script/badge';
import Tabs from './containers/script/tabs';
import Toolbar from './containers/script/toolbar';
import Chip from './containers/script/chip';
import Slider from './containers/script/slider';
import Stepper from './containers/script/stepper';
import Subheader from './containers/script/subheader';
import DatePicker from './containers/script/datePicker';
import ProgressBar from './containers/script/progressbar';
import AutoComplete from './containers/script/autocomplete';

// Form Pages Routes
import FormPage from './containers/form/FormPage';
import FormValidation from './containers/form/FormValidation';
import FormElements from './containers/form/FormElements';
// Table Pages Routes
import TablePage from './containers/table/TablePage';
import advancedTable from './containers/table/advancedTable';
import dataTablePage from './containers/table/dataTable';
// Chart Pages Routes
import ChartPage_1 from './containers/chart/chart_1';
import ChartPage_2 from './containers/chart/chart_2';
import ChartPage_3 from './containers/chart/chart_3';
// Pages Ui Routes
import profilePage from './containers/page/profile';
import pricePage from './containers/page/price';
import productsPage from './containers/page/products';
// eXTRA Pages Ui Routes
import NotFoundPage404 from './containers/extra_page/404';
import LoginPage from './containers/extra_page/LoginPage';
import lockPage from './containers/extra_page/lock';

import Documents from './containers/doc/documents';
import ManageProduct from './containers/ADL/Product/ManageProduct';


export default (
  <Route history={hashHistory}>
    <Route path="login" component={LoginPage} />
    <Route path="lock" component={lockPage} />
    <Route path="404" component={NotFoundPage404} />
    <Route path="/admin" component={App}>
      <IndexRoute component={DashboardPage} />
      {/* custom page start here */}
      <Route path="dashboard" component={DashboardPage} />
      <Route path="manageUser" component={ManageUser} />
      <Route path="manageVendor" component={ManageVendor} />
      <Route path="manageAgency" component={ManageAgency} />
      <Route path="manageCustomer" component={ManageCustomer} />
      <Route path="manageActivity" component={ManageActivity} />
      <Route path="manageProduct" component={ManageProduct} />
      <Route path="homesPassed" component={HomesPassed} />
      <Route path="salesOrder" component={SalesOrder} />
      {/* custom page end here */}

      <Route path="button" component={Button} />
      <Route path="icon" component={Icon} />
      <Route path="card" component={Card} />
      <Route path="menus" component={Menu} />
      <Route path="messages" component={Message} />
      <Route path="list" component={List} />
      <Route path="box" component={Boxe} />
      <Route path="grid" component={Grid} />
      <Route path="color" component={Color} />

      <Route path="modal" component={Modal} />
      <Route path="alert" component={Alert} />
      <Route path="notification" component={Notification} />
      <Route path="popover" component={Popover} />
      <Route path="badge" component={Badge} />
      <Route path="tabs" component={Tabs} />
      <Route path="toolbar" component={Toolbar} />
      <Route path="chip" component={Chip} />
      <Route path="slider" component={Slider} />
      <Route path="stepper" component={Stepper} />
      <Route path="subheader" component={Subheader} />
      <Route path="datePicker" component={DatePicker} />
      <Route path="progressbar" component={ProgressBar} />
      <Route path="autocomplete" component={AutoComplete} />

      <Route path="form" component={FormPage} />
      <Route path="formValidation" component={FormValidation} />
      <Route path="formElements" component={FormElements} />

      <Route path="table" component={TablePage} />
      <Route path="advancedTable" component={advancedTable} />
      <Route path="dataTable" component={dataTablePage} />

      <Route path="chart1" component={ChartPage_1} />
      <Route path="chart2" component={ChartPage_2} />
      <Route path="chart3" component={ChartPage_3} />

      <Route path="profile" component={profilePage} />
      <Route path="price" component={pricePage} />
      <Route path="products" component={productsPage} />

      <Route path="documents" component={Documents} />


      <Route path="assets" />
      <Route path="*" component={DashboardPage} />

    </Route>
  </Route>
);
