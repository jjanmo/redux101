import React from 'react';

function switchDay(text) {
    switch (text.toLowerCase()) {
        case 'mon':
            return '월';
        case 'tue':
            return '화';
        case 'wed':
            return '수';
        case 'thu':
            return '목';
        case 'fri':
            return '금';
        case 'sat':
            return '토';
        case 'sun':
            return '일';
        default:
            return '';
    }
}

function switchMonth(text) {
    switch (text.toLowerCase()) {
        case 'jan':
            return 1;
        case 'feb':
            return 2;
        case 'mar':
            return 3;
        case 'apr':
            return 4;
        case 'may':
            return 5;
        case 'jun':
            return 6;
        case 'jul':
            return 7;
        case 'aug':
            return 8;
        case 'sep':
            return 9;
        case 'oct':
            return 10;
        case 'nov':
            return 11;
        case 'dec':
            return 12;
        default:
            return '';
    }
}

function ParsedDate({ rawDate }) {
    const year = rawDate.substring(11, 15); //연
    const month = switchMonth(rawDate.substring(4, 7)); //월
    const date = rawDate.substring(8, 10); //일
    const day = switchDay(rawDate.substring(0, 3)); //요일

    return <span>{`${year}년 ${month}월 ${date}일 ${day}요일`}</span>;
}

export default ParsedDate;
