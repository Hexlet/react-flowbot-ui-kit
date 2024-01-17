import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Chat from './Chat';
import { Step } from '../interfaces/Step';

interface appProps {
  steps: Step[]
}

const WidgetModal = ({ steps }: appProps) => {
  const [show, setShow] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // TODO: auto scroll to the latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  });

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
        // dialogClassName='modal-90w'
        dialogClassName='modal-bottom-right modal-fixed-size'
        aria-labelledby='example-custom-modal-styling-title'
        backdrop='static'
      >
        <Modal.Header closeButton>
        {/* <Modal.Header> */}
          <Modal.Title id='example-custom-modal-styling-title'>
            Виртуальный помощник
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}
          ref={chatContainerRef}
        >
          <Chat steps={steps}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WidgetModal;
