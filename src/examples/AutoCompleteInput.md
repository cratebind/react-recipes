---
path: /docs/autocomplete
---

# Autocomplete Input

Accessible autocomplete examples.

(Compliant with [wai-aria-practices](https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox))

## Usage

### Standard dropdown search. 

```jsx
import React, { useState, useEffect } from 'react';

const dropdownStyle = {
  background: '#efefef',
  padding: '5px',
};

const optionStyle = {
  cursor: 'pointer',
};

function Example() {
  const [color, setColor] = useState('');
  const [options] = useState([
    'red',
    'green',
    'blue',
    'purple',
    'orange',
    'yellow',
  ]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selected, setSelected] = useState(false);

  // As the color changes with every keystroke, the options array will be filtered out to match the color variable
  useEffect(() => {
    const filteredSearch = options.filter(option =>
      option.toLowerCase().includes(color.toLowerCase())
    );
    setFilteredOptions(filteredSearch);
  }, [color, options, setFilteredOptions]);

  const handleColorChange = event => {
    setColor(event.target.value);
    setSelected(false);
  };

  const selectOption = option => {
    setColor(option);
    setSelected(true);
  };

  return (
    <div>
      <p>Tell us your favorite color!</p>
      <input type="text" value={color} onChange={handleColorChange} />
      {/* The dropdown options will display if the input field has value, and no option has been selected. */}
      {color && !selected && (
        <section style={dropdownStyle}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, optionIndex) => {
              return (
                <p
                  key={optionIndex}
                  style={optionStyle}
                  onClick={() => selectOption(option)}
                >
                  {option}
                </p>
              );
            })
          ) : (
            //   If the color is not found in the options array, this error message will display.
            <p style={{ color: 'red' }}>Option not found!</p>
          )}
        </section>
      )}
    </div>
  );
}
```


### Autocomplete with keyboard accessible. 

```jsx
import React, { useState, useEffect } from 'react';

const dropdownStyle = {
  background: '#efefef',
  padding: '5px',
};

const optionStyle = {
  cursor: 'pointer',
};

const activeOptionStyle = {
  color: 'teal',
  background: '#e9e9e9',
  cursor: 'pointer',
};

function Example() {
  const [color, setColor] = useState('');
  const [options] = useState([
    'red',
    'green',
    'blue',
    'purple',
    'orange',
    'yellow',
  ]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selected, setSelected] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0)

  // As the color changes with every keystroke, the options array will be filtered out to match the color variable
  useEffect(() => {
    const filteredSearch = options.filter(option =>
      option.toLowerCase().includes(color.toLowerCase())
    );
    setActiveSuggestion(0)
    setFilteredOptions(filteredSearch);
  }, [color, options, setFilteredOptions]);

  const handleColorChange = event => {
    setColor(event.target.value);
    setSelected(false);
  };

  const selectOption = option => {
    setColor(option);
    setSelected(true);
  };

// Keydown event handles the ability to navigate with the up and down arrows. 
  const handleKeyDown = event => {
    if (
      event.key === 'ArrowDown' &&
      activeSuggestion < filteredOptions.length - 1
    ) {
      setActiveSuggestion(activeSuggestion + 1);
    }
    if (event.key === 'ArrowUp' && activeSuggestion > 0) {
      setActiveSuggestion(activeSuggestion - 1);
    }

    if (event.key === 'Enter') {
      setColor(filteredOptions[activeSuggestion]);
      setSelected(true)
    }
  };

  return (
    <div>
      <p>Tell us your favorite color!</p>
      <input type="text" value={color} onChange={handleColorChange} onKeyDown={handleKeyDown} />
      {/* The dropdown options will display if the input field has value, and no option has been selected. */}
      {color && !selected && (
        <section style={dropdownStyle}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, optionIndex) => {
              return (
                <p
                  key={optionIndex}
                  style={activeSuggestion === optionIndex ? activeOptionStyle : optionStyle}
                  onClick={() => selectOption(option)}
                >
                  {option}
                </p>
              );
            })
          ) : (
            //   If the color is not found in the options array, this error message will display.
            <p style={{ color: 'red' }}>Option not found!</p>
          )}
        </section>
      )}
    </div>
  );
}
```

### Autocomplete with asynchronous information

```jsx
import React, { useState, useEffect } from 'react';

const dropdownStyle = {
  background: '#efefef',
  padding: '5px',
};

const optionStyle = {
  cursor: 'pointer',
};

const activeOptionStyle = {
  color: 'teal',
  background: '#e9e9e9',
  cursor: 'pointer',
};

function Example() {
  const [color, setColor] = useState('');
  const [options, setOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selected, setSelected] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  // API to retrieve the information from the pokemon API
  // https://pokeapi.co/
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const pokemonData = data.results.map(pokemon => pokemon.name);
        // Set the options once data is received.
        setOptions(pokemonData);
      });
  }, []);

  // As the color changes with every keystroke, the options array will be filtered out to match the color variable
  useEffect(() => {
    const filteredSearch = options.filter(option =>
      option.toLowerCase().includes(color.toLowerCase())
    );
    setActiveSuggestion(0);
    setFilteredOptions(filteredSearch);
  }, [color, options, setFilteredOptions]);

  const handleColorChange = event => {
    setColor(event.target.value);
    setSelected(false);
  };

  const selectOption = option => {
    setColor(option);
    setSelected(true);
  };

// Keydown event handles the ability to navigate with the up and down arrows. 
  const handleKeyDown = event => {
    if (
      event.key === 'ArrowDown' &&
      activeSuggestion < filteredOptions.length - 1
    ) {
      setActiveSuggestion(activeSuggestion + 1);
    }
    if (event.key === 'ArrowUp' && activeSuggestion > 0) {
      setActiveSuggestion(activeSuggestion - 1);
    }

    if (event.key === 'Enter') {
      setColor(filteredOptions[activeSuggestion]);
      setSelected(true);
    }
  };

  return (
    <div>
      <p>Tell us your favorite pokemon!</p>
      <input
        type="text"
        value={color}
        onChange={handleColorChange}
        onKeyDown={handleKeyDown}
      />
      {/* The dropdown options will display if the input field has value, and no option has been selected. */}
      {color && !selected && (
        <section style={dropdownStyle}>
          {!options.length ? (
            <p>loading ...</p>
          ) : filteredOptions.length > 0 ? (
            filteredOptions.map((option, optionIndex) => {
              return (
                <p
                  key={optionIndex}
                  style={
                    activeSuggestion === optionIndex
                      ? activeOptionStyle
                      : optionStyle
                  }
                  onClick={() => selectOption(option)}
                >
                  {option}
                </p>
              );
            })
          ) : (
            //   If the color is not found in the options array, this error message will display.
            <p style={{ color: 'red' }}>Option not found!</p>
          )}
        </section>
      )}
    </div>
  );
}


```


## Props

N/A

