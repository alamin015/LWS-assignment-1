export default function HeroBtn({ content, bg }) {
  return (
    <li>
      <a
        href='https://links.tailgrids.com/play-download'
        className={`inline-flex items-center justify-center rounded-md ${bg} px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color`}
      >
        {content}
      </a>
    </li>
  );
}
