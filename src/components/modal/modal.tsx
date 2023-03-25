import { Dialog } from 'primereact/dialog';

type DialogProps = {
  children: JSX.Element;
  title?: string;
  visible: boolean;
  onChangeDialogVisibility: () => void;
  footer?: JSX.Element;
};

export function Modal({ children, footer, visible, onChangeDialogVisibility, title }: DialogProps) {
  return (
    <Dialog
      header={title}
      visible={visible}
      style={{ width: '75vw' }}
      maximizable
      modal
      contentStyle={{ height: '300px' }}
      onHide={onChangeDialogVisibility}
      footer={footer}
      data-testid="modal"
    >
      {children}
    </Dialog>
  );
}
