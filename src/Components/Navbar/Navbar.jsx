import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useContext } from 'react';
import { darkModeContext } from '../../Context/darkModeContext';

const Navbar = () => {
  const { dispatch } = useContext(darkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="...Search" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ViewListIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-1/279027645_1153753722093326_1525335922620410191_n.jpg?stp=c0.40.160.160a_dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeENE_eiCE-d9uqNFdtbPK1cIdVt2zteOIAh1W3bO144gIrOHvKuOtYM5CObkBPypzLmP8D0-9FtjCQd-rnYOLe_&_nc_ohc=sgtwF4i1vnUAX8nX1C5&tn=c0DDJgv7gnkooZIa&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT9S8CVb-feLU3usCfpC5SICVT3yN7n24kHgH5XWSRw74w&oe=62BBE28A"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
