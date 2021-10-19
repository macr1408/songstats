export default function Popularity({ popularity, className }) {
    return (
        <div className={`text-center inline-block ${className ? className : ''}`}>
            <div className="flex items-baseline justify-center">
                <div className={`w-2 h-2 bg-gray-300 mr-1 ${popularity > 10 ? 'bg-green-600' : ''}`}></div>
                <div className={`w-2 h-3 bg-gray-300 mr-1 ${popularity > 25 ? 'bg-green-500' : ''}`}></div>
                <div className={`w-2 h-4 bg-gray-300 mr-1 ${popularity > 50 ? 'bg-green-400' : ''}`}></div>
                <div className={`w-2 h-5 bg-gray-300 mr-1 ${popularity > 70 ? 'bg-green-400' : ''}`}></div>
                <div className={`w-2 h-6 bg-gray-300 mr-1 ${popularity > 80 ? 'bg-green-300' : ''}`}></div>
            </div>
            <p className="text-sm text-gray-200">Popularity</p>
        </div>
    )
}
