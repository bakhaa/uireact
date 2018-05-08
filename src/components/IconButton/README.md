Basic IconButton:

```jsx
<div className="styleguide__buttons">
  <IconButton glyph="maximize" onClick={() => alert('Clicked')} />
  <IconButton glyph="delete" onClick={() => alert('Clicked')} />
</div>
```

IconButton sizes:

```jsx
<div className="styleguide__buttons">
  <IconButton glyph="done" size="small" onClick={() => alert('Clicked')} />
  <IconButton glyph="edit" size="normal" onClick={() => alert('Clicked')} />
  <IconButton glyph="more" size="large" onClick={() => alert('Clicked')} />
</div>
```

Flat Themed IconButton:

```jsx
<div className="styleguide__buttons">
  <IconButton glyph="maximize" size="small" onClick={() => {}} flat theme="default" />
  <IconButton glyph="maximize" size="small" onClick={() => {}} flat theme="primary" />
  <IconButton glyph="maximize" size="small" onClick={() => {}} flat theme="success" />
  <IconButton glyph="maximize" size="small" onClick={() => {}} flat theme="danger" />
  <IconButton glyph="maximize" size="small" onClick={() => {}} flat theme="info" />
  <IconButton glyph="maximize" size="small" onClick={() => {}} flat theme="warning" />
  <br />
  <IconButton glyph="maximize" size="normal" onClick={() => {}} flat theme="default" />
  <IconButton glyph="maximize" size="normal" onClick={() => {}} flat theme="primary" />
  <IconButton glyph="maximize" size="normal" onClick={() => {}} flat theme="success" />
  <IconButton glyph="maximize" size="normal" onClick={() => {}} flat theme="danger" />
  <IconButton glyph="maximize" size="normal" onClick={() => {}} flat theme="info" />
  <IconButton glyph="maximize" size="normal" onClick={() => {}} flat theme="warning" />
  <br />
  <IconButton glyph="maximize" size="large" onClick={() => {}} flat theme="default" />
  <IconButton glyph="maximize" size="large" onClick={() => {}} flat theme="primary" />
  <IconButton glyph="maximize" size="large" onClick={() => {}} flat theme="success" />
  <IconButton glyph="maximize" size="large" onClick={() => {}} flat theme="danger" />
  <IconButton glyph="maximize" size="large" onClick={() => {}} flat theme="info" />
  <IconButton glyph="maximize" size="large" onClick={() => {}} flat theme="warning" />
</div>
```

Disabled IconButton:

```jsx
<div className="styleguide__buttons">
  <IconButton glyph="maximize" size="normal" disabled />
  <IconButton glyph="maximize" size="large" disabled />
  <br />
  <IconButton glyph="maximize" size="normal" flat disabled />
  <IconButton glyph="maximize" size="large" flat disabled />
</div>
```
