import { FC, PropsWithChildren } from 'react'
import { useTheme } from 'hooks/useTheme';
import { Navbar, Theme } from 'components/navigation/navbar/Navbar';

interface Props {
  navType?: "one" | "two"
  theme: Theme
}
 
export const Section: FC<PropsWithChildren<Props>> = ({ children, navType, theme }) => {
  const { getStylesFromTheme } = useTheme(theme);
  const { backgroundColor } = getStylesFromTheme();
  return ( 
    <div className={`h-screen w-screen font-archivo section y-mandatory ${backgroundColor} relative`}>
      <header className='absolute bottom-auto top-0 z-10 bg-transparent w-full'>
        <Navbar navType={navType} theme={theme} />
      </header>
      <main className='h-full w-full md:w-4/5 relative flex flex-col justify-center pt-12 px-9 md:px-[4rem] mx-auto'>
        {children}
      </main>
    </div>
  );
}
