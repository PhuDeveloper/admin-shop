import { MenuProps } from 'antd'

export interface MenuType {
  label: string
  key: string
  icon: any
  children: MenuProps['items']
}
