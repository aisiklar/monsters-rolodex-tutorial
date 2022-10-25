
# Notes / Notlar

### 1) aysnc setState() and logging the new state
setState() içerisine bir arrow function (immediately invoked) ve callback function yazdık.
Callback function, ilk function tamamlanınca execute eder. Böylece console.log'a yeni state yazılır.
Bu şekilde yapılmazsa, setState async olduğu için bir önceki state yazılıyordu


 return (
    <main>
      {this.state.myLevel} and my company is {this.state.myCompany}<br></br>
      <button onClick={() => {
      console.log('Button Pressed!');
      this.setState(
        () => {
          return {myLevel: 'now I am a Pro!'}
        }, () => {console.log(this.state) 
      })
      }}>Submit to become a Pro</button>
    </main>
  )  
  }
}

### 2) users API
API URL: https://jsonplaceholder.typicode.com/users 

### 3) rendering order in Class components
1. constructor()
2. render()
3. componendDidMount()
4. if there is a setState(), then the render() is re-rendered
