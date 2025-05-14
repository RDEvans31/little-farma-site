import CardValue from "@/components/CardValue";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Users, Handshake, Star } from "lucide-react";

// Add this component definition at the top of the file, after the imports
const MissionBox = () => (
  <div className="bg-black bg-opacity-40 backdrop-blur-sm p-6 sm:p-8 rounded-lg text-white">
    <h3 className="text-xl font-semibold mb-4 flex items-center">
      <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
      Our Mission
    </h3>

    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li>More natural, regeneratively grown food to more people.</li>
      <li>More independence for small-scale farmers.</li>
      <li>Less than an hour to set up.</li>
    </ul>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Header/Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 px-8 py-6 flex justify-between items-center text-white">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sprout-icon lucide-sprout"
            >
              <path d="M7 20h10" />
              <path d="M10 20c5.5-2.5.8-6.4 3-10" />
              <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
              <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
            </svg>
            <span className="font-semibold text-xl">LittleFarma</span>
          </div>

          {/* Contact info */}
          <div className="text-sm mr-8 hidden md:block">
            <div></div>
            <div className="text-xs">rob@littlefarma.io</div>
          </div>
        </div>

        {/* Main Navigation
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-green-200">Home</Link>
          <Link href="/marketplace" className="text-white hover:text-green-200">Marketplace</Link>
          <Link href="/blog" className="text-white hover:text-green-200">Blog</Link>
          <Link href="/community" className="text-white hover:text-green-200">Community</Link>
        </nav> */}

        {/* Auth Buttons */}
        {/* <div className="flex items-center space-x-4">
          <Link href="/signup" className="text-white hover:text-green-200">Sign Up</Link>
          <Link href="/login" className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full flex items-center">
            <span className="mr-1">•</span> Log in
          </Link>
        </div> */}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/little-farma-hero-v2.webp')` }}
        >
          <div className="absolute inset-0 bg-opacity-40"></div>
        </div>

        <div className="relative h-full flex items-center pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Hero Left Content */}
              <div className="text-white">
                <div className="inline-block mb-3 sm:mb-4 px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                  <span className="text-xs sm:text-sm text-black">
                    Supporting Regenerative Agriculture
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Building loyal communities around regenerative-farming.
                </h1>

                <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
                  Empowering small-scale regenerative farms to better serve
                  their loyal customers, with independence from large
                  corporate systems.
                </p>

                <div className="lg:hidden block mb-8">
                  <MissionBox />
                </div>

                <Link
                  href="mailto:rob@littlefarma.io"
                  className="inline-flex items-center bg-green-400 hover:bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium"
                >
                  Contact Me
                  <svg
                    className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>

              {/* Hero Right Content - Mission Box */}
              <div className="hidden lg:block mb-8">
                <MissionBox />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gray-50 text-black text-center">
        <div className="max-w-7xl mx-auto">
          <div className="gap-8">
            <div className="flex flex-col items-center justify-center space-y-10">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-center">
                  Our Values
                </h2>
                <p className="text-gray-600 mb-4 text-center">
                  Everything we do is to further these values.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center">
                  <CardValue
                    title={
                      <p>
                        <span className="line-through">Extraction</span>
                        <br />
                        Regeneration
                      </p>
                    }
                    description="We only work with farmers that use regenerative practices that restore the land and ecosystem, rather than depleting them."
                  />
                  <CardValue
                    title={
                      <p>
                        <span className="line-through">Dependence</span>
                        <br />
                        Security
                      </p>
                    }
                    description="We empower communities to be self-sufficient and resilient, reducing reliance on supermarkets, mainstream food systems, and corporate oversight."
                  />
                  <CardValue
                    title={
                      <p>
                        <span className="line-through">Profit</span>
                        <br />
                        Product
                      </p>
                    }
                    description="We only work with farmers who care deeply about the quality of their produce."
                  />
                  <CardValue
                    title={
                      <p>
                        <span className="line-through">Isolation</span>
                        <br />
                        Community
                      </p>
                    }
                    description="We empower farmers to build loyal communities that support them with recurring subscriptions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h4 className="text-3xl md:text-4xl font-bold mb-6">
                Who&apos;s it for?
              </h4>
              <h4 className="text-xl md:text-2xl font-bold mb-6">
                Small-scale regenerative farmers that want to:
              </h4>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col items-start sm:items-center text-left sm:text-center">
                  <div className="mb-4 rounded-full bg-green-100 p-3"><ShoppingCart className="w-8 h-8 text-green-700" /></div>
                  <h3 className="font-bold text-lg mb-2">Provide Directly</h3>
                  <p className="text-gray-600">Sell directly to your customers, with independence from large corporate systems.</p>
                </div>
                <div className="flex flex-col items-start sm:items-center text-left sm:text-center">
                  <div className="mb-4 rounded-full bg-yellow-100 p-3"><Users className="w-8 h-8 text-yellow-700" /></div>
                  <h3 className="font-bold text-lg mb-2">Build Community</h3>
                  <p className="text-gray-600">Build loyal communities that support you with a recurring membership.</p>
                </div>
                <div className="flex flex-col items-start sm:items-center text-left sm:text-center">
                  <div className="mb-4 rounded-full bg-red-100 p-3"><Handshake className="w-8 h-8 text-red-700" /></div>
                  <h3 className="font-bold text-lg mb-2">Serve Better</h3>
                  <p className="text-gray-600">Serve your customers better with a smooth and easy sales process.</p>
                </div>
                <div className="flex flex-col items-start sm:items-center text-left sm:text-center">
                  <div className="mb-4 rounded-full bg-purple-100 p-3"><Star className="w-8 h-8 text-purple-700" /></div>
                  <h3 className="font-bold text-lg mb-2">Members-Only Features</h3>
                  <p className="text-gray-600">Provide a tight-knit group of loyal members with members-only features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h4 className="text-3xl md:text-4xl font-bold mb-6">
                Why Little Farma Exist:
              </h4>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-2xl md:text-2xl font-bold mb-6">
                &quot;Today, it is almost impossible for small farms to compete
                with industrial scale farms, even without taking the environment
                into consideration. The decline of the small family farm is
                evident everywhere.&quot;
              </h4>
              <p className="mb-8">
                - Rachel Ward, from the documentary{" "}
                <a
                  href="https://theregenerators.org/stories/letter-from-rachel-ward/"
                  className="italic text-green-600 underline"
                  target="_blank"
                >
                  Rachel&apos;s Farm
                </a>
              </p>

              <p className="text-gray-600 mb-8">
                If you care about your natural environment, your health, and
                your food security, small-scale regenerative farms are the{" "}
                <span className="font-bold italic">only</span> solution.
              </p>

              <p className="text-black mb-8">
                The future you want, lies in the hands of the little farmer.
              </p>

              <Link
                href="mailto:rob@littlefarma.io"
                className="inline-block border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-full text-gray-700 font-medium"
              >
                Drop me an email, I&apos;d love to hear your story.
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Currently powering section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-3xl md:text-4xl mb-8">Currently powering:</h4>

            <div className="flex flex-row gap-8 justify-evenly w-full">
              <div className="flex flex-col items-center">
                <a
                  href="https://www.onetreefarm.org"
                  className="text-blue-600 mb-4 hover:text-blue-700"
                >
                  One Tree Farm
                </a>
                <div className="flex justify-center">
                  <Image
                    src="/otf-logo.png"
                    width={100}
                    height={100}
                    alt="One Tree Farm"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://www.instagram.com/wildmindscommunity"
                  className="text-blue-600 mb-4 hover:text-blue-700"
                >
                  @wildmindscommunity
                </a>
                <div className="flex justify-center">
                  <Image
                    src="/wildmindscommunity.png"
                    width={100}
                    height={100}
                    alt="@wildmindscommunity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
