import { SystemContext } from 'context';
import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

// ============================== NAVIGATION SCROLL TO TOP ============================== //

const NavigationScroll = ({ children }) => {
  const { message, comments } = useContext(SystemContext);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    document.getElementById('texts').scrollTo({
      top: document.getElementById('texts').scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [location, message, comments]);

  return children || null;
};

NavigationScroll.propTypes = {
  children: PropTypes.node,
};

export default NavigationScroll;
