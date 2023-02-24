import "./header.css";
import { motion } from "framer-motion";
import { headerAnimation, sloganAnimation } from "../Framer_Motion/framer_motion";
const Header = () => {


  return (
    <div className="header" id="header">
      <motion.div
        className="header_head"
        variants={headerAnimation}
        initial="initial"
        animate="animate"
      >
        <h2>Hi! I'm</h2>
        <h1>Evan Thomas</h1>
      </motion.div>
      <motion.div className="header_slogan" variants={sloganAnimation} initial="initial" animate="animate">
        <h2>Developer & UI/UX designer</h2>
        <h3>
          Crafting innovative solutions with a designer's eye and a developer's
          mind. Always learning, always creating.
        </h3>
      </motion.div>
    </div>
  );
};

export default Header;
