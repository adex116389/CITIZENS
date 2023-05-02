import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Sides from "../components/Sides";
import Button from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DataContext } from "./_app";
import axios from "axios";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";
import { Wrapper } from "../components/Wrapper";
import { FileInput } from "../components/FileInput";

interface SupportingDocumentProps {}

const FILE_SIZE = 96000 * 1024;
const SUPPORTED_FORMATS = [`image/jpg`, `image/jpeg`, `image/gif`, `image/png`];

const schema = yup.object().shape({
  front: yup
    .mixed()
    .required(`Front picture is required`)
    .test(
      `fileExist`,
      `Upload the front image of your ID.`,
      (value) => !!value[0]
    )
    .test(
      `fileSize`,
      `The image you selected is too large.`,
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      `fileFormat`,
      `The image you are trying to upload is not supported`,
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
  back: yup
    .mixed()
    .required(`Back picture is required`)
    .test(
      `fileExist`,
      `Upload the front image of your ID.`,
      (value) => !!value[0]
    )
    .test(
      `fileSize`,
      `The image you selected is too large.`,
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      `fileFormat`,
      `The image you are trying to upload is not supported`,
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
});

export const SupportingDocument: React.FC<SupportingDocumentProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `all`,
  });

  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  const { data: datas, setData } = useContext(DataContext);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append(`front`, data.front[0]);
    formData.append(`back`, data.back[0]);
    formData.append(`form`, `DOCUMENTS`);
    formData.append(`sessionId`, datas.sessionId);

    await axios.post(`/api/send-id`, formData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    setLoading(false);
    setData({
      ...datas,
      docs: {
        front: data.front[0],
        back: data.back[0],
      },
    });

    const url = getProgress()[getProgress().indexOf(`Supporting Document`) + 1];

    push(getNextUrl(url));
  });

  return (
    <Wrapper page="Supporting Document">
      <div className="card-information">
        <Sides>
          <LeftSide>
            <FileInput
              name={`front`}
              label="Front of ID"
              register={register}
              watch={watch}
              error={
                errors.front && (errors.front.message as unknown as string)
              }
            />
            <FileInput
              name={`back`}
              label="Back of ID"
              register={register}
              watch={watch}
              error={
                errors.back && (errors.back.message as unknown as string)
              }
            />
          </LeftSide>
          <RightSide />
        </Sides>
        <Button onClick={onSubmit} disabled={loading} />
      </div>
    </Wrapper>
  );
};

export default SupportingDocument;
