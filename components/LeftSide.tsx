import useMediaQuery from "../hooks/useMediaQuery";

const LeftSide = ({ children }: { children: React.ReactNode }) => {
  const isPhone = useMediaQuery(`(max-width: 480px)`);
  return (
    <div className="left-side" style={{ width: isPhone ? "100%" : "auto" }}>
      <div
        className="left-side__container"
        style={{ width: isPhone ? "100%" : "70%" }}
      >
        {children}
      </div>
    </div>
  );
};

export default LeftSide;
