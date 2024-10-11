type PageButtonProps = {
  title: string;
  type: "submit" | "reset" | "button" | undefined;
  onclick?: () => {};
  className?: string
};

export default function PageButton({
  title,
  type,
  onclick,
  className
}: PageButtonProps) {

  const classes = " py-2 px-6 m-5 w-[10rem] shadow-xl rounded-lg " + className

  return (
    <div>
      <button
        type={type}
        className={classes}
        onClick={onclick}
      >
        {title}
      </button>
    </div>
  );
}
