const EachAboutMeComponent = ({
  headerText,
  children,
}: {
  headerText: string;
  children: React.ReactNode;
}) => {
  return (
    <div className=" mb-9">
      {headerText && (
        <h1 className="font-semibold text-2xl mb-4">{headerText}</h1>
      )}
      {children}
    </div>
  );
};

export default EachAboutMeComponent;
