import {
  BriefcaseIcon,
  PencilIcon,
  TrashIcon,
  CursorClickIcon,
} from "@heroicons/react/solid";
import * as React from "react";
import { Badge } from "components/badge";

const IconButton = (props) => (
  <button
    type="button"
    className="p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-pink-500 focus:ring-opacity-30 transition duration-150 ease-in-out"
    title={props.title}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

const EditButton = (props) => {
  return (
    <IconButton title="Edit" onClick={props.onClick}>
      <PencilIcon className="h-5 w-5 text-gray-400" />
    </IconButton>
  );
};

const DeleteButton = (props) => {
  return (
    <IconButton title="Delete" onClick={props.onClick}>
      <TrashIcon className="w-5 h-5 text-gray-400" />
    </IconButton>
  );
};

const CareerItemTitle = (props) => {
  return (
    <div className="text-sm leading-5 font-medium text-pink-600 truncate">
      {props.title}
      <span className="ml-1 font-normal text-gray-500">
        in {props.department}
      </span>
    </div>
  );
};

export function CareerItem({
  title,
  department,
  level,
  studentFriendly,
  onEdit,
  onDelete,
  onApply,
}) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-4 flex items-center sm:px-6">
        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <CareerItemTitle title={title} department={department} />
            <div className="mt-2 flex">
              <div className="flex items-center gap-2 text-sm leading-5 text-gray-500">
                <BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                <span>Level: {level} </span>
                {studentFriendly && (
                  <Badge color="green">Student-friendly</Badge>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 flex-shrink-0 inline-flex items-center justify-center gap-2">
          {onApply && (
            <IconButton onClick={onApply}>
              <CursorClickIcon className="h-5 w-5 text-gray-400" />
            </IconButton>
          )}
          {onEdit && <EditButton onClick={onEdit} />}
          {onDelete && <DeleteButton onClick={onDelete} />}
        </div>
      </div>
    </div>
  );
}
