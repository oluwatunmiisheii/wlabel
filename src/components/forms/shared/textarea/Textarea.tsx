
import { forwardRef, InputHTMLAttributes } from 'react'
import { Label } from '../label/Label'

interface IInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  labelText?: string;
}

export const Textarea = forwardRef<HTMLInputElement & HTMLTextAreaElement, IInputProps>((props, ref) => {
  const { name, id, placeholder, labelText, ...rest } = props;
  return (
    <div className="relative mb-8">
       {labelText && (
        <Label htmlFor={id} labelText={labelText} />
      )}
      <div className="mt-1 relative">
        <textarea
          ref={ref}
          name={name}
          id={id}
          className="placeholder-[#dbd9d3] border-b border-[#e1ddd6] focus:border-gray-400 focus:outline-none focus:shadow-outline w-full resize-none bg-transparent"
          placeholder={placeholder}
          rows={5}
          {...rest}
        />
      </div>
    </div>
  );
});

Textarea.displayName = "Textarea";

