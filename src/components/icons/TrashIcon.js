function TrachIcon({size = '18px' , color = 'red'}) {
  return (
    <svg
      width= {size}
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.25 5.48177C16.1975 5.17927 13.1267 5.02344 10.065 5.02344C8.25 5.02344 6.435 5.1151 4.62 5.29844L2.75 5.48177"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.79175 4.55575L7.99341 3.35492C8.14008 2.48409 8.25008 1.83325 9.79925 1.83325H12.2009C13.7501 1.83325 13.8692 2.52075 14.0067 3.36409L14.2084 4.55575"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.2793 8.37842L16.6834 17.6092C16.5826 19.0484 16.5001 20.1667 13.9426 20.1667H8.05761C5.50011 20.1667 5.41761 19.0484 5.31678 17.6092L4.72095 8.37842"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.46924 15.125H12.5217"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.70825 11.4583H13.2916"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default TrachIcon;
