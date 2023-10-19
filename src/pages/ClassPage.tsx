import React from 'react';
import ClassAddPanel from '../components/organisms/panel/ClassAddPanel';
import ClassList from '../components/organisms/list/ClassList';

const ClassPage = () => {
  return (
    <article>
      <ClassAddPanel />
      <ClassList />
    </article>
  );
};

export default ClassPage;
