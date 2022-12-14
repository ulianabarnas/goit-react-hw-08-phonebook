import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export default function Loader({ color = '#0da3a3', height = '50' }) {
  return (
    <>
      <ThreeDots
        height={height}
        width="70"
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClassName=""
        visible={true}
      />
    </>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
};
