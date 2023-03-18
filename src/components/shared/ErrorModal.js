import { Modal } from "native-base";
import TextBox from "./TextBox";

const ErrorModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => {
        props.onClose(false);
      }}
      size={"lg"}
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{props.title}</Modal.Header>
        <Modal.Body>
          <TextBox>{props.error}</TextBox>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ErrorModal;
