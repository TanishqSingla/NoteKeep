import { expect, it } from 'vitest'
import renderer from 'react-test-renderer'
import CreateNote from '../components/CreateNote/CreateNote'

it('', () => {
  const component = renderer.create(<CreateNote onAdd={() => console.log('hello')}/>)

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})