import React from 'react';
import FormRow from '../../molecules/formitem/FormRow';
import Input from '../../atoms/Input';
import useForm from '../../../libs/hooks/useForm';
import Flex from '../../layouts/Flex';
import Button from '../../atoms/Button';
import Form from '../../layouts/Form';
import PanelLayout from '../../layouts/PanelLayout/PanelLayout';

const ClassAddPanel = () => {
  const [{ className, classTeacher }, onChange, reset] = useForm({
    name: '',
    teacher: '',
  });

  const addClass = () => {
    console.log(className, classTeacher);
    return;
  };

  return (
    <PanelLayout>
      <Form>
        <FormRow title="학급 이름">
          <Input
            placeholder="학급 이름"
            name="className"
            value={className}
            onChange={onChange}
          />
        </FormRow>
        <FormRow title="담당 선생님">
          <Input
            placeholder="담당 선생님"
            name="classTeacher"
            value={classTeacher}
            onChange={onChange}
          />
        </FormRow>
        <Flex width="100%" margin="10px 0 0 0" align="flex-end">
          <Button color="orange" onClick={addClass}>
            등록하기
          </Button>
          <Button type="border" color="orange" onClick={reset}>
            초기화
          </Button>
        </Flex>
      </Form>
    </PanelLayout>
  );
};

export default ClassAddPanel;
