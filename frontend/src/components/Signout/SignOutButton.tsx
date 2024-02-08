import { useEffect } from 'react';
import { useLogoutMutation } from '../../services/authApi';
import { setToast } from '../../features/toast/toastSlice';
import { clearUser } from '../../features/users/userSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';

const SignOutButton = () => {
  const [logout, { isSuccess, isError, error }] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    await logout().unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setToast({
          message: 'Signed Out!',
          isOpen: true,
          status: 'SUCCESS',
        })
      );
      dispatch(clearUser());
    }
    if (isError && error) {
      console.error(error);
    }
  }, [isSuccess, isError, error, dispatch]);

  return (
    <button
      onClick={handleSignOut}
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100 "
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
