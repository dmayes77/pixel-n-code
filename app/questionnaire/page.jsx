// app/questionnaire/page.jsx
"use client";

import { useState } from "react";
import Step1_ContactInfo from "@/components/questionnaire/Step1_ContactInfo";
import Step2_BusinessOverview from "@/components/questionnaire/Step2_BusinessOverview";
import Step3_WebsiteGoals from "@/components/questionnaire/Step3_WebsiteGoals";
import Step4_BrandingStyle from "@/components/questionnaire/Step4_BrandingStyle";
//import Step5_Content from "@/components/questionnaire/Step5_Content";
//import Step6_Features from "@/components/questionnaire/Step6_Features";
//import Step7_Technical from "@/components/questionnaire/Step7_Technical";
//import Step8_BudgetTimeline from "@/components/questionnaire/Step8_BudgetTimeline";
//import Step9_Support from "@/components/questionnaire/Step9_Support";

const STEPS = [
  { id: 1, title: "Contact Info", Component: Step1_ContactInfo },
  { id: 2, title: "Business Overview", Component: Step2_BusinessOverview },
  { id: 3, title: "Website Goals", Component: Step3_WebsiteGoals },
  { id: 4, title: "Branding & Style", Component: Step4_BrandingStyle },
  //{ id: 5, title: "Website Content", Component: Step5_Content },
  //{ id: 6, title: "Features", Component: Step6_Features },
  //{ id: 7, title: "Technical Details", Component: Step7_Technical },
  //{ id: 8, title: "Budget & Timeline", Component: Step8_BudgetTimeline },
  //{ id: 9, title: "Ongoing Support", Component: Step9_Support },
];

export default function QuestionnaireWizard() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const { Component, title } = STEPS[stepIndex];

  const next = () => {
    if (stepIndex < STEPS.length - 1) setStepIndex((i) => i + 1);
    else handleSubmit();
  };
  const back = () => setStepIndex((i) => Math.max(i - 1, 0));

  const handleSubmit = () => {
    // e.g. fetch('/api/questionnaire', { method:'POST', body: JSON.stringify(formData) })
    console.log("final payload", formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Progress */}
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-600">
          Step {stepIndex + 1} of {STEPS.length}: {title}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-primary"
            style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Current step */}
      <Component data={formData} setData={setFormData} />

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={back}
          disabled={stepIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          <span className="font-semibold">Back</span>
        </button>
        <button
          onClick={next}
          className="px-6 py-2 bg-primary text-primary-foreground rounded"
        >
          <span className="font-semibold">
            {stepIndex === STEPS.length - 1 ? "Finish" : "Next"}
          </span>
        </button>
      </div>
    </div>
  );
}
