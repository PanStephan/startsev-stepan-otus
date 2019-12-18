import * as React from 'react'
import './loader.sass'

interface IPropLoader {
  className?: string
}

const Loader = (props: IPropLoader): JSX.Element => {
  const cls = ['loader']
  if('center' === props.className) cls.push('loader-center')
  return (
    <div className={cls.join(' ')}></div>
  )
}

export default Loader 