import { Menu, MenuMenu } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <Menu inverted secondary fixed='top'>
      <Menu.Item header icon='amilia' />
      <Menu.Item name='Workspaces' />
      <Menu.Item name='Account' />
      <Menu.Item name='Reports' />
      <Menu.Item name='Settings' />
      <MenuMenu position='right'>
        <Menu.Item name='Log in' />
        <Menu.Item name='Register' />
      </MenuMenu>
    </Menu>
  )
}
