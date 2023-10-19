import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import useForm from '../libs/hooks/useForm';
import Flex from '../components/layouts/Flex';
import Text from '../components/atoms/Text';
import PanelLayout from '../components/layouts/PanelLayout/PanelLayout';
import Form from '../components/layouts/Form';
import FormRow from '../components/molecules/formitem/FormRow';
import Input from '../components/atoms/Input';
import TextArea from '../components/atoms/TextArea';
import ScrollableRow from '../components/layouts/ScrollableRow';
import Button from '../components/atoms/Button';
import ImageUploader from '../components/atoms/ImageUploader.tsx';

const NotificationAddPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  const [images, setImages] = useState<Blob[]>([]);
  const [{ announcementTitle, announcementContent }, onChange, reset] = useForm(
    {
      title: '',
      content: '',
    },
  );

  const selImg = (file: Blob[]) => {
    setImages([...images, ...file]);
  };
  const delImg = (idx: number) => {
    setImages(images.filter((item: Blob, i: number) => idx !== i));
  };

  const addAnnouncement = () => {
    console.log(announcementTitle, announcementContent);
    return;
  };

  return (
    <article>
      <Flex width="100%">
        <Text>알림장</Text>
      </Flex>
      <PanelLayout>
        <Form>
          <FormRow title="제목">
            <Input
              color="orange"
              placeholder="제목"
              name="announcementTitle"
              value={announcementTitle}
              onChange={onChange}
            />
          </FormRow>
          <FormRow title="내용">
            <TextArea
              width={isMobile ? '100%' : 'calc(100% - 120px)'}
              height={isMobile ? '200px' : '300px'}
              placeholder="내용"
              name="announcementContent"
              value={announcementContent}
              onChange={onChange}
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
            <Button type="border" color="orange" onClick={reset}>
              초기화
            </Button>
          </Flex>
        </Form>
      </PanelLayout>
    </article>
  );
};

export default NotificationAddPage;
