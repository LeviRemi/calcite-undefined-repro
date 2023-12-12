# Calcite Undefined Error Demonstration

## Error Log
```log
Uncaught TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
```

## How to Run
```shell
    npm i
    npm run dev
```

## Error Context
* Error appears when leaving a page with CalcitePopover (configured with a referenceElement) containing a Calcite List.
* Error may occur as far back as 1.9.2, but I have not tested prior.
* Error occurs with or without activating popover.
* This error may also appear when Calcite Popover contains other elements, though I have not tested them.
* See "Popover with interactive content" sample and check dev console for error: https://developers.arcgis.com/calcite-design-system/components/popover/