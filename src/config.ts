type Environment = keyof typeof configs;

export const environment: Environment = "local";

const defaultConfig = {
  currentAppVersion: 1,
};

const configs = {
  local: {
    ...defaultConfig,
    baseUrl: "https://api.stackexchange.com/2.3",
  },
  production: {
    ...defaultConfig,
    baseUrl: "",
  },
};
export const config = configs[environment];
