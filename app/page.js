export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <img
          src="/logo.png"
          alt="MTD For Landlords"
          className="mx-auto mb-8 max-w-lg w-full"
        />

        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Making Tax Digital For Landlords Made Simple
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
          Affordable landlord MTD support that helps take the stress and headaches away.
        </p>
      <p className="text-2xl font-bold text-green-700 mb-8">
  From just £15 per month
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a
  href="#packages"
  className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold"
>
  Compare Packages
</a>
<a
  href="#register-interest"
  className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold"
>
  Register Interest
</a>
</div>
      </section>
<section className="bg-slate-50 py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
      Will Making Tax Digital Affect You?
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          April 2026
        </h3>
        <p className="text-slate-700">
          Rental income over £50,000
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          April 2027
        </h3>
        <p className="text-slate-700">
          Rental income over £30,000
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          April 2028
        </h3>
        <p className="text-slate-700">
          Rental income over £20,000
        </p>
      </div>

    </div>

  </div>
</section>
<section id="packages" className="py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-10">
      Our Packages
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="border rounded-xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900">
          Essentials
        </h3>

        <p className="text-green-700 font-bold mt-3">
          From £15/month
        </p>

        <p className="font-semibold mt-5">
          Stay Compliant
        </p>

        <p className="text-slate-600 mt-4">
          Ideal for organised landlords who want help staying on top of Making Tax Digital requirements.
        </p>
      </div>

      <div className="border rounded-xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900">
          Professional ⭐
        </h3>

        <p className="text-green-700 font-bold mt-3">
          From £29/month
        </p>

        <p className="font-semibold mt-5">
          Get Set Up Properly
        </p>

        <p className="text-slate-600 mt-4">
          Help with registration, setup and ongoing quarterly submissions.
        </p>
      </div>

      <div className="border rounded-xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900">
          Premium
        </h3>

        <p className="text-green-700 font-bold mt-3">
          From £50/month
        </p>

        <p className="font-semibold mt-5">
          Enhanced Support
        </p>

        <p className="text-slate-600 mt-4">
          A more comprehensive service tailored to landlords who want additional assistance.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-blue-900 text-white py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-bold mb-6">
      Our Promise
    </h2>

    <p className="text-2xl font-semibold leading-relaxed">
      You rent out the properties.
      <br />
      We'll make the MTD burden go away.
    </p>

  </div>
</section>
<section className="py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-10">
      Why Landlords Choose Us
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="border rounded-xl p-6 text-center shadow-sm">
        <h3 className="font-bold text-lg mb-3">
          Plain English Support
        </h3>

        <p className="text-slate-600">
          No jargon, no technical language, just straightforward help.
        </p>
      </div>

      <div className="border rounded-xl p-6 text-center shadow-sm">
        <h3 className="font-bold text-lg mb-3">
          Affordable Pricing
        </h3>

        <p className="text-slate-600">
          Monthly plans designed specifically for landlords.
        </p>
      </div>

      <div className="border rounded-xl p-6 text-center shadow-sm">
        <h3 className="font-bold text-lg mb-3">
          Landlord Focused
        </h3>

        <p className="text-slate-600">
          Built around landlord Making Tax Digital requirements.
        </p>
      </div>

      <div className="border rounded-xl p-6 text-center shadow-sm">
        <h3 className="font-bold text-lg mb-3">
          Ongoing Support
        </h3>

        <p className="text-slate-600">
          We're here when you need us throughout your MTD journey.
        </p>
      </div>

    </div>

  </div>
</section>
<section id="register-interest" className="bg-slate-50 py-16">
  <div className="max-w-3xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-4">
      Register Your Interest
    </h2>

    <p className="text-center text-slate-600 mb-10">
      Interested in affordable landlord MTD support? Register your interest below and we'll keep you updated as our service launches.
    </p>

<form
  action="https://formspree.io/f/xkoawdeb"
  method="POST"
  className="space-y-4"
>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full border rounded-lg p-4"
        autoFocus
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email Address"
        className="w-full border rounded-lg p-4"
      />

      <select
      name="properties"
        className="w-full border rounded-lg p-4"
      >
        <option value="">Number of Rental Properties</option>
        <option>1 Property</option>
        <option>2-5 Properties</option>
        <option>6-10 Properties</option>
        <option>11+ Properties</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold"
      >
        Register Interest
      </button>
<p className="text-center text-slate-600 mt-6">
  Prefer to email us directly?
  <br />
  <a
    href="mailto:hello@mtd-for-landlords.co.uk"
    className="text-blue-900 font-semibold"
  >
    hello@mtd-for-landlords.co.uk
  </a>
</p>
    </form>

  </div>
</section>
<footer className="bg-slate-900 text-white py-10">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <p className="font-semibold">
      hello@mtd-for-landlords.co.uk
    </p>

    <p className="text-slate-400 mt-3">
      Making Tax Digital support for UK landlords.
    </p>

    <p className="text-slate-500 text-sm mt-6">
      Privacy Policy | Terms & Conditions
    </p>

  </div>
</footer>
    </main>
  );
}