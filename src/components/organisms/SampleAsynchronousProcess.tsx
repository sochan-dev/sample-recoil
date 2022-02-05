import React, { VFC } from 'react'
import { specialCount, waitCount } from 'recoil/selectors/sampleSelector'
import {
  DefaultValue,
  useSetRecoilState,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

export const SampleAsynchronousProcess: VFC = () => {
  const set = useSetRecoilState(waitCount)
  const value = useRecoilValue(waitCount)
  const onClickGet = () => {}

  const onClickSet = () => {
    set(1)
  }
  return (
    <>
      <div>{value}</div>
      <button onClick={onClickGet}>{value}</button>
      <button onClick={onClickSet}>set</button>
    </>
  )
}
