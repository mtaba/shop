import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../firebase/firebase.utils';
import { signOut } from "firebase/auth";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss'


function Header ({ currentUser, hidden }){
   
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo />
            </Link>
            <div className="options">

                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
                {
                    currentUser ?
                        <div onClick={()=>signOut(auth)} className="option">
                            SING OUT
                        </div> :(
                        <Link to="/signin" className="option">SIGN IN</Link>)
                }

                <CartIcon />
            </div>
              {
                  !hidden ?  <CartDropdown /> : null
              }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser :  selectCurrentUser,
    hidden: selectCartHidden,
})
export default connect(mapStateToProps)(Header);