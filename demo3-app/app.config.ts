import { ConfigContext } from '@expo/config';
import 'dotenv/config';

export default ({ config }: ConfigContext) => {
  config.extra = {
    ...config.extra,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  };

  return config;
};
