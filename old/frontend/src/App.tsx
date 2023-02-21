import React from 'react';
import './App.css';
import { getSites } from './actions/site/action';
import { connect } from "react-redux";

interface AppProps {
  getSites: () => void
}

const App: React.FC<AppProps> = ({ getSites }) => {
    
// в App ничего не пиши;
// Все основные компоненты на одном уровне как App будут находится в папке pages

React.useEffect(() => {
  getSites()
}, [])

return (
    <div className="App">

    </div>
  );
}
window.addEventListener('pywebviewready', function() {
  var container = document.getElementById('pywebview-status')
  container.innerHTML = '<i>pywebview</i> is ready'
})
function getRandomNumber() {
  pywebview.api.getRandomNumber().then(showResponse)
}
export default connect(null, { getSites })(App);
