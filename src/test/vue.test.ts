import { mount } from '@vue/test-utils'
import Hello from '@/components/Hello.vue'
import { expect, test } from 'vitest'

test('Mount hello message', () => {
  expect(Hello).toBeTruthy()
  expect(Hello).toBeDefined()

  const wrapper = mount(Hello, {
    props: {
      message: 'Vitwisp'
    }
  })

  expect(wrapper.props('message')).eq('Vitwisp')
})
