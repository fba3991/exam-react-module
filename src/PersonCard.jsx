const PersonCard = ({
  id,
  name,
  occupation,
  sex,
  popularity,
  works,
  imagePath,
}) => {
  return (
    <div>
      <div key={id}>
        <h4> {name}</h4>
        <h4> {occupation}</h4>
        <h4> {sex}</h4>
        <h4> {popularity}</h4>
        <h4> {works}</h4>
        <img src={imagePath} alt="" />
      </div>
    </div>
  );
};

export default PersonCard;
