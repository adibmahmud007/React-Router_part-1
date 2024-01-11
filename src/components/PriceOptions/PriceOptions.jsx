import PriceOption from "../PriceOption.jsx/PriceOption";


const PriceOptions = () => {
  const priceOptions = [

    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Basic fitness classes",
        "Limited gym hours",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Access to all gym facilities",
        "Unlimited fitness classes",
        "Extended gym hours",
        "Personal trainer sessions (1 per month)",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: 79.99,
      features: [
        "Access for two adults and two children",
        "All Premium Membership features",
        "Family fitness classes",
      ],
    },
    {
      id: 4,
      name: "Student Membership",
      price: 19.99,
      features: [
        "Valid student ID required",
        "Access to cardio equipment",
        "Basic fitness classes",
      ],
    },
  ];


  return (
    <div className="p-10">
      <h2 className="text-5xl mb-4">Best prices in the Town</h2>
      <div className="md:grid md:grid-cols-3 md:gap-5">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
     
    </div>
  );
};

export default PriceOptions;