function extractLanguageList(repositories) {
  const languages = [
    // Set 参考 https://stackoverflow.com/a/43665883/7218912
    ...new Set(repositories.map(item => item.mainLanguage))
  ];
  const languageList = languages.map(language => {
    return {
      name: language,
      count: repositories.filter(
        repository => repository.mainLanguage === language
      ).length
    };
  });
  languageList.sort((i, j) => j.count - i.count);
  return languageList;
}

export default extractLanguageList;
