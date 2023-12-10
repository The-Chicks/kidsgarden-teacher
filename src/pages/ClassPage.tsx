import React, { useEffect, useState } from 'react';
import PanelLayout from '../components/layouts/PanelLayout/PanelLayout';
import Form from '../components/layouts/Form';
import FormRow from '../components/molecules/formitem/FormRow';
import Input from '../components/atoms/Input';
import Flex from '../components/layouts/Flex';
import Button from '../components/atoms/Button';
import useForm from '../libs/hooks/useForm';
import { ClassInterface } from '../libs/interfaces/Interfaces';
import ListPanelLayout from '../components/layouts/PanelLayout/ListPanelLayout';
import ClassItem from '../components/molecules/listitem/ClassItem';

const ClassPage = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [{ className, classTeacher }, onChange, reset] = useForm({
    name: '',
    teacher: '',
  });

  const addClass = () => {
    console.log(className, classTeacher);
    setIsAdded(true);
    localStorage.setItem('className', className);
    localStorage.setItem('classTeacher', classTeacher);
    return;
  };

  const [classes, setClasses] = useState<ClassInterface[]>([
    { id: 1, name: '학급테스트1', teacher: '테스트계정1', num: 1 },
    { id: 2, name: '학급이름입니다', teacher: '테스트계정2', num: 1 },
    { id: 3, name: '학금명1', teacher: '테스트계정3', num: 1 },
  ]);

  useEffect(() => {
    if (isAdded) {
      const tempName = localStorage.getItem('className');
      const tempTeacher = localStorage.getItem('classTeacher');
      const temp: ClassInterface = {
        id: 4,
        name: tempName || '',
        teacher: tempTeacher || '',
        num: 0,
      };
      setClasses([...classes, temp]);
    }
  }, [isAdded]);

  return (
    <article>
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
            <Button color="yellow" onClick={addClass}>
              등록하기
            </Button>
            <Button type="border" color="yellow" onClick={reset}>
              초기화
            </Button>
          </Flex>
        </Form>
      </PanelLayout>
      <ListPanelLayout>
        {classes.map((classdata: ClassInterface) => {
          return (
            <ClassItem classdata={classdata} key={`class_${classdata.id}`} />
          );
        })}
      </ListPanelLayout>
    </article>
  );
};

export default ClassPage;
