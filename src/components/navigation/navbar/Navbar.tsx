import { useState, FC } from "react";
import { Link } from "react-router-dom";
import NavLogo from "assets/images/Logo.png";
import { Hamburger } from "../shared/hamburger/Hamburger";
import { FullScreenMenu } from "../shared/fullScreenMenu/FullScreenMenu";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { useTheme } from "hooks/useTheme";


export type Theme = 'light' | 'dark' | 'grey'

const NavOne = ({ toggle }: {toggle: () => void}) => {
  return (
    <> 
      <div>
        <div className="md:block hidden">
          <Link to="/" className="p-4 text-gray-600 text-sm">
            STORE
          </Link>
          <Link to="/" className="p-4 text-gray-600 text-sm">
            TUTORIALS
          </Link>
        </div>
      </div>
      <img className="w-2/5 md:w-[16%] object-contain" src={NavLogo} alt="logo" />
      <div className="md:block hidden">
        <Link to="/" className="p-4 text-gray-600 text-sm">
          BLOG
        </Link>
        <Link to="/" className="p-4 text-gray-600 text-sm pr-0">
          CONTACT
        </Link>
      </div>
      <div className="md:hidden">
        <Hamburger toggle={toggle} />
      </div>
    </>
  )
}


const NavTwo = ({ toggle, theme }: {toggle: () => void, theme: Theme }) => {
  const { getStylesFromTheme } = useTheme(theme);
  const { logo, textGray } = getStylesFromTheme();
  return (
    <> 
      <div>
        <div className="md:flex justify-between w-[5%] hidden">
          <button className={`pr-2 ${textGray}`}>
            <FaFacebookSquare />
          </button>
          <button className={`pl-2 ${textGray}`}>
            <AiOutlineTwitter />
          </button>
        </div>
      </div>
      <img className="w-2/5 md:w-[16%] object-contain" src={logo} alt="logo" />
      <Hamburger toggle={toggle} />
    </>
  )
}


interface INavbarProps {
  navType?: "one" | "two",
  theme: Theme
}

export const Navbar: FC<INavbarProps> = ({ navType, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav 
      className="w-[90%] m-auto py-16 flex justify-between items-center h-16 text-black relative"
      role="navigation"
    >
      {navType === "one" ? <NavOne toggle={toggle} /> : <NavTwo toggle={toggle} theme={theme} />}
      {isOpen && <FullScreenMenu close={toggle} isOpen={isOpen} />}
    </nav>
  );
};


Navbar.defaultProps = {
  navType: "two"
}