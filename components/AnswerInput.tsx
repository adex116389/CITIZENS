

const AnswerInput = ({ title, register }: {
  title: string;
  register: any
}) => {
  return (
    <div className="answerInput">
      <label htmlFor="">{title}</label>
      <input type="text" {...register} />
    </div>
  );
};

export default AnswerInput;
