import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import {ko} from 'date-fns/locale/ko';

export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };

    return (
        <DatePicker
            monthsShown={2}
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            locale={ko}
            inline
            // dateFormat="yyyy년 MM월" 이건 안되는데
        />
    );
}

