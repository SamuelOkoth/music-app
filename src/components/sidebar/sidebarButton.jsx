
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./sidebarButton.css";

export default function SidebarButton(props) {
  const { to } = props;

  return (
    <div>
      <Link to={to}>
        {props.to}
      </Link>
    </div>
  );
}

SidebarButton.propTypes = {
  to: PropTypes.string.isRequired,
};
