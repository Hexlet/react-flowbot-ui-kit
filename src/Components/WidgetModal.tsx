import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Chat from './Chat';
import { AppProps } from '../interfaces/Step';

const WidgetModal = ({ steps }: AppProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant='secondary'
        onClick={() => setShow(true)}
        style={{ position: 'absolute', bottom: 20, right: 20 }}
      >
        Открыть Чат
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-bottom-right modal-fixed-size mb-0 mt-0'
        aria-labelledby='example-custom-modal-styling-title'
        backdrop='static'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Виртуальный помощник
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}
        >
          <Chat steps={steps}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WidgetModal;
