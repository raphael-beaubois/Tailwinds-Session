import React from "react";

const Contact = () => {
  return (
    <div class="pt-48 box-content	 flex bg-gradient-to-b h-screen from-gray-900 to-gray-700 items-center min-h-screen w-screen  dark:bg-gray-900 ">
      <div class="  w-screen">
        <div class=" rounded-lg min-h-screen mx-auto shadow-2xl bg-gradient-to-b from-gray-800 to-gray-600  sm:w-2/4 mb-48 text-white p-5 rounded-md shadow-sm">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold  dark:text-gray-200">
              Contactez-nous{" "}
            </h1>
            <p class="dark:text-gray-400">Pour prendre un rendez-vous </p>
          </div>
          <div class="m-7 ">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
            >
              <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />

              <div class="mb-6">
                <label
                  for="name"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Adresse courriel{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="phone"
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Numero de cellulaire
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+1 (555) 1234-567"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Votre message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                ></textarea>
              </div>
              <div class="mb-6">
                <button
                  type="submit"
                  class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Envoyer
                </button>
              </div>
              <p class="text-base text-center text-gray-400" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
