import { SubmitHandler, useForm } from "react-hook-form";

type FormF = {
  email: string;
  password: string;
};

type BackendErrors = {
  email?: string;
  password?: string;
};

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormF>();

  const mockBackendCall = async (data: FormF) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (data.email === "test@example.com") {
          reject({
            email: "This email is already in use",
            password: "The password is too weak",
          } as BackendErrors);
        } else {
          resolve();
        }
      }, 1000);
    });
  };

  const onSubmit: SubmitHandler<FormF> = async (data) => {
    try {
      await mockBackendCall(data);
      console.log("Form submitted successfully", data);
    } catch (error) {
      const backendErrors = error as BackendErrors;

      if (backendErrors.email) {
        setError("email", { type: "backend", message: backendErrors.email });
      }

      if (backendErrors.password) {
        setError("password", {
          type: "backend",
          message: backendErrors.password,
        });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            type="password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loding..." : "submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
