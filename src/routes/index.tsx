import { A } from 'solid-start'

export default function Home() {
  return (
    <main px-4 py-10 text-center>
      <div text-4xl>
        <div i-carbon-mountain inline-block=""></div>
      </div>
      <p>
        <em text-sm text-gray-500>Opinionated Vite Starter Template for <a href="https://www.solidjs.com/" text-gray-500 hover:text-dark><strong>Solid</strong></a></em>
      </p>
      <nav text-xl mt-6 >
        <A href="/">
          <div i-carbon-mountain inline-block="" text-gray hover:text-dark mx-1></div>
        </A>
        <A href="/about">
          <div i-carbon-content-view inline-block="" text-gray hover:text-dark mx-1></div>
        </A>
        <A href="https://github.com/Nauxscript/vitesse-lite-solid">
          <div i-carbon-logo-github inline-block="" text-gray hover:text-dark mx-1></div>
        </A>
      </nav>
    </main>
  )
}
