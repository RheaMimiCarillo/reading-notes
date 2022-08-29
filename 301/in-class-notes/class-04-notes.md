# notes



to create a new React project
in terminal, navigate to project directory

``` JavaScript

// the npx line to get react stuff
// then create a new project in github from existing thingy
// then link to netlify

// in the project:

// import React
import React from 'react';

// import Components
import ListGroup from 'react-bootstrap/ListGroup'

// import the bootstrap CSS into the top of the `index.js`



  // data for the ListGroup
  let data = [1,2,3,4,5,6];


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      // this is 
      name: '',

      // this an empty string for 
      howToSort: '',

      // 
    }
  }
  
  /*
  // plain ol' JS
  let numbers = data.map((num, idx) =>
  {
    // ListGroup.Item is the bootstrap version of a <li> element
    return <ListGroup.Item key={idx}>{num}</ListGroup.Item>
  });

  */

  // react way
  let numbers = this.state.filteredData.map((num, idx) =>
  {
    // ListGroup.Item is the bootstrap version of a <li> element
    return <ListGroup.Item key={idx}>{num}</ListGroup.Item>
  });
  

  // plain ol' JavaScript
  handleSubmit = e => {
    e.preventDefault();

    // set the value of name to the value of the name property of
    let name = e.target.name.value;
    
    // `selected` is the property of the <select> tag
    let theThingTheUserSelected = e.target.selected.value;
    
    this.setState(
    {
      name: name,
      howToSort: selected,
    });
  
    handleSelect = e =>
    {
      let selected = this.target.value;
      this setState(
        {
          howToSort: selected,
        }
      )
    }
  
  }
  render()
  {
    return 
    (
      <>
        <header>
          <h1>Forms in  React</h1>
        </header>
        <main>
          {/* event handler for submission of form*/}
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" name="name"/>
            </label>
            {/*event handler for changing state earlier*/}
            <fieldset onChange={this.handleSelect}>
              <legend>
              {/*making a dropdown menu for user to select numbers*/}
                <select name="selected">
                  <option value="all"></option>
                  <option value="even"></option>
                  <option value="odd"></option>
                </select>
              </legend>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
          <ListGroup>
            {/* create list items from array */}
            {num}
          </ListGroup>
        </main>
      </>
    );
  }
}


export default App;

```



``` JavaScript


```

by putting values into state before we need to use it, it'll be available and updated when we want it
