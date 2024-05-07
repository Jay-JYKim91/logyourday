import React from "react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

type AlertType = {
  title: string
  description?: string | null
}
export default function AlertComponent({
  title,
  description = null,
}: AlertType) {
  return (
    <Alert>
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription></AlertDescription>}
    </Alert>
  )
}
