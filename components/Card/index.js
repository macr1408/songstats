import styles from './card.module.css'

export default function Card(props) {
    const { background, minHeight } = props
    return (
        <>
            <div
                className={`bg-gray-main shadow-lg rounded-xl p-4 z-10 overflow-hidden ${styles.card}`}
                style={minHeight && { minHeight }}
            >
                {props.children}
            </div>
            <style>
                {background &&
                    `.${styles.card}{
                        position:relative
                    }
                    .${styles.card}::after{
                        content: "";
                        position: absolute;
                        top: 0; left: 0;
                        width: 100%; height: 100%;
                        background-image: url(${background});
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                        filter: blur(2px);
                        opacity: 0.5;
                        z-index: 1
                    }`
                }</style>
        </>
    )
}
