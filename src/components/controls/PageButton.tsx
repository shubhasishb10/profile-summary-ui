type PageButtonProps = {
  title: string;
  type: "submit" | "reset" | "button" | undefined;
  others?: string[];
};

export default function PageButton({
  title,
  type,
  ...others
}: PageButtonProps) {
  return (
    <div>
      <button
        type={type}
        className=" py-2 px-6 shadow-xl rounded-lg bg-sky-200 text-sky-800 focus:outline"
        {...others}
      >
        {title}
      </button>
    </div>
  );
}
