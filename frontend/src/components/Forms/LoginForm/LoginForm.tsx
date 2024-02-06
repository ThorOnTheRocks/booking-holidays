import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginValidationSchema } from '../../../schemas/loginValidationSchema';
import { useLoginMutation } from '../../../features/auth/authService';
import type { LoginFormData } from './LoginForm.types';
import { joiResolver } from '@hookform/resolvers/joi';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [login, { isSuccess }] = useLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: joiResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (formData) => {
    console.log('form data: ', formData);
    await login(formData).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('success');
      navigate('/');
    }
  }, [isSuccess, navigate]);

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
