import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const BrandDetails = ({ product }) => {
    const {_id, name, image} = product;

    return (
        <div>
            
        </div>
    );
};
BrandDetails.propTypes = {
    product: PropTypes.string.isRequired,
};
export default BrandDetails;