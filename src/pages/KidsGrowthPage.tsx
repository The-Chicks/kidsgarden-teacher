import React, { useState } from 'react';
import ListPanelLayout from '../components/layouts/PanelLayout/ListPanelLayout';
import ConversationItem from '../components/molecules/listitem/ConversationItem';
import { ConverstaionInterface } from '../libs/interfaces/Interfaces';
import Button from '../components/atoms/Button';
import Modal from '../components/molecules/modal/Modal';
import Text from '../components/atoms/Text';
import Flex from '../components/layouts/Flex';
import { useMediaQuery } from 'react-responsive';
import Input from '../components/atoms/Input';
import useForm from '../libs/hooks/useForm';

const ConversationPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selected, setSelected] = useState(-1);

  const [{ height, weight }, onChange, reset] = useForm({
    height: '',
    weight: '',
  });

  const kids = [
    { kids_id: 1, kids_name: '테스트 아이 1' },
    { kids_id: 2, kids_name: '테스트 아이 2' },
    { kids_id: 3, kids_name: '테스트 아이 3' },
    { kids_id: 4, kids_name: '테스트 아이 4' },
    { kids_id: 5, kids_name: '테스트 아이 5' },
  ];
  const conversations = [
    {
      conv_id: 1,
      conv_title: '대화 테스트 1',
      conv_content: '',
      conv_date: '',
    },
    {
      conv_id: 2,
      conv_title: '대화 테스트 2',
      conv_content: '',
      conv_date: '',
    },
    {
      conv_id: 3,
      conv_title: '대화 테스트 3',
      conv_content:
        '선생님 대화입니다. 선생님대화입니다.선생님 대화입니다. 선생님대화입니다.선생님 대화입니다. 선생님대화입니다.선생님 대화입니다. 선생님대화입니다.선생님 대화입니다. 선생님대화입니다.선생님 대화입니다. 선생님대화입니다.선생님 대화입니다. 선생님대화입니다.선생님 대화입니다. 선생님대화입니다.',
      conv_date: '',
    },
  ];

  const addKidsGrowth = () => {
    return;
  };

  return (
    <article>
      {isModalOpened && (
        <Modal
          type="A"
          closeModal={() => {
            setIsModalOpened(false);
          }}
          width={isMobile ? '80dvw' : '30dvw'}
          height={isMobile ? '70dvh' : '50dvh'}
        >
          <Flex width="100%">
            <Text color="orange">{kids[selected].kids_name}</Text>
          </Flex>
          <hr style={{ width: '100%' }} />
          <Flex margin="10px 0 0 0" width="100%" align="flex-end">
            <Button color="yellow" onClick={addKidsGrowth}>
              등록하기
            </Button>
          </Flex>
        </Modal>
      )}
      <ListPanelLayout>
        {conversations.map(
          (conversationdata: ConverstaionInterface, idx: number) => {
            return (
              <Button
                onClick={() => {
                  setIsModalOpened(true);
                  setSelected(idx);
                }}
                key={`class_${conversationdata.conv_id}`}
              >
                <ConversationItem conversationdata={conversationdata} />
              </Button>
            );
          },
        )}
      </ListPanelLayout>
    </article>
  );
};

export default ConversationPage;
