export default function VideoLink({ song, artist, className }) {
    const videoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(song)}+${encodeURIComponent(artist)}`
    return (
        <a href={videoUrl} target="_blank" className={`border-4 inline-block font-bold px-2 py-1 text-sm border-green-700 rounded-sm bg-green-700 ${className}`}>VIDEO</a>
    )
}
