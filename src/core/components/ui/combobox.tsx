"use client"
 
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/core/lib/utils"
import { Button } from "@/core/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/core/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/core/components/ui/popover"
import { CommandOption } from "@/core/types/ui"
 
interface ComboBoxProps {
    options: CommandOption[]
    selectedOption?: CommandOption
    defaultOption?: CommandOption
    onSelectedChanged?: (value: CommandOption) => void
    commandInput?: string
    noResultsText?: string
}
 
export function ComboBox({options, selectedOption, defaultOption, onSelectedChanged, commandInput, noResultsText}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false)
  const [internalSelected, setInternalSelected] = React.useState<CommandOption | undefined>(defaultOption ?? options[0])

  const selected = selectedOption ?? internalSelected

  const handleSelect = (currentValue: string) => {
    const option = options.find(c => c.value === currentValue)
    if (!option) return

    if (onSelectedChanged) {
      onSelectedChanged(option)
    } else {
      setInternalSelected(option)
      if (option.execute)
        option.execute(currentValue)
    }
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selected
            ? selected.label
            : "Select option..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={commandInput ?? "Search..."} />
          <CommandList>
            <CommandEmpty>{noResultsText ?? 'No results found.'}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleSelect}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      selected?.value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ComboBox