import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { Link } from "react-router-dom";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={` paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow,backgroundColor:'#1c2036',color: 'white'}}

    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <h1 style={{fontSize:'30px'}} className={css.name}>[Logo] [Website Name]</h1>
        
        <ul
          className={`flexCenter ${css.menu} bg-dark`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><form style={{display:'flex',flexDirection:'row'}} class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</li>
          <li><Link to='/cart'><i class="fa-solid fa-cart-shopping"></i> Cart</Link></li>
          <li><Link to='/signin'><i class="fa-solid fa-user"></i> Sign In</Link></li>
          <li><Link to='/support'><i class="fa-solid fa-headset"></i> Support</Link></li>
         
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
