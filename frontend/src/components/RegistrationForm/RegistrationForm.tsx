const RegistrationForm = () => {
  return (
    <form className="flex flex-col gap-5">
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
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold flex-1"
          >
            Last Name
          </label>
          <input
            id="lastName"
            className="border rounded w-full py-2 font-normal"
            type="text"
          />
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
        />
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
        />
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
        />
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
        />
      </div>
      <div className="flex justify-between">
        <span>
          Already registered? <a href="/login">Sign in here</a>
        </span>
        <button className="bg-blue-700 text-white p-3 font-bold text-2l rounded">
          Create Account
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
