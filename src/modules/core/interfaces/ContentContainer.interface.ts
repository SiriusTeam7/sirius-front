export type ContainerVariant =
  | "single-content"
  | "img-content"
  | "icon-content";

interface BaseContainerProps {
  variant: ContainerVariant;
  className?: string;
  rightIcon?: boolean;
}

interface SingleContentContainerProps extends BaseContainerProps {
  variant: "single-content";
  children: React.ReactNode;
}

interface ImgContentContainerProps extends BaseContainerProps {
  variant: "img-content";
  image: React.ReactNode;
  children: React.ReactNode;
}

interface IconContentContainerProps extends BaseContainerProps {
  variant: "icon-content";
  iconText: string;
  iconClassName?: string;
  children: React.ReactNode;
}

export type ContentContainerProps =
  | SingleContentContainerProps
  | ImgContentContainerProps
  | IconContentContainerProps;
