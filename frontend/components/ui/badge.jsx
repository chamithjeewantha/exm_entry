import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        success:
          "border-transparent bg-green-200 text-foreground shadow hover:bg-primarygreen-200/80",
        pending:
          "border-transparent bg-yellow-300 text-foreground shadow hover:bg-yellow-200/80",
        failure:
          "border-transparent bg-red-200 text-foreground shadow hover:bg-red-200/80",
        active:
          "border-transparent bg-blue-300 text-foreground shadow hover:bg-blue-200/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
