export default function Navbar() {
  return (
  <>
  <div className="flex justify-between p-4 ml-30 mr-30 border-b-1  border-orange-300">

    <div className="text-5xl text-blue-500 mt-2">
logo
</div>

<div className="text-[15px] font-bold text-gray-700 mt-5">
<ul className="cursor-pointer">
    <li className="inline p-4">Home  <span className="  ml-4 text-orange-300"> |</span></li>
    <li className="inline p-4">Services   <span className=" ml-4  text-orange-300"> |</span></li>
    <li className="inline p-4">About  <span className=" ml-4  text-orange-300"> |</span></li>
    <li className="inline p-4">Contact  <span className="  ml-4 text-orange-300"> |</span></li>
    <li className="inline p-4">FAQ </li>

</ul>
</div>

</div>

  </>
  );
}
