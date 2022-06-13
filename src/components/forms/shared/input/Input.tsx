
import { forwardRef, InputHTMLAttributes } from 'react'
import { Label } from "../label/Label";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  labelText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { type, name, id, placeholder, labelText, ...rest } = props;
  return (
    <div className="relative mb-8">
      {labelText && (
        <Label htmlFor={id} labelText={labelText} />
      )}
      <div className="mt-1 relative">
        <input
          ref={ref}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          className="placeholder-[#dbd9d3] border-b border-[#e1ddd6] focus:border-gray-400 focus:outline-none focus:shadow-outline w-full h-12 pb-5 bg-transparent"
          {...rest}
        />
      </div>
    </div>
  );
});

Input.displayName = "Input";

Input.defaultProps = {
  type: 'text',
}
