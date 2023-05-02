import useMediaQuery from "../hooks/useMediaQuery";

const RightSide = ({ children }: { children?: React.ReactNode }) => {
  const isPhone = useMediaQuery(`(max-width: 480px)`);

  return (
    <div
      className="right-side"
      style={{
        width: isPhone ? "100%" : "auto",
        display: isPhone ? `none` : `block`,
      }}
    >
      <div
        className="right-side__container"
        style={{ width: isPhone ? "100%" : "70%", border: `none` }}
      >
        {children}
      </div>
    </div>
  );
};

export default RightSide;
