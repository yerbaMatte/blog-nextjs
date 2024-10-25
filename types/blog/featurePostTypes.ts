type CodeComponent = {
  __component: "features.code";
  code: string;
};

type ImageComponent = {
  __component: "features.image";
  image: {
    url: string;
  };
};

type RichAreaComponent = {
  __component: "features.richarea";
  content: string;
};

type UnknownComponent = {
  __component: string;
  [key: string]: any;
};

type FeatureComponent =
  | CodeComponent
  | ImageComponent
  | RichAreaComponent
  | UnknownComponent;

export type {
  CodeComponent,
  FeatureComponent,
  ImageComponent,
  RichAreaComponent,
  UnknownComponent,
};
