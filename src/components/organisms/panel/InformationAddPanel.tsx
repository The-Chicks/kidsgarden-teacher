import React from 'react';
import FormRow from '../../molecules/formitem/FormRow';
import useForm from '../../../libs/hooks/useForm';
import Flex from '../../layouts/Flex';
import Button from '../../atoms/Button';
import Form from '../../layouts/Form';
import PanelLayout from '../../layouts/PanelLayout/PanelLayout';
import TextArea from '../../atoms/TextArea';
import { useMediaQuery } from 'react-responsive';

const InformationAddPanel = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  const [{ info_content }, onChange, reset] = useForm({
    info_content: '',
  });

  const addClass = () => {
    console.log(info_content);
    return;
  };

  return (
    <PanelLayout>
      <Form>
        <FormRow title="등원정보">
          <TextArea
            width={isMobile ? '100%' : 'calc(100% - 120px)'}
            height={isMobile ? '200px' : '300px'}
            placeholder="정보"
            name="info_content"
            value={info_content}
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

export default InformationAddPanel;
