type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
}

export function Button({ isLoading, children, type="button", ...rest }: Props) {
  return <button type={type} {...rest} disabled={isLoading} className="flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear h-12 text-sm font-medium disabled:opacity-50 disabled:cursor-progress">{children}</button>
}