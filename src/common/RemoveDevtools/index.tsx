type RemoveDevtoolsProps = {
  nonce?: string
}

function RemoveDevtools({ nonce }: RemoveDevtoolsProps) {
  const removeDevtools =
    '"object"==typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(__REACT_DEVTOOLS_GLOBAL_HOOK__.inject=function(){})'

  return (
    <script
      key="remove-devtools"
      nonce={nonce}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: removeDevtools }}
    />
  )
}

RemoveDevtools.defaultProps = {
  nonce: null,
}

export default RemoveDevtools
