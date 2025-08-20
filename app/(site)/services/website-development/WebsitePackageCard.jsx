import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WebsitePackageCard({ title, subtitle, setupFee, monthlyPrice, totalPrice, pages, features, idealFor }) {
  return (
    <div className="rounded-2xl shadow-lg border border-gray-200 p-6 bg-white flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
        <p className="text-lg font-semibold text-gray-700 mb-1">
          <span className="text-gray-400">Setup:</span> ${setupFee}
        </p>
        <p className="text-3xl font-bold text-primary mb-2">${monthlyPrice}/month</p>
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-medium">24-month commitment required.</span>
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Includes up to <strong>{pages} custom pages</strong>
        </p>

        <ul className="space-y-2 mb-6">
          {features.map((item, index) => (
            <li key={index} className="text-sm text-gray-700 flex items-start">
              <span className="mr-2 mt-1 text-green-500">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">
          <span className="font-medium">Best for:</span> {idealFor}
        </p>
        <Button asChild className="w-full bg-primary text-white rounded-xl py-2 text-sm font-semibold hover:bg-primary-dark transition">
          <Link href="https://calendly.com/getcodemaze/60min">Book A Call</Link>
        </Button>
      </div>
    </div>
  );
}
