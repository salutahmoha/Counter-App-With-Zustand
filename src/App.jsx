import { useState } from 'react'
import './App.css'
import './index.css'
import CounterApp from './components/counter'
import Header from './components/Header'

function App() {
 
  return (
    <>
    <Header />
    <main>
     <CounterApp /> 
    </main>
    </>
  )
}

export default App
