import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Header from './components/Header';
import Navbar from './components/Navbar';
import SuggestionTab from './components/SuggestionTab';
import MenuItem from './components/MenuItem'
import Footer from './components/Footer';
import Modal from './components/Modal';
import {createContext} from 'react'
export const AppContext = createContext()

function App() {
  const [MenuList, setMenuList]= useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("")
  const [modalAvatar, setModalAvatar] = useState()
  const [modalImage, setModalImage] = useState()
  const [modalYear, setModalYear] = useState()

  useEffect(() => {
    axios.get("https://yts.torrentbay.to/api/v2/list_movies.json?limit=50").then((res) => {
      setMenuList(res.data.data.movies)
    })
  })


  return (
    <div className="App">
      <AppContext.Provider value={{setModalOpen, setModalTitle, setModalAvatar, setModalImage, setModalYear}}>
        <Header />
        <Navbar />
        <SuggestionTab />
        <div className='menu-container'>  
          {MenuList.map((item, key) => {
            return (
              <MenuItem key={key} title={item.title} image={item.background_image} avatar={item.small_cover_image} year={item.year}/>
            )
          })}  
          {modalOpen && <Modal setOpenModal={setModalOpen} title={modalTitle} avatar={modalAvatar} image={modalImage} year={modalYear}/>}   
        </div>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
