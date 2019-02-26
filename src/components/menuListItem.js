import React from 'react';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';
import strings from '../lang/lang.js';
import Progress from 'antd/lib/progress';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {browserHistory} from 'react-router';
import Cookies from 'universal-cookie';
import 'babel-polyfill';

const cookies = new Cookies();

const dashboardShowRule = ['admin', 'homepassed', 'operation', 'product'];
const systemShowRule = ['admin'];
const homepassedShowRule = ['admin', 'homepassed'];
const taxmanagementShowRule = ['admin', 'operation'];
const productmanagementShowRule = ['admin', 'operation', 'product'];
const transactionShowRule = ['admin', 'operation', 'product', 'finance', 'internalsales', 'salesadmin', 'sales'];
const managesalesuserShowRule = ['admin', 'operation', 'internalsales'];
const salesmanagementShowRule = ['admin', 'operation', 'internalsales', 'salesadmin', 'sales'];
const manageMSuserShowRule = ['admin', 'operation', 'manageservice'];
const workOrderShowRule = ['admin', 'operation', 'manageservice', 'dispatcher', 'installer'];
const ticketShowRule = ['admin', 'operation', 'manageservice', 'dispatcher', 'installer'];
const customerserviceShowRule = ['admin', 'operation', 'cs', 'csexternal'];

const styles_list = {

  padding: '15px 12px 12px 45px',
  fontSize: 14,
  color: 'rgba(0, 0, 0, 0.87)',
};

const styles_right_icon = {

};


const styles_left_icon = {
  fontSize: 20,
  color: 'rgba(0, 0, 0, 0.87)',
};

const styles_list_item = {
  padding: '0px',
  fontSize: 13,
  lineHeight: '12px',


};

