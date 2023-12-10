import React, { useEffect, useState } from 'react';
import PanelLayout from '../components/layouts/PanelLayout/PanelLayout';
import useForm from '../libs/hooks/useForm';
import Form from '../components/layouts/Form';
import FormRow from '../components/molecules/formitem/FormRow';
import Input from '../components/atoms/Input';
import Flex from '../components/layouts/Flex';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import { useMediaQuery } from 'react-responsive';
import DatePicker from '../components/atoms/DatePicker';

const SchedulePage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  // const [
  //   { clock8, clock9, clock10, clock11, clock12, clock13, clock14, clock15 },
  //   onChange,
  //   reset,
  // ] = useForm({
  //   clock8: date === '2023-12-09' ? '소풍' : '등원 및 독서 시간',
  //   clock9: date === '2023-12-09' ? '소풍' : '등원 및 독서 시간',
  //   clock10: date === '2023-12-09' ? '소풍' : '등원 및 독서 시간',
  //   clock11: date === '2023-12-09' ? '소풍' : '등원 및 독서 시간',
  //   clock12: date === '2023-12-09' ? '소풍' : '등원 및 독서 시간',
  //   clock13: date === '2023-12-09' ? '소풍' : '등원 및 독서 시간',
  //   clock14: date === '2023-12-09' ? '소풍' : '등원 및 독서 시간',
  //   clock15: date === '2023-12-09' ? '소풍' : '등원 및 독서 시간',
  // });
  const [data, setData] = useState('등원 및 독서 시간');
  const lst = [0, 0, 0, 0, 0, 0, 0, 0];
  const saveSchedule = () => {
    return;
  };
  useEffect(() => {
    if (date === '2023-12-09') {
      setData('소풍');
    }
  }, [date]);

  return (
    <article>
      <Flex width="100%" align="space-between">
        <Text>일정</Text>
        <DatePicker
          name="date"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDate(new Date(e.target.value).toISOString().slice(0, 10));
          }}
        />
      </Flex>
      <PanelLayout>
        <Form>
          {lst.map((e, index: number) => {
            return (
              <FormRow key={`Schedule_${index}`} title={`${index + 8}시`}>
                <Input
                  placeholder={`${index + 8}시 일정을 입력해주세요`}
                  name={`clock${index + 8}`}
                  value={data}
                  onChange={() => {
                    return;
                  }}
                />
              </FormRow>
            );
          })}
          <Flex width="100%" margin="10px 0 0 0" align="flex-end">
            <Button color="orange" onClick={saveSchedule}>
              등록하기
            </Button>
            <Button
              type="border"
              color="orange"
              onClick={() => {
                return;
              }}
            >
              초기화
            </Button>
          </Flex>
        </Form>
      </PanelLayout>
    </article>
  );
};

export default SchedulePage;
