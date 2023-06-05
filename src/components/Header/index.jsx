import './styles.css'
import socialList from "../../mocks/socialBar.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faVials } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import theme from "../../utils/theme"

export function Header () {
    
    function getIcon (name) {
        switch (name) {
            case "Github":
                return faGithub
            case "Gmail":
                return faEnvelope
            case "LinkedIn":
                return faLinkedin
            case "YouTube":
                return faYoutube
            default:
                break;
        }
    }

    return(
        <header className='header-container'>
            <div className='header-content'>
                <div className='header-logo'>
                    <FontAwesomeIcon 
                        icon={faVials} 
                        fontSize={'1.5rem'}
                        color={theme.pastel_lilac}
                    />
                    <h3>Front End Challenge</h3>
                </div>
                <ul className='header-icons-container'>
                    {
                        socialList.map((item)=>(
                            <li className='header-icon-item' key={item.id}>
                                <a
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href={item.url}
                                >
                                <FontAwesomeIcon
                                    icon={getIcon(item.id)}
                                    fontSize={'1.5rem'}
                                    color='#a1a1a1'
                                />  
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}