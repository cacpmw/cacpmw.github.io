function ExperienceItem({ title, company, duration, location, children }) {
  return (
    <div className="space-y-2">
      <div className="flex flex-col ">
        <span>
          <strong>{title}</strong>
        </span>
        <span>
          <em>{company}</em>
        </span>
        <span>
          <em>{duration}</em>
        </span>
        <span>{location}</span>
      </div>

      <div>{children}</div>
    </div>
  );
}

export default ExperienceItem;
