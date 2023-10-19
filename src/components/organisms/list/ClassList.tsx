import React from 'react';
import ClassItem from '../../molecules/listitem/ClassItem';
import ListPanelLayout from '../../layouts/PanelLayout/ListPanelLayout';
import { ClassInterface } from '../../../libs/interfaces/Interfaces';

const ClassList = () => {
  const classes = [
    { id: 1, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 2, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 3, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 4, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 5, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 6, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 7, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 8, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 9, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 10, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 11, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 12, name: '학급명', teacher: '선생님이름', num: 0 },
    { id: 13, name: '학급명', teacher: '선생님이름', num: 0 },
  ];

  return (
    <>
      <ListPanelLayout>
        {classes.map((classdata: ClassInterface) => {
          return (
            <ClassItem classdata={classdata} key={`class_${classdata.id}`} />
          );
        })}
      </ListPanelLayout>
    </>
  );
};

export default ClassList;
