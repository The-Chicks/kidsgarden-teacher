import React, { useState } from 'react';
import PanelLayout from '../components/layouts/PanelLayout/PanelLayout';
import Flex from '../components/layouts/Flex';
import { useMediaQuery } from 'react-responsive';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import DatePicker from '../components/atoms/DatePicker';
import useForm from '../libs/hooks/useForm';
import FormRow from '../components/molecules/formitem/FormRow';
import ScrollableRow from '../components/layouts/ScrollableRow';
import TextArea from '../components/atoms/TextArea';
import Form from '../components/layouts/Form';
import ImageUploader from '../components/atoms/ImageUploader.tsx';

const DietPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  const [breakfastImgs, setBreakfastImgs] = useState<Blob[]>([]);
  const [lunchImgs, setLunchImgs] = useState<Blob[]>([]);
  const [dinnerImgs, setDinnerImgs] = useState<Blob[]>([]);
  const [{ dietBreakfast, dietLunch, dietDinner }, onChange, reset] = useForm({
    dietBreakfast: '',
    dietLunch: '',
    dietDinner: '',
  });

  const selImg = (file: Blob[], type: number) => {
    if (type === 0) {
      setBreakfastImgs([...breakfastImgs, ...file]);
    } else if (type === 1) {
      setLunchImgs([...lunchImgs, ...file]);
    } else {
      setDinnerImgs([...dinnerImgs, ...file]);
    }
  };
  const delImg = (idx: number, type: number) => {
    console.log(idx, type);
    if (type === 0) {
      setBreakfastImgs(
        breakfastImgs.filter((item: Blob, i: number) => idx !== i),
      );
    } else if (type === 1) {
      setLunchImgs(lunchImgs.filter((item: Blob, i: number) => idx !== i));
    } else {
      setDinnerImgs(dinnerImgs.filter((item: Blob, i: number) => idx !== i));
    }
  };
  const [date, setDate] = useState(new Date());

  const diets = [
    {
      text: '아침',
      name: 'dietBreakfast',
      value: dietBreakfast,
      imgs: breakfastImgs,
    },
    { text: '점심', name: 'dietlunch', value: dietLunch, imgs: lunchImgs },
    { text: '저녁', name: 'dietDinner', value: dietDinner, imgs: dinnerImgs },
  ];
  const saveDiet = () => {
    return;
  };

  return (
    <article>
      <PanelLayout>
        <Flex width="100%" align="space-between">
          <Text>식단</Text>
          <DatePicker
            name="date"
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDate(new Date(e.target.value));
            }}
          />
          <Button type="bg" color="yellow" onClick={saveDiet}>
            저장
          </Button>
        </Flex>
        <hr />
        <Form>
          {diets.map((e, index: number) => {
            return (
              <>
                <FormRow title={e.text}>
                  <TextArea
                    width={isMobile ? '100%' : 'calc(100% - 120px)'}
                    height={isMobile ? '200px' : '300px'}
                    placeholder={e.text}
                    name={e.name}
                    value={e.value}
                    onChange={onChange}
                  />
                </FormRow>
                <FormRow title="이미지">
                  <ScrollableRow
                    width={isMobile ? '100%' : 'calc(100% - 120px)'}
                    height={isMobile ? '100px' : '200px'}
                  >
                    {e.imgs.map((item: Blob, idx: number) => {
                      return (
                        <Button
                          style={{
                            flex: '0 0 auto',
                          }}
                          key={`${e.name}_${idx}`}
                          width={isMobile ? '100px' : '200px'}
                          height={isMobile ? '100px' : '200px'}
                          onClick={() => {
                            delImg(idx, index);
                          }}
                        >
                          <img
                            src={URL.createObjectURL(item)}
                            alt="DietImg"
                            width={isMobile ? 100 : 200}
                            height={isMobile ? 100 : 200}
                            style={{ objectFit: 'cover' }}
                          />
                        </Button>
                      );
                    })}
                    {e.imgs.length < 5 && (
                      <ImageUploader
                        width={isMobile ? '100px' : '200px'}
                        height={isMobile ? '100px' : '200px'}
                        onChange={(e) => {
                          selImg(e.target.files, index);
                        }}
                      />
                    )}
                  </ScrollableRow>
                </FormRow>
              </>
            );
          })}
        </Form>
      </PanelLayout>
    </article>
  );
};

export default DietPage;
