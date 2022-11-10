import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  classes?: string;
  children: string;
  primary?: boolean;
  shadow?: boolean;
  transparent?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': false,
    'bg-purple-500 text-white hover:bg-white hover:text-purple-500 transition-all duration-3': props.primary,
    'bg-transparent': props.transparent,
    'border border-2 border-purple-500 hover:bg-white text-purple-500': !props.primary,
    'shadowed': props.shadow
  });
    debugger

  return (
    <div className={props.classes ? props.classes : btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
            cursor: pointer;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
            border: 1px solid #0005;
          }

          .shadowed {
              box-shadow: 0 3px 6px #000A;
          }

          .transparent {
              background-color: transparent;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
