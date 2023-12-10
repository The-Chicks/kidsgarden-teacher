import React, { useEffect, useState } from 'react';
import PanelLayout from '../components/layouts/PanelLayout/PanelLayout';
import useForm from '../libs/hooks/useForm';
import Form from '../components/layouts/Form';
import FormRow from '../components/molecules/formitem/FormRow';
import Input from '../components/atoms/Input';
import Flex from '../components/layouts/Flex';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import ImageUploader from '../components/atoms/ImageUploader.tsx';
import ScrollableRow from '../components/layouts/ScrollableRow';
import { useMediaQuery } from 'react-responsive';
import TextArea from '../components/atoms/TextArea';
import { useNavigate, useParams } from 'react-router-dom';

const AnnouncementEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  const [images, setImages] = useState<Blob[]>([]);
  const [title, setTitle] = useState(`제목${id}`);
  const [content, setContent] = useState('내용입니다.');

  const selImg = (file: Blob[]) => {
    setImages([...images, ...file]);
  };
  const delImg = (idx: number) => {
    setImages(images.filter((item: Blob, i: number) => idx !== i));
  };

  const addAnnouncement = () => {
    console.log(title, content);
    localStorage.setItem('noticeTitle', title);
    localStorage.setItem('noticeContent', content);
    // localStorage.setItem('noticeTitle', '1');
    navigate('/teacher/announcement');
    return;
  };
  useEffect(() => {
    setTitle(localStorage.getItem('noticeTitle') || '');
    setContent(localStorage.getItem('noticeContent') || '');
  }, []);

  return (
    <article>
      <Flex width="100%">
        <Text>공지사항</Text>
      </Flex>
      <PanelLayout>
        <Form>
          <FormRow title="제목">
            <Input
              color="orange"
              placeholder="제목"
              name="announcementTitle"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
          </FormRow>
          <FormRow title="내용">
            <TextArea
              width={isMobile ? '100%' : 'calc(100% - 120px)'}
              height={isMobile ? '200px' : '300px'}
              placeholder="내용"
              name="announcementContent"
              value={content}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setContent(e.target.value);
              }}
            />
          </FormRow>
          <FormRow title="이미지">
            <ScrollableRow
              width={isMobile ? '100%' : 'calc(100% - 120px)'}
              height={isMobile ? '100px' : '200px'}
            >
              {images.map((item: Blob, idx: number) => {
                return (
                  <Button
                    style={{
                      flex: '0 0 auto',
                    }}
                    key={`AnnouncementImg_${idx}`}
                    width={isMobile ? '100px' : '200px'}
                    height={isMobile ? '100px' : '200px'}
                    onClick={() => {
                      delImg(idx);
                    }}
                  >
                    <img
                      src={URL.createObjectURL(item)}
                      alt="partnerImg"
                      width={isMobile ? 100 : 200}
                      height={isMobile ? 100 : 200}
                      style={{ objectFit: 'cover' }}
                    />
                  </Button>
                );
              })}
              {images.length < 5 && (
                <ImageUploader
                  width={isMobile ? '100px' : '200px'}
                  height={isMobile ? '100px' : '200px'}
                  onChange={(e) => {
                    selImg(e.target.files);
                  }}
                />
              )}
            </ScrollableRow>
          </FormRow>
          <Flex width="100%" margin="10px 0 0 0" align="flex-end">
            <Button color="orange" onClick={addAnnouncement}>
              등록하기
            </Button>
            <Button
              type="border"
              color="orange"
              onClick={() => {
                setTitle('');
                setContent('');
              }}
            >
              초기화
            </Button>
          </Flex>
        </Form>
      </PanelLayout>
    </article>
  );
};

export default AnnouncementEditPage;
