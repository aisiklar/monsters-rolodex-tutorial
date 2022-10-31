
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

### 4) onChange( (event)=> {....} ) fonksiyonunun dışarı taşınması (optimizasyon-1)
eğer yukarıdaki fonksiyon, render() içerisinde verilirse, her rendering sırasında bu fonksiyon initialize edileceğinden performansta düşme olabilir. (özellikle çok fonksiyon varsa)
Dolayısıyla bu tip fonksiyonları render() dışına alıyoruz...


### 5) tutorial'dan sapılan / farklılaşan kısımlar

* L42: tutorial'da searchfield'a yazılan "input text" state olarak tanımlanmış. Ben, filteredMonsters'ı tanımladım.

### 6) Diğer optimizasyon

* her yerde this.state.... yazmamak için destructuring yapıldı (render() fonksiyonun içinde ama return() dışında)

    `const { onSearchChange } = this;`

bende ihtiyaç olmadı (benim kodum tutorial'dan biraz farklı olduğu için) ama aşağıdaki de olabilir.
    `const { monsters, filteredMonsters } = this.state;`


### re-rendering of components
* occurs on 2 conditions:
  * when setState() is called
  * when props are updated

### robots api
https://robohash.org/
