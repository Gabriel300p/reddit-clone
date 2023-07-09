"use client";

import { signOut } from "next-auth/react";
import { FC } from "react";
import { DropdownMenuItem } from "../ui/DropdownMenu";

interface SingOutDropdownButtonProps {}

const SingOutDropdownButton: FC<SingOutDropdownButtonProps> = ({}) => {
  return (
    <DropdownMenuItem
      onSelect={(event) => {
        event.preventDefault();
        signOut({
          callbackUrl: `${window.location.origin}/sign-in`,
        });
      }}
      className="cursor-pointer"
    >
      Sign out
    </DropdownMenuItem>
  );
};

export default SingOutDropdownButton;
