import React, { useState } from "react";
import { questions } from "../constants/questions";
import { FaAngleDown } from "react-icons/fa";
// const Faq = () => {
//   return (
//     <section class="bg-gray-200 py-20">
//       <div class="container">
//         <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
//           <h1 class="text-3xl text-center text-bookmark-blue">
//             Frequently Asked Questions
//           </h1>
//           <p class="text-center text-bookmark-grey mt-4">
//             Here are some of our FAQs. If you have any other questions you’d
//             like answered please feel free to email us.
//           </p>
//         </div>

//         <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
//           <div class="flex items-center border-b py-4">
//             <span class="flex-1">What is a Bookmark?</span>
//             <i class="text-bookmark-purple fas fa-chevron-down"></i>
//           </div>
//           <div class="flex items-center border-b py-4">
//             <span class="flex-1">How can I request a new browser?</span>
//             <i class="text-bookmark-purple fas fa-chevron-down"></i>
//           </div>
//           <div class="flex items-center border-b py-4">
//             <span class="flex-1">Is there a mobile app?</span>
//             <i class="text-bookmark-purple fas fa-chevron-down"></i>
//           </div>
//           <div class="flex items-center border-b py-4">
//             <span class="flex-1">What about other Chromium browsers?</span>
//             <i class="text-bookmark-purple fas fa-chevron-down"></i>
//           </div>
//           <button
//             type="button"
//             class="mt-12 flex self-center btn btn-purple hover:bg-bookmark-white hover:text-black"
//           >
//             More Info
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  return (
    <section class=" py-20">
      <div class="container">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto mb-10 px-2">
          <h1 class="text-3xl font-Poppins text-center text-bookmark-blue">
            Frequently Asked Questions
          </h1>

          <p class="text-center text-bookmark-grey font-light mt-4">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          {questions.map((question) => (
            <div key={question.id} className="mb-6">
              <button
                onClick={() =>
                  setSelectedQuestion(
                    selectedQuestion === question.id ? null : question.id
                  )
                }
                className="w-full text-left"
              >
                <div className="flex flex-row font-normal justify-between items-center gap-10">
                  {question.question}
                  {selectedQuestion === question.id ? (
                    <FaAngleDown />
                  ) : (
                    <FaAngleDown />
                  )}
                </div>
              </button>
              {selectedQuestion === question.id && (
                <p className="mt-2 text-gray-700 font-light">
                  {question.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
