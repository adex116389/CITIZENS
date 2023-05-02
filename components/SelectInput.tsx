const SelectInput = ({
  label,
  name,
  options,
  register,
}: {
  label: string;
  name: string;
  options: string[];
  register: any;
}) => {
  return (
    <div className="selectInput">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...register}>
        <option disabled selected>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
