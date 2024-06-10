"use client";

import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { SendMessageCredentials, useEmail } from "../../hooks/useEmail";
import { FaArrowsRotate } from "react-icons/fa6";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<SendMessageCredentials>();
  const { send, error, isLoading } = useEmail();

  async function onSubmit(credentials: SendMessageCredentials) {
    await send(credentials, reset);
  }

  return (
    <section
      id="contact"
      className="w-full h-full  min-h-screen pt-24 pb-4 bg-gradient-to-b from-neutral-950 to-neutral-900 text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <h5 className="text-4xl font-bold inline border-b-4 border-neutral-500 w-fit">
            Contact
          </h5>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="flex flex-col gap-1">
            <span className="text-lg">Name</span>
            <input
              type="text"
              {...register("name")}
              className="p-2 text-neutral-950 bg-neutral-300 rounded outline-gray-500 focus:bg-white"
            />

            {error && error.name && (
              <p className="text-red-500">
                <span className="font-bold text-red-800 text-justify">
                  Error:{" "}
                </span>{" "}
                {error.name.msg}
              </p>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-lg">Phone</span>
            <input
              type="tel"
              {...register("phone")}
              className="p-2 text-neutral-950 bg-neutral-300 rounded outline-gray-500 focus:bg-white"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-lg">E-mail</span>
            <input
              type="email"
              {...register("email")}
              className="p-2 text-neutral-950 bg-neutral-300 rounded outline-gray-500 focus:bg-white"
            />
            {error && error.email && (
              <p className="text-red-500">
                <span className="font-bold text-red-800 text-justify">
                  Error:{" "}
                </span>{" "}
                {error.email.msg}
              </p>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-lg">Message</span>
            <textarea
              {...register("message")}
              rows={10}
              className="p-2 text-neutral-950 bg-neutral-300 rounded outline-gray-500 focus:bg-white"
            ></textarea>
            {error && error.message && (
              <p className="text-red-500">
                <span className="font-bold text-red-800 text-justify">
                  Error:{" "}
                </span>{" "}
                {error.message.msg}
              </p>
            )}
          </label>

          <button
            type="submit"
            className="flex items-center gap-2 bg-neutral-300 duration-300 mt-4 w-fit text-xl p-2 rounded text-neutral-950 font-semibold hover:bg-neutral-500"
          >
            Send Message{" "}
            {isLoading ? (
              <span className="animate-spin">
                <FaArrowsRotate />
              </span>
            ) : (
              <>
                <SiMinutemailer />
              </>
            )}
          </button>
        </form>

        <div className="flex justify-end items-end gap-2">
          <a
            href="https://api.whatsapp.com/send/?phone=5522997979633&text&type=phone_number&app_absent=0"
            target="_blank"
            title="contact me by whatsapp!"
            className="text-3xl bg-emerald-900 w-fit hover:scale-110 duration-300 p-2 rounded flex justify-end items-center gap-2"
          >
            <span className="bg-green-500 w-fit rounded-full">
              <FaWhatsapp size={40} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
