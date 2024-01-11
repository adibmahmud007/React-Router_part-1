
import PropTypes from 'prop-types'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center text-center md:text-xl'><BsFillArrowUpRightCircleFill className='text-green-400 mr-2'/> {feature}</p>
        </div>
    );
};
Feature.propTypes={
    feature: PropTypes.string
}
export default Feature;