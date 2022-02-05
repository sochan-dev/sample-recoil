import {
  atom,
  selector,
  useRecoilState,
  DefaultValue,
  selectorFamily,
} from 'recoil'

export const normalCount = atom({
  key: 'normalCount',
  default: 0,
})

export const specialCount = selector<number>({
  key: 'specialCount',
  get: ({ get }) => get(normalCount),
  set: ({ set }, value) => {
    if (value instanceof DefaultValue) return
    set(normalCount, (beforeState) => beforeState + 1)
  },
})

export const specialCount2 = selector<number>({
  key: 'specialCount2',
  get: () => 0,
  set: ({ set }, value) => {
    if (value instanceof DefaultValue) return
    set(normalCount, (beforeState) => beforeState + value)
  },
})

export const waitCount = selector<number>({
  key: 'waitCount',
  get: async ({ get }) => {
    await wait(3000)
    return get(normalCount)
  },
  set: ({ set }, value) =>
    wait(3000).then(() => {
      if (value instanceof DefaultValue) return
      set(normalCount, (beforeState) => beforeState + value)
    }),
})

const wait = async (milliSeconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliSeconds)
  })
}
