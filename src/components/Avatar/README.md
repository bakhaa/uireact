```jsx
const users = [
  {
    photo: 'https://www.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60',
  },
  {
    photo: 'https://www.gravatar.com/avatar/084643c42fcc4b48b985e4e744f0012b',
    online: true
  }
];

<div>
  {users.map((user, key) => <Avatar key={key} {...user} size={100} />)}
</div>
```

Clickable avatar

```jsx
const users = [
  {
    photo: 'https://www.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60',
  },
  {
    photo: 'https://www.gravatar.com/avatar/084643c42fcc4b48b985e4e744f0012b',
    online: true
  }
];

<div>
  {users.map((user, key) => <Avatar key={key} {...user} onClick={() => {
    alert('I`m avatar handler');
  }} size={100} />)}
</div>
```

Fake avatar

```jsx
const user = null;

<div className="styleguide__buttons">
  <Avatar {...user} size="big" />
</div>
```
