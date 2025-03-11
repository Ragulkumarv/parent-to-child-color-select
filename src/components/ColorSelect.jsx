const ColorSelect = ({ colorChange }) => {
  const handleColorChange = (e) => {
    colorChange(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Color Code"
        className="border border-black"
        onChange={(e) => handleColorChange(e)}
      />
    </div>
  );
};

export default ColorSelect;
