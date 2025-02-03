"use client";

import { CommandOption, Option } from '@/core/types/ui'
import ComboBox from "@/core/components/ui/combobox";
import { Separator } from "@radix-ui/react-separator";
import { useState } from 'react';
import { TestTable } from '@/modules/orchestration/components/servers-data-table';

export default function Home() {
  const options = [
    {
      label: 'Server 1',
      value: 'server1',
      execute: (val: string) => console.log(val)
    },
    {
      label: 'Server 2',
      value: 'server2',
      execute: (val: string) => console.warn(val)
    },
  ];

  const [selected, setSelected] = useState<CommandOption>(options[0]);

  const handleSelectChange = (option: CommandOption) => {
    console.log("Test")
    setSelected(option);

    if (option.execute)
      option.execute(option.value);
  }

  return (
    <>
      <header className="h-16 flex items-center border-b">
        <div className="container mx-auto px-4 flex items-center gap-2">
          <div className="text-white text-xl sm:text-xl xl:text-2xl uppercase font-bold">
            S
          </div>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <ComboBox options={options} selectedOption={selected} onSelectedChanged={handleSelectChange} />
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 container">
        <TestTable test="hey"/>
      </div>
    </>
  );
}
