export default function GuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <a
        href="/guides"
        className="text-green-600 font-semibold inline-block mb-6"
      >
        ← Back To Landlord Guides
      </a>

      <h1 className="text-5xl font-bold text-slate-900 mb-8">
        Landlord Compliance Checklist (UK)
      </h1>

      <p className="text-lg text-slate-600 mb-6">
        Being a landlord involves much more than collecting rent. There are a
        number of legal, safety and tax responsibilities that should be kept up
        to date throughout the year. This checklist highlights some of the key
        areas landlords should regularly review.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg mb-10">
        <p className="text-slate-700">
          <strong>Important:</strong> This checklist is intended as a general
          guide only. Individual landlord responsibilities may vary depending
          on the type of property, tenancy and your personal circumstances.
          Always ensure you are complying with the latest legislation and seek
          professional advice where appropriate.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Annual Safety Checks
      </h2>

      <ul className="list-disc pl-8 text-slate-600 mb-8 space-y-2">
        <li>Gas Safety Certificate (where gas appliances are installed).</li>
        <li>Check smoke alarms are fitted and working.</li>
        <li>Check carbon monoxide alarms where required.</li>
      </ul>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Electrical Safety
      </h2>

      <ul className="list-disc pl-8 text-slate-600 mb-8 space-y-2">
        <li>
          Ensure a valid Electrical Installation Condition Report (EICR) is in
          place where required.
        </li>
        <li>Keep electrical installations in a safe condition.</li>
        <li>
          Consider regular inspection of any electrical appliances you provide.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Energy Performance
      </h2>

      <ul className="list-disc pl-8 text-slate-600 mb-8 space-y-2">
        <li>
          Ensure a valid Energy Performance Certificate (EPC) is available
          where required.
        </li>
        <li>
          Keep up to date with any changes to minimum energy efficiency
          requirements.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Tax & HMRC
      </h2>

      <ul className="list-disc pl-8 text-slate-600 mb-4 space-y-2">
        <li>Maintain accurate income and expense records.</li>
        <li>Understand whether Making Tax Digital applies to you.</li>
        <li>Keep digital records where required.</li>
        <li>Review your tax obligations regularly.</li>
      </ul>

      <a
        href="/guides/mtd-threshold-for-landlords"
        className="text-green-600 font-semibold inline-block mb-3"
      >
        Read our MTD Threshold For Landlords guide →
      </a>

      <br />

      <a
        href="/guides/mtd-faq-for-landlords"
        className="text-green-600 font-semibold inline-block mb-8"
      >
        Read our MTD FAQ For Landlords guide →
      </a>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Good Landlord Habits
      </h2>

      <ul className="list-disc pl-8 text-slate-600 mb-8 space-y-2">
        <li>Keep tenancy agreements safely stored.</li>
        <li>Retain invoices and receipts.</li>
        <li>Review your compliance responsibilities regularly.</li>
        <li>Keep important certificates together in one place.</li>
      </ul>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        How Can We Help?
      </h2>

      <p className="text-slate-600 mb-6">
        MTD For Landlords helps landlords understand their obligations,
        prepare for Making Tax Digital and stay organised with straightforward,
        practical support.
      </p>

      <a
        href="/#packages"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        View Our Packages
      </a>

    </main>
  );
}