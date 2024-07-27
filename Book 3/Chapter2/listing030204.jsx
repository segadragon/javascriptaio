import Message from "./listing030203";

function WelcomeScreen() {
  const header = (
    <h1>
      <Message message="Welcome!" messageType="header" />
    </h1>
  );
  return { header };
}

export default WelcomeScreen;
