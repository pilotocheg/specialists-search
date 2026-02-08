const getEnding = (subjectsCount: number) => {
  const lastTwoDigits = subjectsCount % 100;
  // 11–14: тем (5 тем, 11 тем, 12 тем…)
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return '';
  }
  const lastDigit = lastTwoDigits % 10;
  // 1, 21, 31…: тема
  if (lastDigit === 1) {
    return 'а';
  }
  // 2–4, 22–24, 32–34…: темы
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'ы';
  }
  // 0, 5–20, 25–30…: тем
  return '';
};

export function getSubjectAdditionalText(subjectsCount: number) {
  return `и еще ${subjectsCount} тем${getEnding(subjectsCount)}`;
}
