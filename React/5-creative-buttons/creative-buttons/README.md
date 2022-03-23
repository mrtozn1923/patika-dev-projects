# creative-buttons

> creative react buttons

[![NPM](https://img.shields.io/npm/v/creative-buttons.svg)](https://www.npmjs.com/package/creative-buttons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save creative-buttons
```

## Usage

```jsx
import React from 'react'

import { Button } from 'creative-buttons'
import 'creative-buttons/dist/index.css'

const App = () => {
  return (
    <div className="container">
      <Button text="Default Button" />
      <Button text="Dashed Button" type="dashed" />
      <Button text="Primary Button" type="primary" />
      <Button text="Text Button" type="text" />
      <Button text="Link Button" type="link" />
    </div>
  )
}
```

## License

MIT © [mrtozn1923](https://github.com/mrtozn1923)
