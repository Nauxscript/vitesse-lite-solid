// @refresh reload
import { Routes } from '@solidjs/router'
import { Suspense } from 'solid-js'
import { Body, FileRoutes, Head, Html, Meta, Scripts, Title } from 'solid-start'
import { ErrorBoundary } from 'solid-start/error-boundary'
import './style.css'

// import 'uno.css'
import 'virtual:uno.css'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Vitesse-lite-solid</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Opinionated Vite Starter Template" />
        <link rel="icon" href="./favicon.svg"/>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
