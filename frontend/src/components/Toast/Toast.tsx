import { ReactElement, useEffect } from 'react';
import {
  useAppSelector,
  useAppDispatch,
} from '../../hooks/reduxHooks';
import { clearToast } from '../../features/toast/toastSlice';

const Toast = (): ReactElement | null => {
  const toast = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (toast.isOpen) {
      const timer = setTimeout(() => {
        dispatch(clearToast());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [toast, dispatch]);

  const styles =
    toast.status === 'SUCCESS'
      ? 'fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md'
      : 'fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md';

  if (!toast.isOpen) return null;

  return (
    <div className={styles}>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
