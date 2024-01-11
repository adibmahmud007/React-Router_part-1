import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className='bg-blue-500 rounded-lg p-4 flex flex-col text-white my-4 shadow-lg'>
           <h2 className='text-center'>
            <span className='text-7xl font-extrabold' >{price}</span>
            <span className='text-3xl'>/month</span>
            </h2>
            <h3 className='text-3xl text-center my-8 '>{name}</h3>
            
                <div className='flex-grow '>
                {
                    features.map(feature=> <Feature key={feature.id} feature={feature}></Feature>)
                }
                </div>
                 <button className="text-white bg-green-600 text-center text-xl w-full rounded-xl font-semibold p-2 mt-6 hover:bg-green-800">Buy now</button>
        </div>
    );
};
PriceOption.propTypes={
    option: PropTypes.object
}
export default PriceOption;