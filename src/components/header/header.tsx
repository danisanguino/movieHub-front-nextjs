import "./header.css"

export default function Header() {
    return (
        <main className="header-container">
            <img src="https://res.cloudinary.com/dqm1upnhh/image/upload/v1715183824/movie-hub-logo_vx2bju.png" height={"60px"} className="logo" />
            <div className="user">
                <h3>Hello dear ...NOMBRE AQUÍ</h3>
                <img src="https://res.cloudinary.com/dqm1upnhh/image/upload/v1710096699/17_Karol-G.jpg" className="img-profile"/>
            </div>
        </main>
    )
}