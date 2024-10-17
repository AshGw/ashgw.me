type HamburgerButtonProps = {
  isOpened: boolean;
  onClick: () => void;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpened,
  onClick,
}) => {
  return (
    <button
      aria-label="Toggle navigation bar menu"
      className={`p-0 flex bg-transparent cursor-pointer ${isOpened ? 'ham-opened' : ''}`}
      onClick={onClick}
    >
      <svg width="40" height="40" color="white" viewBox="0 0 100 100">
        <path
          className="ham-line ham-line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className="ham-line ham-line2" d="M 20,50 H 80" />
        <path
          className="ham-line ham-line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
  );
};

export default HamburgerButton;
