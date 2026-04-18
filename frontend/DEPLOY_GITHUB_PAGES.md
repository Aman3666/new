# Reckon Computers — Deploy to GitHub Pages

This frontend is ready to run on **GitHub Pages** with **zero backend**.
The contact form submits directly to WhatsApp with all fields pre-filled —
no server required.

---

## Step 1 — Push this `frontend/` folder to a GitHub repo

```bash
# from inside /app/frontend
git init
git add .
git commit -m "Reckon Computers site"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

> Tip: the easiest way on Emergent is to use the **"Save to GitHub"** button in chat —
> it pushes the whole project for you.

---

## Step 2 — Set the homepage

Open `package.json` and set the `homepage` field to **one of**:

| Where you'll host it | `homepage` value |
| --- | --- |
| `https://<user>.github.io/<repo>/` (project site) | `"https://<user>.github.io/<repo>"` |
| `https://<user>.github.io/` (user/organization site) | `"/"` |
| Any path — works universally (recommended) | `"."` |

The current value is `"."` which works everywhere without editing.

---

## Step 3 — Build & deploy

```bash
cd frontend
yarn install
yarn deploy
```

`yarn deploy` runs `yarn build` and pushes the `build/` folder to a `gh-pages`
branch automatically (via the `gh-pages` package).

---

## Step 4 — Turn on GitHub Pages

1. Repo → **Settings → Pages**
2. **Source** → `Deploy from a branch`
3. **Branch** → `gh-pages`  /  Folder: `/ (root)`
4. Save — your site goes live at
   `https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/` in ~60 seconds.

---

## Notes

- **Contact form** submits to WhatsApp (+91 99750 30303). No backend needed.
- If you later want to capture leads in a database too, set
  `REACT_APP_BACKEND_URL=https://your-backend.com` in a `.env.production`
  file *before* `yarn build` — the form will POST silently, then still
  open WhatsApp.
- **Routing** — this site is a single-page scroll experience (all 6 sections
  on `/`), so GitHub Pages routing quirks don't apply. Hard refresh works.
- **Brand logos** — HP/Dell/Lenovo/Intel/Microsoft/AMD/Epson use
  `react-icons` (bundled). Hikvision, Dahua & Quick Heal are loaded from
  Wikimedia Commons over HTTPS.

---

## One-shot deploy script

```bash
git clone https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
cd <YOUR_REPO>/frontend
yarn install
yarn deploy
```

Done. Your production URL: `https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`
