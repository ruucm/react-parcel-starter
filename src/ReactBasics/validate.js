import { SubmissionError } from "redux-form";

const validate = values => {
  console.log("values - validate", values);

  if (!values.phone) {
    throw new SubmissionError({
      _error: "전화번호는 필수 필드 입니다"
    });
  }

  return true;
};

export default validate;
