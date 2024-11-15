import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function SimplePagination({ active, onPageChange, totalPages }) {
  const next = () => {
    const nextPage = active === totalPages ? 1 : active + 1; 
    onPageChange(nextPage);
  };

  const prev = () => {
    const prevPage = active === 1 ? totalPages : active - 1;
    onPageChange(prevPage);
  };

  return (
    <div className="flex items-center gap-8 pb-20">
      <IconButton size="sm" onClick={prev}>
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="white" className="font-normal">
        Page <strong className="text-yellow-300">{active}</strong> of{" "}
        <strong className="text-yellow-300">{totalPages}</strong>
      </Typography>
      <IconButton size="sm" onClick={next}>
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
