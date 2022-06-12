import { useState, FC } from "react";
import { Link } from "react-router-dom";
import NavLogo from "assets/images/Logo.png";
import { Hamburger } from "../shared/hamburger/Hamburger";
import { FullScreenMenu } from "../shared/fullScreenMenu/FullScreenMenu";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { useTheme } from "hooks/useTheme";


export type theme = 'light' | 'dark' | 'grey'

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
        <Link to="/" className="p-4 text-gray-600 text-sm">
          CONTACT
        </Link>
      </div>
      <div className="md:hidden">
        <Hamburger toggle={toggle} />
      </div>
    </>
  )
}


const NavTwo = ({ toggle, theme }: {toggle: () => void, theme: theme }) => {
  const { getStylesFromTheme } = useTheme(theme);
  const { logo, socialIconColor } = getStylesFromTheme();
  return (
    <> 
      <div>
        <div className="md:flex justify-between w-[5%] hidden">
          <button className={`p-2 ${socialIconColor}`}>
            <FaFacebookSquare />
          </button>
          <button className={`p-2 ${socialIconColor}`}>
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
  theme: theme
}

export const Navbar: FC<INavbarProps> = ({ navType, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav 
        className="w-11/12 md:w-4/5 m-auto py-16 flex justify-between items-center h-16 text-black relative"
        role="navigation"
      >
        {navType === "one" ? <NavOne toggle={toggle} /> : <NavTwo toggle={toggle} theme={theme} />}
        {isOpen && <FullScreenMenu close={toggle} />}
      </nav>
    </header>
  );
};


Navbar.defaultProps = {
  navType: "two"
}