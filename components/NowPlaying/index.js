import Card from "../Card"

export default function NowPlayingCard({ data }) {
    if (!data || data.error) {
        return null
    }
    const { name, artists, album, explicit } = data.item
    const albumImg = album.images.sort((img1, img2) => img1.height < img2.heigh)[0]

    return (
        <Card background={albumImg.url} minHeight="400px">
            <p className="text-2xl md:text-4xl z-10 relative">{name}</p>
            <p className="text-xl md:text-2xl">{artists.map(artist => artist.name).join(', ')}</p>
            <p>{album.name}</p>
            <p className={`absolute bottom-2 border-2 px-2 py-1 text-sm ${explicit ? 'border-red-700 z-10 rounded-sm' : ''}`}>EXPLICIT</p>
        </Card>
    )
}
