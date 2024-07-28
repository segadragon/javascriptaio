import Message from "./listing030318";

function ErrorMesage(props) {
  return <Message messageType="error" messageText={props.errorMessage} />;
}
export default ErrorMesage;
