export default function CardWithBackground(props) {
    const { background, minHeight } = props
    return (
        <div
            className={`bg-gray-main shadow-lg rounded-xl p-4 overflow-hidden relative flex`}
            style={minHeight && { minHeight }}
        >
            <div className="absolute top-0 left-0 w-full h-full opacity-80" style={{
                backgroundImage: `url('${background}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'blur(3px)'
            }}>
            </div>
            <div className="relative z-10 w-full">
                {props.children}
            </div>
        </div>
    )
}
