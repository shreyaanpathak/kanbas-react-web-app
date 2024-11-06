import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentControlButtons() {

  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
