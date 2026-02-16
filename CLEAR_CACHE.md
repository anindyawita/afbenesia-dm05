# Clear Login Cache

Buka Browser Console (F12) → Console tab, paste dan enter:

```javascript
localStorage.removeItem("afbenesia-auth");
location.reload();
```

Atau buka Application tab → Local Storage → http://localhost:5173 → Hapus "afbenesia-auth"
