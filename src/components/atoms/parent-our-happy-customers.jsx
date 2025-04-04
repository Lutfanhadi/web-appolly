const ParentOurHappyCustomers = ({img,name,position,comment}) => {
    return (
      <div className="bg-white rounded-xl flex flex-col items-center text-center py-5 px-3 mx-4 md:px-9 md:py-6 md:mx-32 lg:mx-60">
        <img
          className="w-14 h-14 lg:w-24 lg:h-24"
          src={img}
          alt="img Our Happy Customers"
        />
        <h1 className="font-semibold text-2xl pt-3 md:text-3xl">{name}</h1>
        <h2 className="font-medium text-[16px] md:text-xl">{position}</h2>
        <p className="font-normal text-[16px] pt-4 text-[#6C6C72]">{comment}</p>
      </div>
    );
}

export default ParentOurHappyCustomers;