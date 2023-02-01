import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer(){
    return(
        <div className="footer">
            <span className='social'><a href=''><FacebookIcon fontSize='medium'/></a></span>
            <span className='social'><a href='https://github.com/itssouray'><GitHubIcon fontSize='medium'/></a></span>
            <span className='social'><a href='www.linkedin.com/in/sourav-gupta-70b83a20b'><LinkedInIcon fontSize='medium'/></a></span>
            <span className='social'><a href=''><InstagramIcon fontSize='medium'/></a></span>
        </div>
    )
}


export default Footer;