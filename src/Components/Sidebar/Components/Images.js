export const Images = ({ data }) => {
  return data.items.map((img) => (
    <article key={img.name} className="flex flex-col items-center">
      <img
        className="object-cover h-36 w-36"
        src={img.img}
        alt={`imagen de un tipo de ${img.name}`}
      />
      <h5 className="ml-1 text-sm font-light text-slate-500  ">{img.name}</h5>
    </article>
  ));
};
