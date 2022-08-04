import { AbortController } from '../abort-controller'
import { fetch } from '../fetch'

it('allows to abort fetch', async () => {
  expect.assertions(1)
  const controller = new AbortController()
  controller.abort()

  try {
    await fetch('https://example.vercel.sh', {
      signal: controller.signal,
    })
  } catch (error: any) {
    expect(error.message).toEqual('The operation was aborted')
  }
})

it('AbortSignal.abort is defined', () => {
  expect(typeof AbortSignal.abort).toBe('function')
})

it('AbortSignal.timeout is defined', () => {
  expect(typeof AbortSignal.timeout).toBe('function')
})

it('AbortSignal.reason is present', () => {
  const controller = new AbortController()
  controller.abort()
  const signal = controller.signal

  expect(!!signal.reason).toBe(true)
})

it('AbortSignal.aborted is present', () => {
  const controller = new AbortController()
  controller.abort()
  const signal = controller.signal

  expect(!!signal.aborted).toBe(true)
})

it('AbortSignal.throwIfAborted is present', () => {
  const controller = new AbortController()
  controller.abort()
  const signal = controller.signal

  expect(!!signal.throwIfAborted).toBe(true)
})
