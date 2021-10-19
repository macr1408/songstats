import Card from "../Card"
import CardWithBackground from "../CardWithBackground"
import ExplicitLabel from "../ExplicitLabel"
import FactsLink from "../FactsLink"
import Popularity from "../Popularity"
import VideoLink from "../VideoLink"
import LyricsLink from "../LyricsLink"

export default function NowPlayingCard({ data }) {
    if (!data || data.error || (Array.isArray(data) && !data.length)) {
        return <Card>Could not retrieve current playing song. Are you playing any song?</Card>
    }
    const { name, artists, album, explicit, popularity } = data.item
    const albumImg = album.images.sort((img1, img2) => img1.height < img2.heigh)[0]

    return (
        <CardWithBackground background={albumImg.url} minHeight="80vh">
            <p className="text-2xl md:text-4xl text-shadow">{name}</p>
            <p className="text-xl md:text-2xl text-shadow">{artists.map(artist => artist.name).join(', ')}</p>
            <p className="text-shadow">{album.name}</p>
            <div className="absolute bottom-0 flex flex-wrap items-baseline w-full">
                <div className="w-full mb-4 md:w-2/12 md:m-0">
                    <ExplicitLabel explicit={explicit} className="mr-10" />
                </div>
                <div className="w-full md:w-10/12 flex items-center justify-end">
                    <FactsLink song={name} className="mr-2" />
                    <VideoLink song={name} artist={artists[0].name} className="mr-2" />
                    <LyricsLink song={name} artist={artists[0].name} className="mr-6" />
                    <Popularity popularity={popularity} />
                </div>
            </div>
        </CardWithBackground>
    )
}
