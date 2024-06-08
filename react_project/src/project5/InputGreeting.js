const InputGreeting = ({ name, setName, greeting, setGreeting }) => {
  const handleChange = event => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setGreeting(`안녕하세요, ${name}!`);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="이름을 입력하세요"
      />
      <button onClick={handleClick}>greet~!</button>
      <h2>{greeting}</h2>
    </div>
  );
};

export default InputGreeting;
