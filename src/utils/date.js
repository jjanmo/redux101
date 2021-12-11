function switchDay(number) {
  switch (number) {
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
    case 0:
      return '일';
    default:
      return '';
  }
}

export function parsedDate(date) {
  let year, month, _date, day;

  if (typeof date === 'string') {
    year = date.slice(0, 4);
    month = date.slice(5, 7);
    _date = date.slice(8, 10);
    day = switchDay(new Date(date.slice(0, 10)).getDay());
  } else {
    year = date.getFullYear();
    month = date.getMonth() + 1;
    _date = date.getDate();
    day = switchDay(date.getDay());
  }

  return `${year}년 ${month}월 ${_date}일 ${day}요일`;
}
