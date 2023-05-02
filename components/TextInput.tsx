import ReactInputMask from "react-input-mask";

interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  title: string;
  type?: string;
  mask?: string;
  register?: any;
}

const TextInput = ({
  name,
  title,
  type,
  register = {},
  mask,
  ...props
}: TextInputProps) => {
  return (
    <div className="answerInput">
      <label htmlFor={name}>{title}</label>
      {mask ? (
        <ReactInputMask mask={mask} {...register}>
          {() => (
            <input id={name} type={type || "text"} {...register} {...props} />
          )}
        </ReactInputMask>
      ) : (
        <input id={name} type={type || "text"} {...register} {...props} />
      )}
    </div>
  );
};

export default TextInput;
