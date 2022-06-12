import { FC } from 'react'

interface ILabelProps {
  htmlFor: string,
  labelText: string
}
 
export const Label: FC<ILabelProps> = ({labelText, htmlFor}) => {
  return ( 
    <label htmlFor={htmlFor} className="uppercase text-left text-sm">
      {labelText}
    </label>
  );
}
