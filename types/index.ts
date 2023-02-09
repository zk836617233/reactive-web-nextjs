interface HeroType {
  title: string;
  sceneImg: string;
  boyImg: string;
  girlImg: string;
  truckImg: string;
  btnText: string;
}

export interface headerDataType {
  btnText: string;
  logoImgV1: string;
  logoImgV2: string;
}

export interface NavDataType {
  name: string;
  href: string;
}

export interface HeroPropsType {
  heroData: HeroType;
  headerData: headerDataType;
  navData: NavDataType[];
}

export interface aboutPropsType {
  boyImg: string;
  subtitle: string;
  text: string;
  title: string;
}

export interface HowDataType {
  girlImg: string;
  subtitle: string;
  title: string;
}
