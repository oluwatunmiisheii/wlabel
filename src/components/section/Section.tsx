import { FC, PropsWithChildren } from 'react'
import { useTheme } from 'hooks/useTheme';
import { Navbar, Theme } from 'components/navigation/navbar/Navbar';

interface Props {
  navType?: "one" | "two"
  theme: Theme,
  mainContentId?: string
}
 
export const Section: FC<PropsWithChildren<Props>> = ({ children, navType, theme, mainContentId }) => {
  const { getStylesFromTheme } = useTheme(theme);
  const { backgroundColor } = getStylesFromTheme();

  const skipToMainContent = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    mainContentId && document.getElementById(mainContentId)?.scrollIntoView({ behavior: 'smooth' });
  }

  return ( 
    <div className={`h-screen w-screen font-archivo section y-mandatory ${backgroundColor} relative`}>
       <a href="#main" className="skip-to-content-link" onClick={skipToMainContent}>Skip to content</a>
      <header className='absolute bottom-auto top-0 z-10 bg-transparent w-full'>
        <Navbar navType={navType} theme={theme} />
      </header>
      <main className='h-full w-full md:w-4/5 relative flex flex-col justify-center pt-10 lg:pt-12 px-9 lg:px-[4rem] mx-auto' id={mainContentId}>
        {children}
      </main>
    </div>
  );
}
