"use client";

import Image from "next/image";
import { useState } from "react";

import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";

const FAQsPage = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Voca?",
      answer:
        "Voca is an innovative and interactive language learning platform designed to help users learn new languages in an effective and engaging way. With its AI-driven features, gamified lessons, and personalized progress tracking, Voca ensures a unique learning experience tailored to your needs.",
    },
    {
      question: "How do I start learning on Voca?",
      answer:
        "To start learning on Voca, simply sign up for an account on our platform. Once registered, browse through our wide selection of courses, pick the language you'd like to learn, and begin your journey with tailored lessons and challenges.",
    },
    {
      question: "What languages are available?",
      answer:
        "Voca offers a diverse range of languages, including popular options like Spanish, French, German, and Italian, as well as less commonly taught languages such as Japanese, Korean, and Portuguese. New languages are regularly added based on demand. Plus it has unique feature of accessing the constructive languages created by the the big authors and also community wise. We offer languages like Tenqwar, Dothraki, Valerian, etc.",
    },
    {
      question: "How does the subscription work?",
      answer:
        "Voca provides both free and premium subscription options. The free tier includes access to basic lessons and exercises, while the premium subscription unlocks advanced features such as unlimited hearts, exclusive lessons, offline learning, and priority support. Subscriptions can be managed or canceled anytime through your account settings.",
    },
    {
      question: "What are hearts in Voca?",
      answer:
        "Hearts are a unique feature of Voca that track your progress and keep you engaged. Each time you complete lessons or activities, you earn hearts that can be used to unlock additional content, rewards, and challenges. Premium users enjoy unlimited hearts.",
    },
    {
      question: "Can I go community collaboration?",
      answer:
        "Yes, the conlang voca users add is easily accessible to anyone and everyone and anyone who are laguage ethuaost can write learn and modify those conlangs for individual enhancement and the literal advancement.",
    },
    {
      question: "How do I earn points?",
      answer:
        "Points are earned by completing lessons, quizzes, and challenges within the platform. You can also earn bonus points by maintaining a streak of consecutive learning days or by participating in special events and competitions.",
    },
    {
      question: "Can I track my progress?",
      answer:
        "Absolutely! Voca includes a robust progress tracking system that provides insights into your learning journey. View your completed lessons, total points earned, streaks, and areas of improvement, all from your personalized dashboard.",
    },
    {
      question: "What happens if I forget my password?",
      answer:
        "If you forget your password, don't worry! Simply click on the 'Forgot Password' link on the login page, enter your registered email address, and follow the instructions sent to your inbox to reset your password securely.",
    },
    {
      question: "Can I use Voca on mobile?",
      answer:
        "Currently, Voca is accessible via desktop browsers for an immersive learning experience. We are actively working on developing a mobile application to make Voca even more convenient and accessible for on-the-go learning. Stay tuned for updates!",
    },
  ];
  

  const toggleAnswer = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-6 max-w-[1200px] mx-auto">
      {/* Main Content Area */}
      <div className="flex-1">
        
        
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-col items-center">
            {/* SVG Header */}
            <Image
              src="/faqs.svg"
              alt="FAQs"
              height={90}
              width={90}
            />
            <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
              Frequently Asked Questions
            </h1>
            <p className="mb-6 text-center text-lg text-muted-foreground">
              Find answers to common questions about Voca.
            </p>
          </div>

          {/* FAQs List */}
          <div className="space-y-4 w-full max-w-2xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg hover:shadow-lg transition-all"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={open === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-neutral-700">{faq.question}</h3>
                  <span
                    className={`text-xl font-bold ${
                      open === index ? "text-primary" : "text-neutral-500"
                    }`}
                  >
                    {open === index ? "−" : "+"}
                  </span>
                </div>

                {open === index && (
                  <p
                    id={`faq-answer-${index}`}
                    className="mt-2 text-sm text-neutral-600"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Sidebar */}
      <div className="w-full lg:w-[300px]">
        <StickyWrapper>
          <div className="space-y-6">
            <Promo /> {/* Promo component is now at the top */}
            <Quests points={300} /> {/* Pass appropriate props */}
          </div>
        </StickyWrapper>
      </div>
    </div>
  );
};

export default FAQsPage;
