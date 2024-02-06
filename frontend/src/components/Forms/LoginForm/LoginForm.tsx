import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginValidationSchema } from '../../../schemas/loginValidationSchema';
import { useLoginMutation } from '../../../features/auth/authService';
import type { LoginFormData } from './LoginForm.types';
import { joiResolver } from '@hookform/resolvers/joi';
import { useNavigate } from 'react-router-dom';
import { setToast } from '../../../features/toast/toastSlice';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setUser } from '../../../features/users/userSlice';

const LoginForm = () => {
  const [login, { data, isSuccess, isError, error }] =
    useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: joiResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (formData) => {
    await login(formData).unwrap();
  };

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(
        setToast({
          message: `Welcome back, ${data?.firstName} 👋 `,
          isOpen: true,
          status: 'SUCCESS',
        })
      );
      dispatch(setUser({ ...data }));
      navigate('/');
    }
    if (isError && error) {
      const errorMessage =
        'data' in error
          ? (error.data as { message: string }).message
          : 'Login failed';
      dispatch(
        setToast({
          message: errorMessage,
          status: 'ERROR',
          isOpen: true,
        })
      );
    }
  }, [isSuccess, navigate, dispatch, data, isError, error]);

  return (
    <section className="m-20">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold"
          >
            Email
          </label>
          <input
            id="email"
            className="border rounded w-full py-2 font-normal"
            type="email"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold"
          >
            Password
          </label>
          <input
            id="password"
            className="border rounded w-full py-2 font-normal"
            type="password"
            {...register('password')}
          />
          {errors.password && (
            <span className="text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex justify-between">
          <span>
            Not registered yet?{' '}
            <a className="hover:text-blue-700" href="/login">
              Sign up here
            </a>
          </span>
          <button
            type="submit"
            className="bg-blue-700 text-white p-3 font-bold text-2l rounded hover:bg-blue-800"
          >
            Sign in
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
