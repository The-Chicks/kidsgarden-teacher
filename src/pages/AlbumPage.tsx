import React, { useState } from 'react';
import PanelLayout from '../components/layouts/PanelLayout/PanelLayout';
import Flex from '../components/layouts/Flex';
import { useMediaQuery } from 'react-responsive';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import DatePicker from '../components/atoms/DatePicker';
import FormRow from '../components/molecules/formitem/FormRow';
import ScrollableRow from '../components/layouts/ScrollableRow';
import TextArea from '../components/atoms/TextArea';
import Form from '../components/layouts/Form';
import ImageUploader from '../components/atoms/ImageUploader.tsx';
import useForm from '../libs/hooks/useForm';
import Input from '../components/atoms/Input';

const AlbumPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  const [imgs, setImgs] = useState<Blob[]>([]);
  const [{ title, content }, onChange, reset] = useForm({
    title: '',
    content: '',
  });

  const selImg = (file: Blob[]) => {
    setImgs([...imgs, ...file]);
  };
  const delImg = (idx: number) => {
    setImgs(imgs.filter((item: Blob, i: number) => idx !== i));
  };
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const saveAlbum = () => {
    return;
  };

  return (
    <article>
      <PanelLayout>
        <Flex width="100%" align="space-between">
          <Text>앨범</Text>
          <DatePicker
            name="date"
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDate(new Date(e.target.value).toISOString().slice(0, 10));
            }}
          />
        </Flex>
        <hr />
        <Form>
          <FormRow title="제목">
            <Input
              color="orange"
              placeholder="제목"
              name="title"
              value={title}
              onChange={onChange}
            />
          </FormRow>
          <FormRow title="내용">
            <TextArea
              width={isMobile ? '100%' : 'calc(100% - 120px)'}
              height={isMobile ? '200px' : '300px'}
              placeholder="내용"
              name="content"
              value={content}
              onChange={onChange}
            />
          </FormRow>
          <FormRow title="이미지">
            <ScrollableRow
              width={isMobile ? '100%' : 'calc(100% - 120px)'}
              height={isMobile ? '100px' : '200px'}
            >
              {imgs.map((item: Blob, idx: number) => {
                return (
                  <Button
                    style={{
                      flex: '0 0 auto',
                    }}
                    key={`Album_${date}_${idx}`}
                    width={isMobile ? '100px' : '200px'}
                    height={isMobile ? '100px' : '200px'}
                    onClick={() => {
                      delImg(idx);
                    }}
                  >
                    <img
                      src={URL.createObjectURL(item)}
                      alt="AlbumImg"
                      width={isMobile ? 100 : 200}
                      height={isMobile ? 100 : 200}
                      style={{ objectFit: 'cover' }}
                    />
                  </Button>
                );
              })}
              {imgs.length < 5 && (
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
            <Button color="orange" onClick={saveAlbum}>
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

export default AlbumPage;
