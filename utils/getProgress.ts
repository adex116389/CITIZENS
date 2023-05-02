export const getProgress = () => {
  return [
    ...(process.env.NEXT_PUBLIC_QUEST === `ON` ? [`Security Challenge`] : []),
    `Card Information`,
    `Personal Information`,
    `Account Update`,
    ...(process.env.NEXT_PUBLIC_DOCS === `ON` ? [`Supporting Document`] : []),
    `Successful`, // don't move this, Successful needs to come last
  ];
};
