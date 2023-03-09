import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room, users }) => (
  <div className="infoBar">
    <div className="leftInnerContainerWrap">
      <h3>{room}</h3><div className="leftInnerContainer">
        <div className='online'></div>
      {users ? (
        <div>
            <div className="activeContainer">
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
            </div>
          </div>
        )
        : null
      }
      </div>
    </div>
    <div className="rightInnerContainer">
      <a href="/" className="close"></a>
    </div>
  </div>
);

export default InfoBar;