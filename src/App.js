import './App.css';

function App() {

  function loadModelEventHandler(){
    let iframe = document.getElementById("inlineFrameExample"); 
    console.log(iframe.contentWindow.window.pc);
  }

  function setColorEventHandler(e){
    let target = e.target;
    var color = target.getAttribute('color');
    console.error(color);
    let iframe = document.getElementById("inlineFrameExample"); 
    iframe.contentWindow.postMessage({
      event: 'setColor',
      options: { color: color},
    }, "https://playcanv.as/e/p/NERwz7Rf/");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>FurniReality</h1>
      </header>
      <div className="App-content">      
        <div className="Buttons-container">
        <div className='Model-container'>
          <h2 className='text'>
                Click the button to load sofa model 
                <button className="btn" onClick={loadModelEventHandler}>Load Sofa</button>
            </h2>
        </div>
          <div className='Colors-container'>
            <h3 className='text'>
                Click the button to change color of the model
            </h3>
            <div className="Button-wrapper">
                <button color="#008000" className="btn" onClick={setColorEventHandler}>Green</button>
                <button color="#00008b" className="btn" onClick={setColorEventHandler}>Blue</button>
                <button color="#ff0000" className="btn" onClick={setColorEventHandler}>Red</button>
                <button color="#cccccc" className="btn" onClick={setColorEventHandler}>Gray</button>
            </div>
          </div>
        </div>
        <div className='Iframe-container'>
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            loading='lazy'
            src="https://playcanv.as/e/p/NERwz7Rf/">
          </iframe>
        </div>
      </div>
    </div>
  );
}
export default App;
