export type ToastProps = {
  message: string;
  status: 'SUCCESS' | 'ERROR';
  onClose: () => void;
};
