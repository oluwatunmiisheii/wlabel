import { FC, useId } from "react"
import { useTheme } from 'hooks/useTheme'
import { Section } from "components/section/Section";
import { Theme } from 'components/navigation/navbar/Navbar';

export interface IProductDetailsProps {
  title: string,
  description: string,
  imgSrc: string,
  theme: Theme,
  attributes?: {
    [key: string]: string
  }[],
  imageFirst: boolean
}

export const ProductDetailsSection: FC<IProductDetailsProps> = ({ title, description, imgSrc, theme, attributes, imageFirst }) => {
  const { getStylesFromTheme } = useTheme(theme)
  const { color, textGray } = getStylesFromTheme()

  return (
    <Section theme={theme} mainContentId={`${title.split(' ')[0]}-${useId()}`}>
      <div className="flex justify-between flex-col lg:flex-row items-center">
        <div className={`text-white w-full lg:w-2/5 ${imageFirst ? 'order-2' : 'order-1 mb-2 lg:mb-0'}`}>
          <h1 className={`text-2xl md:text-4xl title ${color}`}>{title}</h1>
          <p className='text-gray-400 text-[15px] md:text-xl leading-8 mt-4'>
            {description}
          </p>
        </div>
        <div className={`w-full md:w-2/5 ${imageFirst ? 'order-1 mb-2 lg:mb-0' : 'order-2'}`}>
          <div className="relative h-full flex items-center justify-center text-center">
            <img src={imgSrc} className="max-w-full md:h-auto h-32" alt={title} />
          </div>
        </div>
      </div>
      {attributes && (
        <ul className="hidden md:flex justify-center md:justify-between md:mx-auto mt-20">
          {attributes?.map(({ key, value }) => (
            <li key={key} className='text-gray-400 text:base md:text-xl leading-8 mt-4 uppercase px-12'>
              <p className='leading-6 text-3xl text-white text-center'>{value}</p>
              <p className='text-[10px] leading-6'>{key}</p>
            </li>
          ))}
        </ul>
      )}
      <div className={`product__meta absolute z-10 top-[50%] right-[105%] ${textGray} text-sm uppercase`}>
        f-210 performance racing drone
      </div> 
    </Section>
  );
};

