
import PropTypes from 'prop-types'

const Link = ({route}) => {
    return (
        <div>
            <li className="md:mr-12 md:text-2xl md:mb-5 md:font-semibold text-xl py-1 font-semibold px-2">
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

Link.propTypes={
    route : PropTypes.object.isRequired
}

export default Link;