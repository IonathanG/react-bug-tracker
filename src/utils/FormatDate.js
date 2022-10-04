// Function to format date from dd/mm/yyyy to mm/dd/yyyy for DatePicker
const FormatDate = (date) => {
  let dateArray = date.split("-");

  return `${dateArray[1]}-${dateArray[0]}-${dateArray[2]}`;
};

export default FormatDate;
