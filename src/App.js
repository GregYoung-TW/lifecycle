import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items:[],
      isLoaded: false,
    }
  }  
  
  increment = () => {

  }
  
  componentDidMount(){
    // put code here
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
         console.log(data)
        this.setState({
          isLoaded: true,
          items: data,
        })
      })
  }
  
  
  
  render() {
    let {isLoaded, items} = this.state;
    return(
      <div>
        <div>
          <ul>
            <li>Name: Leanna Graham | UserName: Bret |<a href="http://www.google.com">Webite</a> </li>
            <li>Name: Ervin Howell | UserName: Antonette |<a href="http://www.bing.com">Website</a></li>
            <li>Name: Clementine Bauch | UserName: Samantha |<a href="http://www.yahoo.com">Website</a></li>
            <li>Name: Patricia Lebsack | UserName: Karianne |<a href="http://www.askjeeves.com">Website</a></li>
            <li>Name: Chelsey Dietrich | UserName: Kamren |<a href="http://www.google.com">Website</a> </li>
            <li>Name: Mrs. Dennis Schulist | UserName: Leopoldo_Corkey |<a href="http://www.bing.com">Website</a></li>
            <li>Name: Kurtis Weissnat| UserName: Elqyn.Skiles | <a href="http://www.yahoo.com">Website</a></li>
            <li>Name: Nicholas Runolfsdottir| UserName: Maxime_Nienow |<a href="http://www.askjeeves.com">Website</a></li>
            <li>Name: Glenna Reichert| UserName: Delphine |<a href="http://www.google.com">Webite</a> </li>
            <li>Name: Clementina DuBuque| UserName: Moriah.Stanton |<a href="http://www.bing.com">Website</a></li>
          </ul>
        </div>
      </div>
    )
  };
};

export default App;