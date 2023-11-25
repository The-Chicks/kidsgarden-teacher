import React, { useState } from 'react';
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
  const [
    { clock8, clock9, clock10, clock11, clock12, clock13, clock14, clock15 },
    onChange,
    reset,
  ] = useForm({
    clock8: '',
    clock9: '',
    clock10: '',
    clock11: '',
    clock12: '',
    clock13: '',
    clock14: '',
    clock15: '',
  });
  const [date, setDate] = useState(new Date());
  const lst = [
    clock8,
    clock9,
    clock10,
    clock11,
    clock12,
    clock13,
    clock14,
    clock15,
  ];
  const saveSchedule = () => {
    return;
  };

  return (
    <article>
      <Flex width="100%" align="space-between">
        <Text>일정</Text>
        <DatePicker
          name="date"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDate(new Date(e.target.value));
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
                  value={e}
                  onChange={onChange}
                />
              </FormRow>
            );
          })}
          <Flex width="100%" margin="10px 0 0 0" align="flex-end">
            <Button color="orange" onClick={saveSchedule}>
              등록하기
            </Button>
            <Button type="border" color="orange" onClick={reset}>
              초기화
            </Button>
          </Flex>
        </Form>
      </PanelLayout>
    </article>
  );
};

export default SchedulePage;
