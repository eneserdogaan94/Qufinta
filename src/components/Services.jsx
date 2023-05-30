import React from "react";
import Document from "../assets/Qufinta.docx"

const Services = () => {
  const techs = [

  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:w-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Services
          </p>
          <p className="py-6">

            <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li className="text-white">
                Accounting Services in America (1 year)
                <ul class="pl-5 mt-2 space-y-1 list-disc list-inside text-white">
                  <li>Monthly Bookkeeping</li>
                  <li>Create an account on online accounting software site such as QuickBooks.</li>
                  <li>Financial Reports – General Ledger, Income Statement, Balance Sheet</li>
                  <li>Year End Report</li>
                  <li>Federal Income Tax Return</li>
                  <li>State Tax Return</li>
                  <li>Franchise Tax and Annual Report</li>
                  <li>24/7 Online Consulting</li>
                  <li>Tax Scenario Planning</li>
                  <li>Special Transactions – Subscription Invoice, Invoices, Checks and</li>
                  <li>Refunds</li>
                  <li>Multi-Currency Support</li>
                </ul>
              </li>
              <li className="text-white">
                US Bank Account
                <ul class="pl-5 mt-2 space-y-1 list-disc list-inside text-white">
                  <li>Open and manage your U.S. Business Bank Account completely remotely.</li>
                  <li>Take advantage of our partnership.</li>
                </ul>
              </li>
              <li className="text-white">
                US Company Address (1 Year) : You need a company address for the company setting up.
                <ul class="pl-5 mt-2 space-y-1 list-disc list-inside text-white">
                  <li>1 Buyer</li>
                  <li>20 Scanned Documents Service / Annual</li>
                  <li>Physical Shipping</li>
                  <li>Special Suite Number for You</li>
                  <li>No Setup Fee</li>
                  <li>Same Day Digital Scan</li>
                  <li>Unlimited Viewing Opportunity</li>
                  <li>24/7 Access</li>
                  <li>+20 Documents / Annual – Extra Fee</li>
                  <li>Does Not Include Shipping Fee</li>
                </ul>
              </li>
              <li className="text-white">
                Company formation: Let us help you with your company formation process with free mail forwarding and business address.   </li>

              <li className="text-white">
                Download document for more information.<a href={Document} target="_blank" rel="noopener noreferrer" style={{ fontStyle: 'italic', fontWeight: 'bold', textDecorationLine: 'underline' }} download>Click to Here</a>
              </li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
