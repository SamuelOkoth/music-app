
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import "./sidebarButton.css";
import { IconContext } from 'react-icons';

export default function SidebarButton(props) {
  const { to } = props;
  const location = useLocation();

  const isActive = location.pathname === to;
  const btnClass = isActive ? "btn-body active" : "btn-body";

  return (
    <Link to={to}>
      {/* {props.to} */}
      <div className={btnClass}>
        <IconContext.Provider className="btn-icon" value={{ size: '24px' }}>
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}

SidebarButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
