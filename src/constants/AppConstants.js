
export const GOOGLE_SIGN_IN_PATH = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_BASE_PATH}/onboarding/google`;
export const FACEBOOK_SIGN_IN_PATH = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_BASE_PATH}/onboarding/facebook`;
export const TWITTER_SIGN_IN_PATH = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_BASE_PATH}/onboarding/microsoft`;

export const GOOGLE_MEET_PATH = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_BASE_PATH}/onboarding/google-meet`;
export const ZOOM_PATH = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_BASE_PATH}/onboarding/zoom`;

export const QuestionTypes = {
  starrating: "Star Rating",
  scaling: "Scaling",
  smileemoji: "Smile Emoji",
  yesorno: "Yes/No",
  thumbs: "Thumbs",
};

export const getQuestionTypes = () => {
  const questionTypes = [];
  Object.keys(QuestionTypes).forEach((key) => {
    questionTypes.push({
      value: key,
      label: QuestionTypes[key],
    });
    // questionTypes.push(key);
  });
  return questionTypes;
};


export const MAX_QUESTIONS_ALLOWED = 5;

export const CONNECTION_TYPES = {
  GOOGLE_MEET: "google-meet",
  ZOOM: "zoom",
  TEAMS: "teams",
};
