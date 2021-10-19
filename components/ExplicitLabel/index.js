export default function ExplicitLabel({ explicit, className }) {
    return (
        <p className={`border-4 font-bold px-2 py-1 text-sm inline-block ${className} ${explicit ? 'border-red-700 rounded-sm bg-red-700 opacity-80' : 'opacity-50'}`}>EXPLICIT</p>
    )
}
