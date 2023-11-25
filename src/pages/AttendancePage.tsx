import React, { useState } from 'react';
import PanelLayout from '../components/layouts/PanelLayout/PanelLayout';
import Flex from '../components/layouts/Flex';
import { useMediaQuery } from 'react-responsive';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import DatePicker from '../components/atoms/DatePicker';

const AttendancePage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  const [date, setDate] = useState(new Date());
  const [attendance, setAttendance] = useState([
    { id: 1, name: '테스트학생1', attendance: 0 },
    { id: 2, name: '테스트학생2', attendance: 0 },
    { id: 3, name: '테스트학생3', attendance: 0 },
    { id: 4, name: '테스트학생4', attendance: 0 },
    { id: 5, name: '테스트학생5', attendance: 0 },
    { id: 6, name: '테스트학생6', attendance: 0 },
    { id: 7, name: '테스트학생7', attendance: 0 },
    { id: 8, name: '테스트학생8', attendance: 0 },
    { id: 9, name: '테스트학생9', attendance: 0 },
  ]);
  const textColors = ['red', 'green', 'orange'];

  return (
    <article>
      <PanelLayout>
        <Flex width="100%" align="space-between">
          <DatePicker
            name="date"
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDate(new Date(e.target.value));
            }}
          />

          <Button
            type="bg"
            color="green"
            onClick={() => {
              const temp = attendance;
              temp.forEach((val) => {
                val.attendance = 1;
              });
              setAttendance([...temp]);
            }}
          >
            출석
          </Button>
        </Flex>
        <hr />
        {attendance.map((val, idx) => {
          return (
            <Flex
              key={`attendance_${val.name}_${val.id}`}
              width="100%"
              height={'50px'}
              align={isMobile ? 'space-between' : 'flex-start'}
              gap="30px"
            >
              <Text color={textColors[attendance[idx].attendance]}>
                {val.name}
              </Text>
              <select
                value={val.attendance}
                onChange={(e) => {
                  const temp = attendance;
                  temp[idx].attendance = Number(e.target.value);
                  setAttendance([...temp]);
                }}
              >
                <option value="0">
                  <Text color="red">결석</Text>
                </option>
                <option value="1">
                  <Text color="green">출석</Text>
                </option>
                <option value="2">
                  <Text color="orange">조퇴</Text>
                </option>
              </select>
            </Flex>
          );
        })}
      </PanelLayout>
    </article>
  );
};

export default AttendancePage;
