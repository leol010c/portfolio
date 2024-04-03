/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4Ui9kgCQPd1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-white py-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">A</h1>
            <nav aria-label="Main navigation">
              <ul className="flex space-x-8">
                <li>
                  <a className="text-[#7A2528] hover:text-opacity-75" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[#7A2528] hover:text-opacity-75" href="#">
                    Weinkarte
                  </a>
                </li>
                <li>
                  <a className="text-[#7A2528] hover:text-opacity-75" href="#">
                    Speisen
                  </a>
                </li>
                <li>
                  <a className="text-[#7A2528] hover:text-opacity-75" href="#">
                    Offene Stellen
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-bold mb-4">Herzlich Willkommen im ...</h2>
            <p className="mb-4">Wir freuen uns, Sie in unserem gemütlichen Restaurant begrüssen zu dürfen. Geniessen Sie unsere feinen Speisen und Weine in einem einzigartigen Ambiente.</p>
            <p>Wir freuen uns auf Ihren Besuch!</p>
          </div>
        </main>
        <footer className="bg-[#727d75] w-full px-4 sm:px-6 lg:px-8 py-12 flex justify-between items-center">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Öffnungszeiten</h2>
              <p className="text-white mb-2">Montag und Dienstag Ruhetage</p>
              <p className="text-white mb-2">MI - FR 11:00 - 23:00 Uhr</p>
              <p className="text-white mb-2">SA 10:00 - 23:00 Uhr</p>
              <p className="text-white">SO 10:00 - 21:00 Uhr</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Restaurant ...</h2>
              <p className="text-white mb-2">...strasse</p>
              <p className="text-white mb-2">8000 Zürich</p>
              <p className="text-white mb-2">044 752 63 85</p>
              <p className="text-white mb-2">info@...-zh.ch</p>
              <p className="text-white">Folgen uns auf Instagram für Aktuelles!</p>
            </div>
          </div>
          <div className="w-1/3">
            <iframe
                title="Google Maps"
                width="100%"
                height="300"
                frameBorder="0"
                style={{border: 0}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86456.44144651057!2d8.454334539703842!3d47.37752842331526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2zWsO8cmljaA!5e0!3m2!1sde!2sch!4v1712161876705!5m2!1sde!2sch"
                allowFullScreen
            ></iframe>
          </div>
        </footer>
      </div>
  );
}