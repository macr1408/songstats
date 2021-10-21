export default function Card(props) {
    const { minHeight } = props
    return (
        <div
            className={`bg-gray-main shadow-lg rounded-xl p-4 overflow-hidden relative flex`}
            style={minHeight && { minHeight }}
        >
            <div className="relative z-10 w-full">
                {props.children}
            </div>
        </div>
    )
}
