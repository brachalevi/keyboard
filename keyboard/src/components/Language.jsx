function Language(props) {
  const { english, hebrew } = props.languages;
  function handleLanguage(selectedLanguage) {
    props.onLanguageChange(selectedLanguage);
  }
  return (
    <>
      <button onClick={() => handleLanguage(english)}>english</button>
      <button onClick={() => handleLanguage(hebrew)}>עברית </button>
    </>
  );
}

export default Language;
