const CollectionOfButton = ({
  buttons,
  onClick,
  selected,
}: {
  buttons: string[];
  onClick: (selected: string) => void;
  selected: any;
}) => {
  return (
    <div className="flex gap-1 p-2 sm:p-1 justify-center flex-wrap rounded-lg w-fit mx-auto bg-[#272729]">
      {buttons.map((each, index) => (
        <button
          onClick={() => onClick(each)}
          key={index}
          className={`px-4 ${
            selected == each ? "bg-[#18181a]" : ""
          }  py-2 font-semibold text-sm  w-[120px] text-center text-nowrap rounded-lg text-white`}
        >
          {each}
        </button>
      ))}
    </div>
  );
};

export default CollectionOfButton;
