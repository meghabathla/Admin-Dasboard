import { Popover, Button } from "antd";
import React from "react";
import CustomAvatar from "../custom-avatar";
import { useGetIdentity } from "@refinedev/core";


import typr {User} from '@graphql/schema.types'

const CurrentUser = () => {
    const {data :user}= useGetIdentity<User>()//getting this from auth.tsx
  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <CustomAvatar />
      </Popover>
    </>
  );
};

export default CurrentUser;
