type TitleProps = {
  text: string;
};

export function Title({ text }: TitleProps) {
  return <h2 className="text-2xl pb-2.5">{text}</h2>;
}
