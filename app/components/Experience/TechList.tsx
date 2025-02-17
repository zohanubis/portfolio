const TechList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-2 font-Ovo">
    <ul className="list-none list-inside text-sm mt-1">
      {items.map((tech, i) => (
        <li key={`${title}-${i}`} className="opacity-80">⚡ {tech}</li>
      ))}
    </ul>
  </div>
);

export default TechList;
