// @refresh reload
import { Router } from '@solidjs/router'
import { Suspense, ErrorBoundary } from 'solid-js'
import { FileRoutes } from '@solidjs/start/router';
import { MetaProvider, Title } from '@solidjs/meta'
import 'virtual:uno.css'
import './style.css'

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Vitesse-lite-solid</Title>
          <ErrorBoundary fallback={<div>Error</div>}>
            <Suspense>
              {props.children}
            </Suspense>
          </ErrorBoundary>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
