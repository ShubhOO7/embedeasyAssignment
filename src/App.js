import { Fab } from '@mui/material';
import { useState } from 'react';
import "../src/App.css";
function App() {


    var w = window.innerWidth;
    const [shown , setShown] = useState(false);
    var bottom ;
    var top;
    w > 425 ? (bottom = "450px") && (top = "520px") : (bottom = window.innerHeight - 50) && (top = window.innerWidth - 50) ;
    const Frame = (props) =>
     {
        return <div style={{position: "fixed",  bottom: 30 , right: 30,backgroundColor: "rgba(0,0,0,0.5)"}}>
          <iframe
              title={props.src}
              height= {bottom}
              src={props.src}
              width= {top}
              scrolling="auto" 
              
          />
        </div>
    }
    let styles = {
        position: 'absolute',
        bottom: bottom,
        right : 15  
      };

    const styles1 = {
        position: 'absolute',
        bottom : 20,    
        right : 15  
      };
      
      

  return (
    <div className="App" > 
    {
        shown ? 
              <>
              <Frame src=" https://www.google.com/search?igu=1"/>
              <Fab variant="extended" color="primary" aria-label="add" className="App-Btn" 
                onClick={() => setShown(!shown)} style={styles}>x</Fab>  
              </>
             :          
             <Fab variant="extended" color="primary" aria-label="add" className="App-Btn" 
             onClick={() => setShown(!shown)  } style={styles1}>Click Me</Fab>
    
    }
    </div>
  );
}

export default App;




// Youtube stackoverflow etc. with X-frame-optionss not supported can't be displayed