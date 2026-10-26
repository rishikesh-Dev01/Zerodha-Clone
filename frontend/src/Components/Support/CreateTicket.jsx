// src/ZerodhaSupport.jsx
import { useState } from "react";

const accountOpeningLinks = [
  "Resident individual",
  "Minor",
  "Non Resident Indian (NRI)",
  "Company, Partnership, HUF and LLP",
  "Glossary",
];

const accordionSections = [
  { id: "account", title: "Your Zerodha Account", icon: "👤" },
  { id: "kite", title: "Kite", icon: "⚡" },
  { id: "funds", title: "Funds", icon: "₹" },
  { id: "console", title: "Console", icon: "@" },
  { id: "coin", title: "Coin", icon: "◌" },
];

const alerts = [
  "Surveillance measure on scrips - October 2026",
  "Latest Intraday leverages and Square-off timings",
];

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
  "Learn how to create a ticket",
];

function AccordionItem({ icon, title, isOpen, onToggle, children }) {
  return (
    <div className="mb-4 border border-slate-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center bg-white text-left text-slate-800"
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center border-r border-slate-200 text-xl text-blue-600">
          {icon}
        </span>
        <span className="flex-1 px-4 text-lg font-medium">{title}</span>
        <span className="px-5 text-blue-600">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && <div className="border-t border-slate-200 px-5 py-4 text-slate-600">{children}</div>}
    </div>
  );
}

export default function CreateTicket() {
  const [openSection, setOpenSection] = useState("opening");

  const toggle = (id) => setOpenSection((prev) => (prev === id ? null : id));

  return (
    <main className="mx-auto max-w-6xl ">
      <div className="grid gap-6 lg:grid-cols-12">
        {/* LEFT: Accordion */}
        <section className="w-full lg:col-span-8 ">
          <AccordionItem
            icon="⊕"
            title="Account Opening"
            isOpen={openSection === "opening"}
            onToggle={() => toggle("opening")}
          >
            <ul className="space-y-3 pl-4">
              {accountOpeningLinks.map((link) => (
                <li key={link} className="relative before:absolute before:-left-4 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-600">
                  <a href="#" className="text-blue-600 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionItem>

          {accordionSections.map((section) => (
            <AccordionItem
              key={section.id}
              icon={section.icon}
              title={section.title}
              isOpen={openSection === section.id}
              onToggle={() => toggle(section.id)}
            >
              <p>Content goes here...</p>
            </AccordionItem>
          ))}
        </section>

        {/* RIGHT: Sidebar */}
        <aside className="w-full lg:col-span-4">
          <div className="mb-4 border-l-4 border-orange-500 bg-orange-50 p-4">
            <ul className="list-disc space-y-3 pl-5 text-lg">
              {alerts.map((alert) => (
                <li key={alert}>
                  <a href="#" className="text-blue-600 underline">
                    {alert}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-4 py-3 text-lg font-semibold text-slate-700">
              Quick links
            </div>
            {quickLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                className="block border-t border-slate-200 px-4 py-3 text-lg text-blue-600 no-underline hover:bg-slate-50"
              >
                {index + 1}. {link}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}