import { ReactElement } from 'react';
import RegistrationForm from '../components/Forms/RegistrationForm/RegistrationForm';

const Registration = (): ReactElement => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl my-6">Create an Account</h2>
        <RegistrationForm />
      </div>
    </>
  );
};

export default Registration;
