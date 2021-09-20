import React, { useEffect, useState } from "react";
import cappacitaList from "../../api/cappacitaList";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import "../../components/FontawsomeIcons";
import Loading from "../../img/loading.gif";
import Produtions from "../../components/Produtions";
import Footer from '../../components/Footer';
import './style.css'


const Home = ()=>{
    const [prodution, setProdution] = useState([]);
    const [blackHeader, setBlackHeader] = useState(false);
  
    useEffect(()=>{
      const loadList = async ()=>{
          let lista = await cappacitaList.getListHome();
          setProdution(lista)
      }
      loadList();
    }, []);
  
    useEffect(()=>{
      const scrollListener = ()=>{
        if(window.scrollY > 10){
          setBlackHeader(true);
        }else{
           setBlackHeader(false) 
        }
      }
  
      window.addEventListener('scroll', scrollListener);
      return ()=>{
        window.removeEventListener('scroll', scrollListener);
      }
    },[]);
  
  
    return (
      <div className="pageHome" >
          <Header black={blackHeader} />
  
          <Hero/>
  
          <section className="list_produtions">
             {prodution.map((element, key)=>(
                <Produtions key={key} title={element.title} items={element.items}/>
             ))}
          </section>
          
          <Footer/>
  
  
          {prodution.length <= 0 && 
          
           <div className="loading">
              <img src={Loading} alt="loading"/>
           </div> 
          
          }        
      </div>
    )

}

export default Home;
