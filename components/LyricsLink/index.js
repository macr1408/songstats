export default function LyricsLink({ song, artist, className }) {
    const lyricsUrl = `https://genius.com/search?q=${encodeURIComponent(song)}+${encodeURIComponent(artist)}`
    return (
        <a href={lyricsUrl} target="_blank" className={`border-4 inline-block font-bold px-2 py-1 text-sm border-green-700 rounded-sm bg-green-700 ${className}`}>LYRICS</a>
    )
}
