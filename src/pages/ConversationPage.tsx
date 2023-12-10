import React, { useState } from 'react';
import ListPanelLayout from '../components/layouts/PanelLayout/ListPanelLayout';
import ConversationItem from '../components/molecules/listitem/ConversationItem';
import { ConverstaionInterface } from '../libs/interfaces/Interfaces';
import Button from '../components/atoms/Button';
import Modal from '../components/molecules/modal/Modal';
import Text from '../components/atoms/Text';
import Flex from '../components/layouts/Flex';
import { useMediaQuery } from 'react-responsive';
import TextArea from '../components/atoms/TextArea';

const ConversationPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [answerContent, setAnswerContent] = useState(
    localStorage.getItem('convA') || '',
  );

  const conversations = [
    {
      conv_id: 1,
      conv_title: '선생님 우리 아이 유치원 옮김 문의드립니다.',
      conv_content:
        '남편이 직장을 지방으로 발령받게 되어서 부득이하게 아이가 유치원을 그만 다니게 되었네요ㅠㅠ 그 동안 정말 감사했습니다 선생님. 여기에 문의를 남기면 될까요?',
      conv_date: '2023-12-10',
    },
  ];

  const addAnswer = () => {
    localStorage.setItem('convA', answerContent);
    setIsModalOpened(false);
    return;
  };

  return (
    <article>
      {isModalOpened && (
        <Modal
          type="C"
          closeModal={() => {
            setIsModalOpened(false);
          }}
          width={isMobile ? '80dvw' : '30dvw'}
          height={isMobile ? '70dvh' : '50dvh'}
        >
          <Flex direction="column" gap="10px" crossalign="flex-start">
            <Text color="orange">{conversations[selected].conv_title}</Text>
            <Text>{conversations[selected].conv_content}</Text>
          </Flex>
          <hr style={{ width: '100%' }} />
          <TextArea
            name="answerContent"
            width="100%"
            height="300px"
            placeholder="답변을 적어주세요"
            value={answerContent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAnswerContent(e.target.value);
            }}
          />
          <Flex margin="10px 0 0 0" width="100%" align="flex-end">
            <Button color="yellow" onClick={addAnswer}>
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
