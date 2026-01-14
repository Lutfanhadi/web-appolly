const ParentOurHappyCustomers = ({ img, name, position, comment }) => {
  return (
    <div className="bg-white rounded-xl flex flex-col items-center text-center py-5 px-3">
      <div className="rounded-full overflow-hidden">
        <img
          className="w-14 h-14 lg:w-24 lg:h-24"
          src={img}
          alt="img Our Happy Customers"
        />
      </div>
      <h1 className="font-semibold text-2xl pt-3 md:text-2xl">{name}</h1>
      <h2 className="font-medium text-[16px] md:text-sm">{position}</h2>
      <p className="font-normal text-[16px] pt-4 text-[#6C6C72]">{comment}</p>
    </div>
  );
};

export default ParentOurHappyCustomers;
