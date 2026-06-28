Labelled text input with hint/error; use in any form.

```jsx
<Input label="E-Mail" placeholder="name@bank.de" hint="Wir antworten in 24h" />
<Input label="IBAN" error="Bitte gültige IBAN eingeben" />
```

`error` sets the invalid state and overrides `hint`. Spreads all native
`<input>` attributes (`type`, `value`, `onChange`, …).
