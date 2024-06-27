export function App() {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src="https://unavatar.io/albertomfdev"
                    alt="Avatar Mio"
                />
                <div className="tw-followCard-info">
                    <strong> Alberto Morales Flores</strong>
                    <span
                     className="tw-followCard-infoUserName">
                        @albertomfdev
                    </span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}   