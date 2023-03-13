import StepOne from "./StepOne";

function FormContainer(props) {
  return (
    <>
      <StepOne
        title={props.title}
        subTitle={props.subTitle}
      />
    </>
  );
}

export default FormContainer;
