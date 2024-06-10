import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export type SendMessageCredentials = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

type FunctionError = {
  email?: { msg: string };
  name?: { msg: string };
  message?: { msg: string };
};

const useEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<FunctionError | null>(null);

  async function send(credentials: SendMessageCredentials, reset: () => void) {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://contact-by-email-portfolio.vercel.app/mail/send",
        credentials
      );

      toast.success(res.data.payload);
      setError(null);
      reset();
    } catch (error: any) {
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  }

  return { send, error, isLoading };
};

export { useEmail };
