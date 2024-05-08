import React, { useState } from "react";

const faqData = [
  {
    question: "Do you offer freelancers?",
    answer: "Yes, we offer a wide range of freelancers.",
  },
  {
    question:
      "What’s the guarantee that I will be satisfied with the hired talent?",
    answer: "We provide a satisfaction guarantee with a refund policy.",
  },
  {
    question: "Can I hire multiple talents at once?",
    answer: "Yes, you can hire as many talents as you need for your project.",
  },
  {
    question: "Why should I not go to an agency directly?",
    answer:
      "Our platform offers competitive rates and a larger selection of freelancers.",
  },
  {
    question: "Who can help me pick a right skillset and duration for me?",
    answer:
      "Our customer service team can assist you in making the right choice.",
  },
];

const FAQItem = ({ faq, toggle, isOpen }) => (
  <div className="border-b ">
    <h3 className="text-lg mb-6 mt-6 font-semibold" onClick={toggle}>
      {faq.question}
      <span>{isOpen ? "-" : "+"}</span>
    </h3>
    {isOpen && <p>{faq.answer}</p>}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20000px">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          toggle={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
