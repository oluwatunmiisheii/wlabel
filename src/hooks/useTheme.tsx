
import { theme } from "components/navigation/navbar/Navbar";
import NavLogo from "assets/images/Logo.png";
import NavLogoWhite from "assets/images/LogoWhite.png";

export const useTheme = (theme: theme) => {
  const getStylesFromTheme = () => {
    switch (theme) {
      case 'light':
        return {
          backgroundColor: '#fff',
          color: 'text-gray-800',
          logo: NavLogo,
          socialIconColor: 'text-gray-300'
        };
      case 'dark':
        return {
          backgroundColor: 'bg-[#040505]',
          color: '#fff',
          logo: NavLogoWhite,
          socialIconColor: 'text-gray-700'
        }
      default:
        return {
          backgroundColor: 'bg-[#f4f1ec]',
          color: 'text-gray-800',
          logo: NavLogo,
          socialIconColor: 'text-gray-300'
        }
    }
  }

  return { getStylesFromTheme }
}
