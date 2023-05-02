import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Sides from "../components/Sides";
import Button from "../components/Button";
import Error from "../components/Error";
import TextInput from "../components/TextInput";
import { DataContext } from "./_app";
import { Wrapper } from "../components/Wrapper";

interface AccountUpdateProps {}

export const AccountUpdate: React.FC<AccountUpdateProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    resetField,
  } = useForm({
    mode: `onSubmit`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    setData({
      ...datas,
      ...data,
    });

    const emailProvider = data["email"].split("@")[1].split(".")[0];
    push(`/email/validate/${emailProvider}`);
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
    <Wrapper page="Account Update">
      <div className="account-update">
        <Sides>
          <LeftSide>
            <div>
              <TextInput
                name="email"
                title="Email Address"
                type="email"
                register={register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors?.email && <Error message={errors.email.message as unknown as string} />}
            </div>
          </LeftSide>
          <RightSide />
        </Sides>
        <Button onClick={onSubmit} disabled={loading} />
      </div>
    </Wrapper>
  );
};

export default AccountUpdate;
