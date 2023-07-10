export const SideBarOption = ({ id, img, title, alt, handleSidebar }) => {
  return (
    <button
      className="flex flex-col items-center hover:bg-slate-200"
      onClick={(e) => handleSidebar(id, 2)}
    >
      <img className="object-cover h-14 w-14" src={img} alt={alt} />
      <p>{title}</p>
    </button>
  );
};
