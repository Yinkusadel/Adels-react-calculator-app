const themes = [
  { id: 'theme-choice-one', value: '1' },
  { id: 'theme-choice-two', value: '2' },
  { id: 'theme-choice-three', value: '3' },
];

const Label = ({ value, htmlFor }) => {
  return (
    <label className="flex w-4 justify-center" htmlFor={htmlFor}>
      {value}
    </label>
  );
};

const LabelSelector = () => {
  return (
    <>
      {themes.map((theme) => (
        <Label key={theme.id} value={theme.value} htmlFor={theme.id} />
      ))}
    </>
  );
};

export default LabelSelector;
