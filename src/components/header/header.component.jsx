import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";
import "./header.styles.scss";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>

      <OptionsContainer>
          <OptionLink to="/shop">
          SHOP
          </OptionLink>
          <OptionLink to="/shop">
          CONTACT
          </OptionLink>
        
        {currentUser ? (
          <OptionLink as='div' onClick={() => signOut(auth)} className="option">
            SING OUT
          </OptionLink>
        ) : (
            <OptionLink to="/signin">
                 SIGN IN
            </OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {!hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
