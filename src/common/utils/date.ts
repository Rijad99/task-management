const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'October', 'December'];

export const formatDueDate = (dateOne: string, dateTwo: string) => {
  const fromDateValues = dateOne.split('T')[0].split('-');
  const toDateValues = dateTwo.split('T')[0].split('-');

  const fromDate = new Date(+fromDateValues[0], +fromDateValues[1], +fromDateValues[2]);
  const toDate = new Date(+toDateValues[0], +toDateValues[1], +toDateValues[2]);

  const fromDay = fromDate.getDate();
  const toDay = toDate.getDate();
  const toMonth = months[toDate.getMonth()];
  const toYear = toDate.getUTCFullYear();

  const fromDayPrefix = getDayPrefix(fromDay);
  const toDayPrefix = getDayPrefix(toDay);

  const dueDate = `${fromDay}${fromDayPrefix} - ${toDay}${toDayPrefix} ${toMonth} ${toYear}`;

  return dueDate;
};

const getDayPrefix = (day: number) => {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return 'st';

    case 2:
    case 22:
      return 'nd';

    case 3:
    case 23:
      return 'rd';

    default:
      return 'th';
  }
};
