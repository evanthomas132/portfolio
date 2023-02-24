import "./navbar.css";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  const [smallNav, setSmallNav] = useState(false);

  const handleClick = () => {
    setSmallNav(!smallNav);
  };
  const navbarAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,

        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
      },
    },
  };

  const smallAnimation = {
    initial: {
      x: "100vh",
    },
    animate: {
      x: "0",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="navbar">
      <motion.div
        className="navbar_logo"
        variants={navbarAnimation}
        initial="initial"
        animate="animate"
      >
        ET
      </motion.div>
      <div className="navbar_links">
        <ul>
          <li>
            <a rel="noreferrer" href="/">
              Home
            </a>
          </li>
          <li>
            <a rel="noreferrer" href="/#projects">
              Projects
            </a>
          </li>
          <li>
            <a rel="noreferrer" href="/#about">
              About
            </a>
          </li>
          <li>
            <a rel="noreferrer" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar_links_small">
        <RxHamburgerMenu className="navbar_icon" onClick={handleClick} />
        {smallNav ? (
          <motion.div
            variants={smallAnimation}
            initial="initial"
            animate="animate"
            className="small_links"
          >
            <ul>
              <motion.li
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <a rel="noreferrer" href="/">
                  Home
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <a rel="noreferrer" href="/#projects">
                  Projects
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <a rel="noreferrer" href="/#about">
                  About
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <a rel="noreferrer" href="/#contact">
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
