const formatDate = (date) => {
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // As the Date will be in UTC, that is why it is formatted like this.

  const newDate = new Date(date);

  const hours = newDate.getUTCHours();

  const minutes = newDate.getUTCMinutes();

  const monthNumber = newDate.getUTCMonth();

  const month = monthName[monthNumber];

  const year = newDate.getUTCFullYear();

  const actualDate = newDate.getUTCDate();

  // Formating the Date.

  const wholeDate = `${actualDate} ${month} ${year}`;

  const time = `${hours}:${minutes} UTC`;

  return {
    wholeDate,
    time,
  };
};

export default formatDate;
