function SearchIcon({ className, size = 22, color = '#8690A0'}) {
  return (
    <svg
    className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 21C16.75 21 21 16.75 21 11.5C21 6.25 16.75 2 11.5 2C6.25 2 2 6.25 2 11.5C2 16.75 6.25 21 11.5 21Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22L20 20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export default SearchIcon;
