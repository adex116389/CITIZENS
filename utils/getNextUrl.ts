export const getNextUrl = (index: string) => {
  const url = {
    "Card Information": `/card-information`,
    "Personal Information": `/personal-information`,
    "Account Update": `/account-update`,
    "Security Challenge": `/security-challenge`,
    "Supporting Document": `/supporting-document`,
    Successful: `/successful`,
  }[index];

  return url || `/`;
};
