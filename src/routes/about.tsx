import { A } from 'solid-start'
export default function About() {
  return (
    <main px-4 py-10 text-center>
      <div text-4xl>
        <div i-carbon-content-view inline-block=""></div>
      </div>
      <p>
        <em text-sm text-gray-500>
          a easy starter template for Solid, setup by <a href="https://github.com/Nauxscript" text-gray-500 hover:text-dark><strong>me</strong></a>,
          inspired by <a href="https://github.com/antfu" text-gray-500 hover:text-dark><strong>@Anthony Fu</strong></a></em>
      </p>
      <A href="/">../</A>
    </main>
  )
}
