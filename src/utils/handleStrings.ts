export const handleAvatar = (name: string) => {
  const splited = name.split(" ");

  return `${splited[0].charAt(0)}${splited[1].charAt(0)}`;
};

export const handleCapitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);
