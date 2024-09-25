export function WelcomeCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border-4 border-green-600">
        <div className="bg-green-600 text-center py-4 px-6">
          <h1 className="text-white text-3xl font-bold">Hello World Nagorik</h1>
        </div>
        <div className="p-6 bg-white text-center">
          <p className="text-gray-800 text-lg font-semibold mb-4">
            By the People of Bangladesh
          </p>
          <p className="text-gray-800 text-lg font-semibold">
            For the People of Bangladesh
          </p>
        </div>
        <div className="bg-red-600 text-center py-3">
          <p className="text-white font-medium">Welcome to Bangladesh 2.0 🇧🇩</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
