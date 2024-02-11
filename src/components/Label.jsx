const Label = ({ value, htmlFor }) => {
  return (
    <label className="flex w-4 justify-center" htmlFor={htmlFor}>
      {value}
    </label>
  );
};

export default Label;
