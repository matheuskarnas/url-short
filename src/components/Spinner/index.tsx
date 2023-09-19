import { TailSpin } from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <TailSpin
      height='20'
      color='blue'
      ariaLabel='tail-spin-loading'
      radius='1'
      wrapperStyle={{ backgroundColor: 'var(--Cyan)' }}
      wrapperClass='spinner'
      visible={true}
    />
  )
}
