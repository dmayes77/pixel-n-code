// app/questionnaire/layout.jsx
import { ReactNode } from "react";

export default function QuestionnaireLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 text-center">
        <h1>Design Questionnaire</h1>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
