import './styles.css'

export function Footer () {
    return(
        <footer className='footer-container'>
            <div></div>
            <span>©{new Date().getFullYear()} Made with &#10024; by  {" "}
                <a
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={"https://juliegarcia.netlify.app/"}
                >
                @Julie
                </a>
            </span>
        </footer>
    )
}