export class MenuList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      selectedIndex: 0,
      roleUser: '',
    };
    this.handleToggle = this
      .handleToggle
      .bind(this);
    this.handleClose = this
      .handleClose
      .bind(this);
  }


  componentWillMount() {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      this.setState({token: cookieData});
      const json = (response) => response.json();
      fetch(`https://ibase.adlsandbox.com:8081/api/admin/check?token=${cookieData}`, {
        method: 'get',
        type: 'cors',
      })
      .then(json)
      .then((respons) => {
        this.setState({roleUser: respons.user.role});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }

  async componentDidMount() {
    try {
      setInterval(async () => {
        const cookieData = cookies.get('ssid');
        if (cookieData !== undefined && cookieData !== '') {
          const accessData = cookies.get('npaccess');
          const userData = accessData.split('+');
          const res = await  fetch(`https://ibase.adlsandbox.com:8081/api/admin/login?username=${userData[0]}&password=${userData[1]}`, {
            method: 'post',
            type: 'cors',
          });
          const resJson = await res.json();
          if (resJson.token !== undefined) {
            cookies.set('ssid', resJson.token, {maxAge: 86400});
            console.log('token changed');
          }
        }
      }, 900000);
    } catch (e) {
      console.log(e);
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleClose() {
    this.setState({open: true});
  }

  select = (index) => {
    if (index == 1) {
      browserHistory.push('login');
    } else if (index == 0) {
      browserHistory.push('lock');
    }

    this.setState({selectedIndex: index});
  }


  render() {
    const userRole = this.state.roleUser;

    return (
      <div>
        <div className="sideBar">

          <List>
            {dashboardShowRule.includes(userRole) ?
              <ListItem
                innerDivStyle={styles_list}
                leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> home </FontIcon>}
                key={1}
                primaryText={strings.menu.dashboard}
                containerElement={<Link to={'dashboard'} />}
              /> : ''}

            {systemShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.system}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> build </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.manageuser} containerElement={<Link to={'/admin/manageUser'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.managevendor} containerElement={<Link to={'/admin/manageVendor'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.manageagency} containerElement={<Link to={'/admin/manageAgency'} />} />,
                <ListItem style={styles_list_item} key={4} primaryText={strings.menu.managecustomer} containerElement={<Link to={'/admin/manageCustomer'} />} />,
                <ListItem style={styles_list_item} key={5} primaryText={strings.menu.manageva} containerElement={<Link to={'/admin/manageVA'} />} />,
                <ListItem style={styles_list_item} key={6} primaryText={strings.menu.activityreport} containerElement={<Link to={'/admin/manageActivity'} />} />,
              ]}
                                                 /> : ''}

            {homepassedShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> location_on </FontIcon>}
              key={2}
              primaryText={strings.menu.homespassed}
              containerElement={<Link to={'/admin/homesPassed'} />}
                                                     /> : ''}

            {taxmanagementShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> attach_money </FontIcon>}
              key={3}
              primaryText={strings.menu.taxmanagement}
              containerElement={<Link to={'/admin/taxManagement'} />}
                                                        /> : ''}

            {productmanagementShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.productmanagement}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> collections </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.manageproduct} containerElement={<Link to={'/admin/manageProduct'} />} />,

              ]}
                                                            /> : ''}

            {transactionShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.transaction}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> show_chart </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.customerdata} containerElement={<Link to={'/admin/transactionCustomer'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.dailytrx} containerElement={<Link to={'/admin/TransactionDaily'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.monthlytrx} containerElement={<Link to={'/admin/transactionMonth'} />} />,
              ]}
                                                      /> : ''}

            {managesalesuserShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> person </FontIcon>}
              key={4}
              primaryText={strings.menu.salesuser}
              containerElement={<Link to={'/admin/manageUser'} />}
                                                          /> : ''}

            {salesmanagementShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.salesmanagement}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> next_week </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}

              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.createsalesorder} containerElement={<Link to={'/admin/salesOrder'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.trackorder} containerElement={<Link to={'/admin/trackingOrder'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.salesinvoice} containerElement={<Link to={'/admin/salesInvoice'} />} />,
              ]}
                                                          /> : ''}

            {manageMSuserShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> directions_walk </FontIcon>}
              key={5}
              primaryText={strings.menu.msuser}
              containerElement={<Link to={'/admin/manageUser'} />}
                                                       /> : ''}

            {workOrderShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.workorder}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> play_for_work </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.reportorder} containerElement={<Link to={'/admin/reportWorkOrder'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.installation} containerElement={<Link to={'/admin/installation'} />} />,
              ]}
                                                    /> : ''}

            {ticketShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.ticket}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> report </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                // <ListItem style={styles_list_item} key={1} primaryText={strings.menu.ticket} containerElement={<Link to={'/admin/createTicket'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.reportticket} containerElement={<Link to={'/admin/reportTicket'} />} />,

              ]}
                                                 /> : ''}
            {customerserviceShowRule.includes(userRole) ? <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.cs}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> local_phone </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.createticket} containerElement={<Link to={'/admin/createTicket'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.reportticket} containerElement={<Link to={'/admin/reportTicket'} />} />,
                // <ListItem style={styles_list_item} key={3} primaryText={strings.menu.manageleads} containerElement={<Link to={'dashboard'} />} />,
                // <ListItem style={styles_list_item} key={4} primaryText={strings.menu.spamreport} containerElement={<Link to={'dashboard'} />} />,

              ]}
                                                          /> : ''}


          </List>

          {/* <BottomNavigation  className="bottomNavigation">

            <BottomNavigationItem
              label="Lock"
              icon={<FontIcon color={this.props.muiTheme.appBar.color} className="material-icons"> https </FontIcon>}
              onTouchTap={() => this.select(0)}
            />

            <BottomNavigationItem
              label="Logout"
              icon={<FontIcon color={this.props.muiTheme.appBar.color} className="material-icons"> exit_to_app </FontIcon>}
              onTouchTap={() => this.select(1)}
            />

          </BottomNavigation> */}
          {this.props.isAuthenticated && <div className={classnames('app-content', {expanded: this.state.open})}>
            {this.props.children}
          </div>}
        </div>

      </div>
    );
  }
}

export default muiThemeable()(MenuList);
