
import { Theme } from "components/navigation/navbar/Navbar";
import NavLogo from "assets/images/Logo.png";
import NavLogoWhite from "assets/images/LogoWhite.png";

export const useTheme = (theme: Theme) => {
  const getStylesFromTheme = () => {
    switch (theme) {
      case 'light':
        return {
          backgroundColor: '#fff',
          color: 'text-gray-800',
          logo: NavLogo,
          textGray: "text-gray-300",
        };
      case 'dark':
        return {
          backgroundColor: 'bg-[#040505]',
          color: 'text-white',
          textGray: "text-gray-700",
          logo: NavLogoWhite,
        }
      default:
        return {
          backgroundColor: 'bg-[#f4f1ec]',
          color: 'text-gray-800',
          textGray: "text-gray-300",
          logo: NavLogo,
        }
    }
  }

  return { getStylesFromTheme }
}
