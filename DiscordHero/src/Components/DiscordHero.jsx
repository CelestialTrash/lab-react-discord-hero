import discordLogo from '../assets/discord-logo-white.png'
import hamburgerButton from '../assets/menu-icon.png'
import imageBackground from '../assets/discord-background.png'
import './DiscordHero.css'



function DiscordHero() {
    return (
        <div id="hero-section">
            <section id="navbar">
                <div className='logo-container'>
                    <img className='logo' src={discordLogo} alt="" />
                </div>
                <div className='menu-button'>
                    <img src={hamburgerButton} alt="" />
                </div>
            </section>
            <section id='heading-section'>
                <h1 className='title'>IMAGINE <br />A PLACE...</h1>
            </section>


            <div className='paragraph-container'>
                <p>...where you can belong to a school club, a gaming group, or a <br />
                    worldwide art community. Where just you and a handful of <br />
                    friends can spend time together. A place that makes it easy to <br />
                    talk every day and hang out more often.</p>
            </div>

            <div id='button-download-container'>
                <button className='button-download'> Download for Mac</button>
            </div>

            <div id='button-open-discord-container'>
                <button className='button-open-discord'>Open Discord in your Browser</button>
            </div>
            <img className='background-image' src={imageBackground} alt="" />
        </div>
    )
}

export default DiscordHero
