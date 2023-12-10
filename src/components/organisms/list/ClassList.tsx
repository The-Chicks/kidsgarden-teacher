import React, { useEffect, useState } from 'react';
import ClassItem from '../../molecules/listitem/ClassItem';
import ListPanelLayout from '../../layouts/PanelLayout/ListPanelLayout';
import { ClassInterface } from '../../../libs/interfaces/Interfaces';

const ClassList = () => {
  const [classes, setClasses] = useState<ClassInterface[]>([
    { id: 1, name: '학급테스트1', teacher: '테스트계정1', num: 1 },
    { id: 2, name: '학급이름입니다', teacher: '테스트계정2', num: 1 },
    { id: 3, name: '학금명1', teacher: '테스트계정3', num: 1 },
  ]);
  useEffect(() => {
    const tempName = localStorage.getItem('className');
    const tempTeacher = localStorage.getItem('classTeacher');
    const temp: ClassInterface = {
      id: 4,
      name: tempName || '',
      teacher: tempTeacher || '',
      num: 0,
    };
    setClasses([...classes, temp]);
  }, []);

  return (
    <ListPanelLayout>
      {classes.map((classdata: ClassInterface) => {
        return (
          <ClassItem classdata={classdata} key={`class_${classdata.id}`} />
        );
      })}
    </ListPanelLayout>
  );
};

export default ClassList;
