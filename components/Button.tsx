import useMediaQuery from "../hooks/useMediaQuery";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick: any;
}

const Button = ({ onClick, ...props }: ButtonProps) => {
  const isPhone = useMediaQuery(`(max-width: 480px)`);
  return (
    <div
      className="button-container"
      style={{
        padding: isPhone ? `0px 0.5rem` : `0 2rem`,
      }}
    >
      <button
        className="button"
        onClick={onClick}
        style={{ width: isPhone ? "100%" : "15%" }}
        {...props}
      >
        Continue
      </button>
      {/* <div className="link">
        <a href="#">Privacy</a>
        <span></span>
        <a href="#">Security</a>
      </div> */}
    </div>
  );
};

export default Button;
