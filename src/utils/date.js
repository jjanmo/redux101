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

export function parsedDate(dateObj) {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = switchDay(dateObj.getDay());

  return `${year}년 ${month}월 ${date}일 ${day}요일`;
}
