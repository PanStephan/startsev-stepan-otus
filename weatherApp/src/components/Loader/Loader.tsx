import * as React from 'react'
import './loader.sass'

interface PropLoader {
  className?: string;
}

const Loader = (props: PropLoader): JSX.Element => {
  const cls = ['loader']
  if('center' === props.className) cls.push('loader-center')
  return (
    <div className={cls.join(' ')}></div>
  )
}

export default Loader 