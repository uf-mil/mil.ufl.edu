const applicationWindow = {
  opens: new Date("2026-04-17T16:00:00-04:00"),
  closes: new Date("2026-05-01T23:59:59-04:00"),
};
const applicationSemester = () => {
  const month = applicationWindow.opens.getMonth() + 1; // getMonth() is zero-indexed
  const year = applicationWindow.opens.getFullYear();
  if (month >= 1 && month <= 5) {
    return `Summer ${year}`;
  } else if (month >= 6 && month <= 8) {
    return `Fall ${year}`;
  } else {
    return `Spring ${year}`;
  }
};

export { applicationWindow, applicationSemester };
