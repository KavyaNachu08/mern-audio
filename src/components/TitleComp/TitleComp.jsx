import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TitleComp.scss';
import { Link, useNavigate } from "react-router-dom";

function TitleComp(props){
    const navigate = useNavigate();
    let leftIconLabel = props.leftIconLabel;
    let rightIconLabel = props.rightIconLabel;
    let leftIcon = props.leftIcon;
    let rightIcon = props.rightIcon;
    let state = props.state;
    let title = props.title;
    let rightPath = props.rightPath;
    let leftPath = props.leftPath;

    return(
        <div className='title'>
            <ul className='title__list'>
                <li><Link onClick={() => navigate(-1)} aria-label={leftIconLabel} title={leftIconLabel}><FontAwesomeIcon className='title__list__icon' icon={leftIcon} /></Link></li>
                <li className={`title__list__text ${state}`}>{title}</li>
                <li><Link to={rightPath} aria-label={rightIconLabel} title={rightIconLabel}><FontAwesomeIcon className='title__list__icon' icon={rightIcon} /></Link></li>
            </ul>
        </div>
    )
}

export default TitleComp;