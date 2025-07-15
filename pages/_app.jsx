import { Html, Head, Main, NextScript } from 'next/document'
import 'nextra-theme-docs/style.css'
import './main.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
} 