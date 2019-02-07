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

const styles_list = {

  padding: '15px 12px 12px 45px',
  fontSize: 14,
  color: 'rgba(0, 0, 0, 0.87)',
};

const styles_right_icon = {

};


const styles_left_icon = {
  fontSize: 20,
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
    };
    this.handleToggle = this
      .handleToggle
      .bind(this);
    this.handleClose = this
      .handleClose
      .bind(this);
  }


  componentWillMount() { }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleClose() {
    this.setState({open: true});
  }

  select = (index) => {
    if (index == 2) {
      browserHistory.push('lock');
    } else if (index == 1) {
      browserHistory.push('login');
    } else if (index == 0) {
      browserHistory.push('documents');
    }

    this.setState({selectedIndex: index});
  }


  render() {
    return (
      <div>
        <div className="sideBar">

          <List>

            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.dashboard}
              leftIcon={<FontIcon  style={styles_left_icon}   color={this.props.muiTheme.appBar.color} className="material-icons"> dashboard </FontIcon>}
              initiallyOpen={false}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.dashboard1} containerElement={<Link to={'dashboard'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.dashboard2} containerElement={<Link to={'dashboard_2'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.dashboard3} containerElement={<Link to={'dashboard_3'} />} />,
              ]}
            />
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.uikit}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> extension </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1}  primaryText={strings.menu.buttons} containerElement={<Link to={'button'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.icons} containerElement={<Link to={'icon'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.cards} containerElement={<Link to={'card'} />} />,
                <ListItem style={styles_list_item} key={4} primaryText={strings.menu.menus} containerElement={<Link to={'menus'} />} />,
                <ListItem style={styles_list_item} key={5} primaryText={strings.menu.lists} containerElement={<Link to={'list'} />} />,
                <ListItem style={styles_list_item} key={6} primaryText={strings.menu.boxes} containerElement={<Link to={'box'} />} />,
                <ListItem style={styles_list_item} key={7} primaryText={strings.menu.grid} containerElement={<Link to={'grid'} />} />,
                <ListItem style={styles_list_item} key={8} primaryText={strings.menu.colors} containerElement={<Link to={'color'} />} />,
                <ListItem style={styles_list_item} key={9} primaryText={strings.menu.messages} containerElement={<Link to={'messages'} />} />,
              ]}
            />
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.scripts}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> local_pizza</FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.modal} containerElement={<Link to={'modal'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.alert} containerElement={<Link to={'alert'} />} />,
                <ListItem style={styles_list_item} key={4} primaryText={strings.menu.popover} containerElement={<Link to={'popover'} />} />,
                <ListItem style={styles_list_item} key={5} primaryText={strings.menu.badge} containerElement={<Link to={'badge'} />} />,
                <ListItem style={styles_list_item} key={6} primaryText={strings.menu.tabs} containerElement={<Link to={'tabs'} />} />,
                <ListItem style={styles_list_item} key={7} primaryText={strings.menu.toolbar} containerElement={<Link to={'toolbar'} />} />,
                <ListItem style={styles_list_item} key={8} primaryText={strings.menu.chip} containerElement={<Link to={'chip'} />} />,
                <ListItem style={styles_list_item} key={9} primaryText={strings.menu.slider} containerElement={<Link to={'slider'} />} />,
                <ListItem style={styles_list_item} key={10} primaryText={strings.menu.stepper} containerElement={<Link to={'stepper'} />} />,
                <ListItem style={styles_list_item} key={11} primaryText={strings.menu.subheader} containerElement={<Link to={'subheader'} />} />,
                <ListItem style={styles_list_item} key={12} primaryText={strings.menu.datepicker} containerElement={<Link to={'datePicker'} />} />,
                <ListItem style={styles_list_item} key={13} primaryText={strings.menu.progressbar} containerElement={<Link to={'progressbar'} />} />,
                <ListItem style={styles_list_item} key={14} primaryText={strings.menu.autocomplete} containerElement={<Link to={'autocomplete'} />} />,

              ]}
            />
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.forms}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> rate_review </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.basicForm} containerElement={<Link to={'form'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.formValidate} containerElement={<Link to={'formValidation'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.formElement} containerElement={<Link to={'formElements'} />} />,
              ]}
            />

            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.tables}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> pages </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}

              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.basicTable} containerElement={<Link to={'table'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.advancedTable} containerElement={<Link to={'advancedTable'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.dataTable} containerElement={<Link to={'dataTable'} />} />,
              ]}
            />

            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.charts}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> donut_small </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.chart1} containerElement={<Link to={'chart1'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.chart2} containerElement={<Link to={'chart2'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.chart3} containerElement={<Link to={'chart3'} />} />,
              ]}
            />

            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.pages}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> view_carousel </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.profile} containerElement={<Link to={'profile'} />} />,
                <ListItem style={styles_list_item} key={2} primaryText={strings.menu.price} containerElement={<Link to={'price'} />} />,
                <ListItem style={styles_list_item} key={3} primaryText={strings.menu.products} containerElement={<Link to={'products'} />} />,

              ]}
            />
            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.extraPages}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> view_column </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[
                <ListItem style={styles_list_item} key={1} primaryText={strings.menu.Login} containerElement={<Link to={'login'} />} />,
                <ListItem style={styles_list_item} key={5} primaryText={strings.menu.lockScreen} containerElement={<Link to={'lock'} />} />,
                <ListItem style={styles_list_item} key={6} primaryText={strings.menu.error} containerElement={<Link to={'404'} />} />,

              ]}
            />


            <ListItem
              innerDivStyle={styles_list}
              primaryText={strings.menu.menuLevel}
              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> gesture </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
              nestedItems={[<ListItem
                innerDivStyle={styles_list}
                key={1} leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> chevron_right </FontIcon>}
                primaryText={strings.menu.level1}
                            />, <ListItem
                              innerDivStyle={styles_list}
                              key={2}
                              leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> chevron_right </FontIcon>}
                              primaryText={strings.menu.level1} disabled={true}
                              rightIcon={<FontIcon style={styles_right_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> arrow_drop_down </FontIcon>}
                              nestedItems={[<ListItem
                                innerDivStyle={styles_list}
                                key={1}
                                leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> chevron_right </FontIcon>}
                                primaryText={strings.menu.level2}
                                            />]}
                                />,
              ]}
            />


            <ListItem innerDivStyle={styles_list} leftIcon={<FontIcon  style={styles_left_icon} color={this.props.muiTheme.appBar.color} className="material-icons"> live_help </FontIcon>} key={1} primaryText={strings.menu.documents} containerElement={<Link to={'documents'} />} />
          </List>


          <Divider inset={false} />
          <ListItem style={styles_list_item} primaryText={<div>CPU<Progress percent={75} status="active"  /></div>} />
          <Divider inset={false} />
          <ListItem style={styles_list_item} primaryText={<div>RAM<Progress percent={45} status="exception" showInfo={true} /></div>} />
          <Divider inset={false} />


          <BottomNavigation  className="bottomNavigation">
            <BottomNavigationItem
              label="Help"
              icon={<FontIcon color={this.props.muiTheme.appBar.color} className="material-icons"> code </FontIcon>}
              onTouchTap={() => this.select(0)}
            />

            <BottomNavigationItem
              label="Lock"
              icon={<FontIcon color={this.props.muiTheme.appBar.color} className="material-icons"> https </FontIcon>}
              onTouchTap={() => this.select(2)}
            />
            <BottomNavigationItem
              label="Logout"
              icon={<FontIcon color={this.props.muiTheme.appBar.color} className="material-icons"> exit_to_app </FontIcon>}
              onTouchTap={() => this.select(1)}
            />

          </BottomNavigation>
          {this.props.isAuthenticated && <div className={classnames('app-content', {expanded: this.state.open})}>
            {this.props.children}
          </div>}
        </div>

      </div>
    );
  }
}

export default muiThemeable()(MenuList);
