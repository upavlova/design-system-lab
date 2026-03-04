import * as React from "react"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// Context wires the generated id from FormField down to FormLabel (htmlFor)
// and FormControl (id on the child input), so you never need to set them manually.
type FormFieldContextValue = { id: string }
const FormFieldContext = React.createContext<FormFieldContextValue>({ id: "" })

function useFormField() {
  return React.useContext(FormFieldContext)
}

function Form({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form
      data-slot="form"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  )
}

function FormField({
  id,
  className,
  ...props
}: React.ComponentProps<"div"> & { id?: string }) {
  const autoId = React.useId()
  return (
    <FormFieldContext.Provider value={{ id: id ?? autoId }}>
      <div
        data-slot="form-field"
        className={cn("flex flex-col gap-2", className)}
        {...props}
      />
    </FormFieldContext.Provider>
  )
}

function FormLabel({ className, ...props }: React.ComponentProps<"label">) {
  const { id } = useFormField()
  return (
    <label
      data-slot="form-label"
      htmlFor={id}
      className={cn(
        "text-sm font-medium leading-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

// Uses Slot to merge the field id into whatever input/control you pass as child,
// so the label's htmlFor connects automatically without manual wiring.
function FormControl({ ...props }: React.ComponentProps<typeof Slot.Root>) {
  const { id } = useFormField()
  return <Slot.Root data-slot="form-control" id={id} {...props} />
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="form-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="form-message"
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    />
  )
}

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  useFormField,
}
