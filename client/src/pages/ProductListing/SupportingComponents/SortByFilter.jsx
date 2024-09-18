import Select from "react-select";
const options = [
  { value: "High", label: "High" },
  { value: "Low", label: "Low" },
  { value: "Most Popular", label: "Most Popular" },
];
const SortByFilter = () => {
  return (
    <>
      <Select options={options} defaultValue={options[options.length - 1]} />
    </>
  );
};

export default SortByFilter;
