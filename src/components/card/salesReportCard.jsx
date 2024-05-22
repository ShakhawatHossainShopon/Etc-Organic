import React from 'react';
import { Button } from "../button/Button";
import { Text } from "../text/Text";

export const SalesReportCard = ({data}) => {
  console.log(data);
    return (
      <div
        className={`my-2 flex h-40 justify-between rounded-md border-2 border-accent border-neutral-200
         bg-foreground p-6`}
      >
        <div className="grid w-[600px] grid-rows-3">
          <div className="flex">
            <Text className={"w-20 text-sm text-textColor-light"}>Mobile: </Text>
            <Text className={"w-36 text-sm font-semibold"}>{data?.user?.mobileNumber}</Text>
          </div>
          <div className="flex">
            <Text className={"w-20 text-sm text-textColor-light"}>Name: </Text>
            <Text className={"w-36 text-sm font-semibold"}>{data?.user?.name}</Text>
          </div>
          <div className="flex">
            <Text className={"w-20 text-sm text-textColor-light"}>Amount: </Text>
            <Text className={"w-36 text-sm font-semibold"}>{data?.user?.taka}</Text>
          </div>
          <div className="flex">
            <Text className={"w-20 text-sm text-textColor-light"}>Address: </Text>
            <Text className={"w-36 text-sm font-semibold"}>{data?.user?.address}</Text>
          </div>
          <div className="flex">
            <Text className={"w-20 text-sm text-textColor-light"}>Date: </Text>
            <Text className={"w-36 text-sm font-semibold"}>{data?.user?.date}</Text>
          </div>
          
        </div>
        <div className="flex flex-col justify-start gap-2">
          <Button
            className="h-8 w-32"
          >
            Invoice
          </Button>
        </div>
      </div>
    );
};
