const TrailingButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex mt-10 justify-center">
      <button
        onClick={() => onClick()}
        className="px-7 p-2 w-fit text-black rounded-lg bg-white font-medium"
      >
        {text}
      </button>
    </div>
  );
};

export default TrailingButton;
