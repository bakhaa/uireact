Basic Icon:

```jsx
<div>
  <Icon glyph="close" />
  <Icon glyph="done" />
  <Icon glyph="delete" />
  <Icon glyph="arrow_down" />
  <Icon glyph="arrow_up" />
  <Icon glyph="arrow_left" />
  <Icon glyph="arrow_right" />
  <Icon glyph="link" />
  <Icon glyph="lock" />
  <Icon glyph="minimize" />
  <Icon glyph="maximize" />
  <Icon glyph="message" />
  <Icon glyph="more" />
  <Icon glyph="more_outline" />
  <Icon glyph="notifications" />
  <Icon glyph="person" />
  <Icon glyph="plus" />
  <Icon glyph="plus_outline" />
  <Icon glyph="reply" />
  <Icon glyph="schedule" />
  <Icon glyph="search" />
  <Icon glyph="send" />
  <Icon glyph="star" />
  <Icon glyph="verified" />
</div>
```

Themed Icons:

```jsx
<div>
  <Icon glyph="maximize" theme="primary" />
  <Icon glyph="maximize" theme="success" />
  <Icon glyph="maximize" theme="danger" />
  <Icon glyph="maximize" theme="info" />
  <Icon glyph="maximize" theme="warning" />
</div>
```

Inverted Icon:

```jsx
<div>
  <Icon glyph="maximize" theme="primary" inverted />
  <Icon glyph="maximize" theme="success" inverted />
  <Icon glyph="maximize" theme="danger" inverted />
  <Icon glyph="maximize" theme="info" inverted />
  <Icon glyph="maximize" theme="warning" inverted />
</div>
```

Sizable icon:

```jsx
<div>
  <Icon glyph="maximize" theme="primary" size="small" />
  <Icon glyph="maximize" theme="success" size="small" inverted />
  <Icon glyph="maximize" theme="info" />
  <Icon glyph="maximize" theme="danger" inverted />
  <Icon glyph="maximize" theme="info" size="large" />
  <Icon glyph="maximize" theme="warning" size={60} inverted />
</div>
```

Clickable Icon:

```jsx
<div>
  <Icon glyph="maximize" theme="primary" inverted onClick={() => {}} />
  <Icon glyph="maximize" theme="success" onClick={() => {}} />
  <Icon glyph="maximize" theme="danger" inverted onClick={() => {}} />
  <Icon glyph="maximize" theme="info" size="large" onClick={() => {}} />
  <Icon glyph="maximize" theme="warning" size="large" inverted onClick={() => {}} />
</div>
```
