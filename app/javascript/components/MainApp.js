import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
// import Listings from './Listings'
import NewListing from './NewListing'
// import UserListings from './UserListings'

class MainApp extends React.Component {
  render () {
      const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <div>
        <Router>
          <Navbar>
            <NavbarBrand href="/">Apartment Finder</NavbarBrand>
            <NavLink to="/root" tag={Link}>All Listings</NavLink>
            <NavLink to="/NewListing" tag={Link}>Add New Listing</NavLink>
            <NavLink to="/UserListing" tag={Link}>My Listings</NavLink>

            <Nav>
              {logged_in &&
                <div>
                <a href={sign_out_route}>Sign Out</a>
                </div>
              }
              {!logged_in &&
                <div>
                <a href={sign_in_route}>Sign In</a>
                </div>
              }
            </Nav>
          </Navbar>
        </Router>
      </div>
    );
  }
}
export default MainApp

