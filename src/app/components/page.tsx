import { ComponentConfigs } from '@/core/configs/component-configs'
import { redirect } from 'next/navigation'

export default function ComponentsPage() {
  const firstCategory = Object.keys(ComponentConfigs)[0]

  redirect(`/components/${firstCategory}`)
}
