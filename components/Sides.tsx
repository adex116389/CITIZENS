import useMediaQuery from "../hooks/useMediaQuery";

const Sides = ({ children }: { children: React.ReactNode }) => {
  const isPhone = useMediaQuery(`(max-width: 480px)`);

  return (
    <div className="sides" style={{ padding: isPhone ? "0 .5rem" : "0 2rem" }}>
      {/* <h3 style={{ fontSize: isPhone ? "1.5rem" : "2rem" }}>
        Your Information
      </h3> */}
      <div
        className="sides-container"
        style={{ flexDirection: isPhone ? "column" : "row" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Sides;
