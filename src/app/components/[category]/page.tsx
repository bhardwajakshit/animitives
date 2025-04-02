import fs from 'fs'

export const generateStaticParams = () =>
  Object.keys(ComponentConfigs).map((category) => ({ category }))

import { notFound } from 'next/navigation'
import ComponentsPageClient from './page-client'
import { ComponentConfigs } from '@/core/configs/component-configs'
import { ComponentCard } from '@/components/components-page/component-card'
import MobileViewWrapper from '@/components/components-page/mobile-view-wrapper'
import { Footer } from '@/components/common/footer'

const getComponentCode = (filePath: string) => {
  try {
    const code = fs.readFileSync(filePath, 'utf-8')
    return code
  } catch (error) {
    console.error('Error reading the file:', error)
    throw error
  }
}

const ComponentsPage = async ({ params }: { params: { category: string } }) => {
  const { category } = await params

  if (!ComponentConfigs[category]) {
    return notFound()
  }

  const clsxCode = getComponentCode('src/lib/cn.ts')

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col">
      <div className="flex flex-col items-center px-12 pb-10 pt-20 md:px-24">
        <MobileViewWrapper>
          <h1 className="mb-8 py-14 text-center text-sm font-normal md:text-lg 2xl:text-xl">
            {ComponentConfigs[category]?.label ||
              'A complete set of beautiful animated components designed to elevate your UI effortlessly.'}
          </h1>

          <div className="relative flex w-full flex-col items-center justify-center gap-10">
            {ComponentConfigs[category]?.components.map(
              ({
                label,
                ComponentComponent: Component,
                path,
                reloadable,
                requirements,
              }) => {
                const code = getComponentCode(path)
                return (
                  <div
                    key={label}
                    className="flex w-full flex-col items-center justify-center gap-4"
                  >
                    <h1 className="mb-4 w-fit rounded-full bg-stone-200/60 px-6 py-2 text-xs font-medium text-stone-800 backdrop:blur-sm dark:bg-neutral-800/60 dark:text-neutral-300 2xl:text-sm">
                      {label}
                    </h1>
                    <ComponentCard
                      Component={Component}
                      reloadable={reloadable}
                      code={code}
                      clsxCode={clsxCode}
                      requirements={requirements}
                    />
                  </div>
                )
              }
            )}
          </div>
        </MobileViewWrapper>
      </div>

      <ComponentsPageClient category={category} />

      <Footer />
    </div>
  )
}

export default ComponentsPage
