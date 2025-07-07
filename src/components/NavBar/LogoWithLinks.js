function LogoWithLinksa({ listLinks }) {
  return (
    <div className="links items-center flex gap-3">
      {/* logo  */}
      <div className="logo  ">
        <img className="w-[45px]" alt="logo" src="image.png" />
      </div>
      {/* links  */}
      <ul className="flex gap-4">{listLinks}</ul>
    </div>
  );
}
export default LogoWithLinksa;
