import "dotenv/config";

export default ({ config }) => {
  config.extra = {
    ...config.extra,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  };

  return config;
};
