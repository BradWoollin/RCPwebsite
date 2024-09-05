import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Perspectives - Fitness, Health, Nutrition, and Watches</title>
      </Head>
      <div className="bg-gray-100 font-sans">
        <header className="bg-green-900 text-white shadow-lg">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="text-xl font-bold">Perspectives</div>
            <div>
              <Link href="/" className="text-white hover:text-blue-200 px-3 py-2">Home</Link>
              <Link href="/episodes" className="text-white hover:text-blue-200 px-3 py-2">Episodes</Link>
              <Link href="/about" className="text-white hover:text-blue-200 px-3 py-2">About</Link>
              <Link href="/" className="text-white hover:text-blue-200 px-3 py-2">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to Perspectives</h1>
            <p className="text-xl text-gray-700">Your go-to podcast for fitness, health, nutrition, and the latest in wearable technology.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Latest Episodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">The Ultimate HIIT Workout</h3>
                <p className="text-gray-600 mb-4">Discover the most effective high-intensity interval training techniques.</p>
                <Link href="/" className="text-blue-600 hover:text-blue-800">Listen now →</Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Nutrition Myths Debunked</h3>
                <p className="text-gray-600 mb-4">We separate fact from fiction in the world of nutrition and dieting.</p>
                <Link href="/" className="text-blue-600 hover:text-blue-800">Listen now →</Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Smartwatches: A Fitness Revolution</h3>
                <p className="text-gray-600 mb-4">Explore how smartwatches are changing the fitness landscape.</p>
                <Link href="https://open.spotify.com/show/35ZQq8VFt5PgsIqRT53Gmq" className="text-blue-600 hover:text-blue-800">Listen now →</Link>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Subscribe</h2>
            <form className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="you@example.com" required />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Subscribe to Our Newsletter</button>
            </form>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">FitTech Talk</h3>
                <p className="text-gray-400">Empowering your fitness journey through technology and knowledge.</p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                <ul className="text-gray-400">
                  <li><a href="#" className="hover:text-white">Home</a></li>
                  <li><a href="#" className="hover:text-white">Episodes</a></li>
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06h.08zm0 1.67c-2.462 0-2.758.01-3.724.054-.957.043-1.477.203-1.823.337-.46.179-.789.392-1.138.741a3.23 3.23 0 00-.741 1.138c-.134.346-.294.866-.337 1.823-.044.966-.054 1.262-.054 3.724v.08c0 2.462.01 2.758.054 3.724.043.957.203 1.477.337 1.823.179.46.392.789.741 1.138.346.134.866.294 1.823.337.966.044 1.262.054 3.724.054h.08c2.462 0 2.758-.01 3.724-.054.957-.043 1.477-.203 1.823-.337.46-.179.789-.392 1.138-.741.346-.346.607-.678.741-1.138.134-.346.294-.866.337-1.823.044-.966.054-1.262.054-3.724v-.08c0-2.462-.01-2.758-.054-3.724-.043-.957-.203-1.477-.337-1.823a3.23 3.23 0 00-.741-1.138 3.23 3.23 0 00-1.138-.741c-.346-.134-.866-.294-1.823-.337-.966-.044-1.262-.054-3.724-.054h-.08zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 1.67a4.492 4.492 0 110 8.984 4.492 4.492 0 010-8.984zm6.406-1.09a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
