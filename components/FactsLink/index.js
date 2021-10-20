export default function FactsLink({ song, className }) {
    let sanitizedSong = song.toLowerCase()
    sanitizedSong = sanitizedSong.replace(/\s/g, '-')
    sanitizedSong = sanitizedSong.replace(/(\'|\"|\(|\)|\:)/g, '')
    sanitizedSong = sanitizedSong.replace(/\-+\d+-*remaster[ed]*/g, '')
    sanitizedSong = sanitizedSong.replace(/---/g, '-')
    const factsUrl = `https://www.songfacts.com/search/songs/${sanitizedSong}`
    return (
        <a href={factsUrl} target="_blank" className={`border-4 hover:bg-green-600 hover:border-green-600 transition-all duration-500 inline-block font-bold px-2 py-1 text-sm border-green-700 rounded-sm bg-green-700 ${className}`}>FACTS</a>
    )
}
