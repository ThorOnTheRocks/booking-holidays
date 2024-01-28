import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { userRegistrationSchema } from '../../schemas/userRegistrationSchema';
import { useRegisterUserMutation } from '../../services/userService/userService';
import { RegistrationFormData } from './RegistrationForm.type';

const RegistrationForm = (): JSX.Element => {
  const [userRegister, { isSuccess, isError, error }] =
    useRegisterUserMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: joiResolver(userRegistrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationFormData> = async (
    data
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...userData } = data;
    await userRegister(userData);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
    if (isError) {
      console.error(`Registration error: `, error);
    }
  }, [isSuccess, isError, error, navigate]);

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold"
          >
            First Name
          </label>
          <input
            id="firstName"
            className="border rounded w-full py-2 font-normal"
            type="text"
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className="text-red-500">
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="flex-1">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold"
          >
            Last Name
          </label>
          <input
            id="lastName"
            className="border rounded w-full py-2 font-normal"
            type="text"
            {...register('lastName')}
          />
          {errors.lastName && (
            <span className="text-red-500">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold"
        >
          Username
        </label>
        <input
          id="username"
          className="border rounded w-full py-2 font-normal"
          type="text"
          {...register('username')}
        />
        {errors.username && (
          <span className="text-red-500">
            {errors.username.message}
          </span>
        )}
      </div>
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
          <span className="text-red-500">{errors.email.message}</span>
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
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 text-sm font-bold"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          className="border rounded w-full py-2 font-normal"
          type="password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <div className="flex justify-between">
        <span>
          Already registered?{' '}
          <a className="hover:text-blue-700" href="/login">
            Sign in here
          </a>
        </span>
        <button
          type="submit"
          className="bg-blue-700 text-white p-3 font-bold text-2l rounded hover:bg-blue-800"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
