import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cartIcon/cartIcon.component";
import CartDropDown from "../cartDropdown/cartDropdown.component";

import "./header.styles.scss";
import CartDropdown from "../cartDropdown/cartDropdown.component";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-contaienr" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
