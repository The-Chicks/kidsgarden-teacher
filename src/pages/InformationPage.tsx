import React from 'react';
import InformationList from '../components/organisms/list/InformationList';
import InformationAddPanel from '../components/organisms/panel/InformationAddPanel';

const InformationPage = () => {
  return (
    <article>
      <InformationAddPanel />
      <InformationList />
    </article>
  );
};

export default InformationPage;
