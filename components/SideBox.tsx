const SideBox = ({ title, text }: {
  title: string;
  text: string;
}) => {
  <div className="sideBox">
    <h4>{title}</h4>
    <p>{text}</p>
  </div>;
};

export default SideBox;
