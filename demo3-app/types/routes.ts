import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum Routes {
  'Home' = 'Home'
}

export type RootStackParamList = {
  [Routes.Home]: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, Routes.Home>;
